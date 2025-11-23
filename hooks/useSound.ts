"use client";

import { useCallback } from "react";

type SoundType = "success" | "error" | "click" | "complete";

export function useSound() {
  const playSound = useCallback((type: SoundType) => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      switch (type) {
        case "success":
          // High pitched pleasant chime
          osc.type = "sine";
          osc.frequency.setValueAtTime(523.25, now); // C5
          osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.1); // C6
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
          osc.start(now);
          osc.stop(now + 0.5);
          break;

        case "error":
          // Low pitched buzz
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(150, now);
          osc.frequency.linearRampToValueAtTime(100, now + 0.3);
          gain.gain.setValueAtTime(0.1, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
          osc.start(now);
          osc.stop(now + 0.3);
          break;

        case "click":
          // Short click
          osc.type = "square";
          osc.frequency.setValueAtTime(800, now);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
          osc.start(now);
          osc.stop(now + 0.05);
          break;

        case "complete":
          // Victory fanfare
          const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
          notes.forEach((freq, i) => {
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            
            osc2.frequency.value = freq;
            gain2.gain.setValueAtTime(0.1, now + i * 0.1);
            gain2.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.4);
            
            osc2.start(now + i * 0.1);
            osc2.stop(now + i * 0.1 + 0.4);
          });
          break;
      }
    } catch (e) {
      console.error("Audio playback failed", e);
    }
  }, []);

  return playSound;
}
