"use client";

import { useState, useEffect, useMemo } from "react";
import { OnboardingScreen } from "@/components/onboarding/OnboardingScreen";
import { PathView } from "@/components/dashboard/PathView";
import { TopicDetailView } from "@/components/dashboard/TopicDetailView";
import { LessonMode } from "@/components/lesson/LessonMode";
import { MascotHint } from "@/components/ui/MascotHint";
import { Flame, Gem, Heart } from "lucide-react";
import { contentEngine } from "@/lib/content-engine";
import { Topic, Lesson } from "@/lib/schema";

type AppState = "signin" | "onboarding" | "dashboard" | "topic-detail" | "lesson";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("signin");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [xp, setXp] = useState(0);
  const [diamonds, setDiamonds] = useState(0);
  const [hearts, setHearts] = useState(5);
  const [streak, setStreak] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [hintMessage, setHintMessage] = useState("");

  // Load course data
  const course = contentEngine.getCourse();
  
  // Calculate progress for each topic dynamically based on completed lessons
  const topicsWithProgress = useMemo(() => {
    return course.modules.flatMap(module => 
      module.topics.map(topic => {
        const completedCount = topic.lessons.filter(lesson => 
          completedLessons.has(lesson.id)
        ).length;
        const progress = topic.lessons.length > 0 
          ? Math.round((completedCount / topic.lessons.length) * 100)
          : 0;
        
        return {
          ...topic,
          progress,
          moduleName: module.title,
          moduleId: module.id
        };
      })
    );
  }, [course.modules, completedLessons]);

  // Map topics to PathNodes for the dashboard with dynamic locked/unlocked status
  const pathNodes = topicsWithProgress.map((topic, index) => {
    const isFirstTopic = index === 0;
    const previousTopicCompleted = index > 0 && topicsWithProgress[index - 1].progress === 100;
    const isCompleted = topic.progress === 100;
    
    let status: "completed" | "active" | "locked";
    if (isCompleted) {
      status = "completed";
    } else if (isFirstTopic || previousTopicCompleted) {
      status = "active";
    } else {
      status = "locked";
    }
    
    return {
      id: index + 1,
      title: topic.title,
      status,
      originalId: topic.id
    };
  });

  const handleSignIn = () => {
    setIsAuthenticated(true);
    setAppState("onboarding");
  };

  const handleOnboardingComplete = () => {
    setAppState("dashboard");
    // Trigger a welcome hint
    setHintMessage("Welcome to AlgoRhythm! Click me anytime for hints. Start by selecting the first topic!");
    setTimeout(() => setShowHint(true), 1000);
  };

  const handleNodeClick = (index: number) => {
    const topic = topicsWithProgress[index - 1]; // 1-based index from PathView
    const node = pathNodes[index - 1];
    
    if (topic && node.status !== "locked") {
      setSelectedTopic(topic);
      setAppState("topic-detail");
    }
  };

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setAppState("lesson");
  };

  const handleLessonComplete = (earnedXp: number) => {
    setXp((prev) => prev + earnedXp);
    
    // Award diamonds (1 per 10 XP earned)
    const diamondsEarned = Math.floor(earnedXp / 10);
    setDiamonds((prev) => prev + diamondsEarned);
    
    // Mark this lesson as complete
    if (selectedLesson) {
      setCompletedLessons((prev) => new Set(prev).add(selectedLesson.id));
      
      // Check if this was the last lesson in the topic
      if (selectedTopic) {
        const currentTopicIndex = topicsWithProgress.findIndex(t => t.id === selectedTopic.id);
        const updatedTopic = topicsWithProgress[currentTopicIndex];
        const newCompletedCount = updatedTopic.lessons.filter(l => 
          completedLessons.has(l.id) || l.id === selectedLesson.id
        ).length;
        
        // If all lessons are now complete, unlock next topic and navigate
        if (newCompletedCount === updatedTopic.lessons.length) {
          const nextTopicIndex = currentTopicIndex + 1;
          if (nextTopicIndex < topicsWithProgress.length) {
            // Show congratulations hint
            setHintMessage(`🎉 Awesome! You completed ${updatedTopic.title}! Moving to the next topic...`);
            setShowHint(true);
            
            // Auto-navigate to next topic after a short delay
            setTimeout(() => {
              setSelectedTopic(topicsWithProgress[nextTopicIndex]);
              setAppState("topic-detail");
            }, 2000);
            return; // Don't return to current topic
          }
        }
      }
    }
    
    setAppState("topic-detail"); // Return to topic view
  };

  const handleLessonExit = () => {
    setAppState("topic-detail");
  };

  const handleAnswerWrong = () => {
    setHearts((prev) => Math.max(0, prev - 1));
    if (hearts <= 1) {
      setHintMessage("💔 Out of hearts! Take a break and come back stronger!");
      setShowHint(true);
    }
  };

  const handleMascotClick = () => {
    // Contextual hints based on app state
    let message = "";
    
    switch (appState) {
      case "dashboard":
        const nextUnlockedTopic = pathNodes.find(node => node.status === "active");
        if (nextUnlockedTopic) {
          message = `Try "${nextUnlockedTopic.title}" next! It's unlocked and ready for you. 🚀`;
        } else {
          message = "You're doing great! Keep completing topics to unlock more content! 💪";
        }
        break;
      case "topic-detail":
        if (selectedTopic) {
          const nextLesson = selectedTopic.lessons.find(l => !completedLessons.has(l.id));
          if (nextLesson) {
            message = `Start with "${nextLesson.title}" - it's a great next step! 📚`;
          } else {
            message = "Wow! You've completed all lessons in this topic! 🎉";
          }
        }
        break;
      case "lesson":
        message = "Take your time! Read carefully and think through each step. You've got this! 💡";
        break;
      default:
        message = "Need help? I'm here for you! Click around and explore! 😊";
    }
    
    setHintMessage(message);
    setShowHint(true);
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans text-slate-900 max-w-md mx-auto shadow-2xl overflow-hidden relative sm:my-8 sm:rounded-[3rem] sm:border-8 sm:border-slate-800 sm:ring-4 sm:ring-slate-900/50">
      {appState === "signin" && (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-brand-orange/10 to-slate-50">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">AlgoRhythm</h1>
            <p className="text-slate-600">Master Data Structures & Algorithms</p>
          </div>
          
          <div className="mb-8">
            <div className="w-32 h-32 bg-white rounded-full shadow-lg p-6 border-4 border-brand-orange/20 flex items-center justify-center">
              <span className="text-6xl">🐼</span>
            </div>
          </div>
          
          <button
            onClick={handleSignIn}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-slate-200 rounded-2xl shadow-sm hover:bg-slate-50 hover:shadow-md transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-semibold text-slate-700">Sign in with Google</span>
          </button>
          
          <p className="mt-6 text-sm text-slate-500">Mock authentication for demo purposes</p>
        </div>
      )}

      {appState === "onboarding" && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}

      {appState === "dashboard" && (
        <div className="min-h-screen flex flex-col">
          {/* Dashboard Header */}
          <header className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-sm p-4 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-brand-red font-bold">
                <Heart fill="currentColor" />
                <span>{hearts}</span>
              </div>
              <div className="flex items-center space-x-1 text-brand-orange font-bold">
                <Flame fill="currentColor" />
                <span>{streak}</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-500 font-bold">
                <Gem fill="currentColor" />
                <span>{diamonds}</span>
              </div>
              <div className="text-slate-600 text-sm font-medium">
                {xp} XP
              </div>
            </div>
            
            {/* Clickable Mascot */}
            <button 
              onClick={handleMascotClick}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border-2 border-brand-orange/20 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <span className="text-2xl">🐼</span>
            </button>
          </header>

          <div className="flex-1">
            <PathView nodes={pathNodes as any} onNodeClick={handleNodeClick} />
          </div>
        </div>
      )}

      {appState === "topic-detail" && selectedTopic && (
        <div className="min-h-screen flex flex-col">
          {/* Topic Detail Header with Mascot */}
          <header className="sticky top-0 z-40 bg-slate-50/90 backdrop-blur-sm p-4 flex items-center justify-between border-b border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-brand-red font-bold">
                <Heart fill="currentColor" />
                <span>{hearts}</span>
              </div>
              <div className="flex items-center space-x-1 text-brand-orange font-bold">
                <Flame fill="currentColor" />
                <span>{streak}</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-500 font-bold">
                <Gem fill="currentColor" />
                <span>{diamonds}</span>
              </div>
            </div>
            
            <button 
              onClick={handleMascotClick}
              className="w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow border-2 border-brand-orange/20 flex items-center justify-center cursor-pointer active:scale-95"
            >
              <span className="text-2xl">🐼</span>
            </button>
          </header>
          
          <TopicDetailView
            topic={{
              ...selectedTopic,
              lessons: selectedTopic.lessons.map((lesson, index) => ({
                ...lesson,
                isCompleted: completedLessons.has(lesson.id),
                isLocked: index > 0 && !completedLessons.has(selectedTopic.lessons[index - 1].id)
              }))
            }}
            onBack={() => setAppState("dashboard")}
            onLessonSelect={handleLessonSelect}
          />
        </div>
      )}

      {appState === "lesson" && selectedLesson && (
        <LessonMode
          lesson={selectedLesson}
          onComplete={handleLessonComplete}
          onExit={handleLessonExit}
        />
      )}

      <MascotHint 
        message={hintMessage} 
        isVisible={showHint} 
        onClose={() => setShowHint(false)} 
        type="encouragement"
      />
    </main>
  );
}
