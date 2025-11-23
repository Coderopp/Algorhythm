import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GoogleSignIn from '@/components/GoogleSignIn';
import { vi } from 'vitest';

describe('GoogleSignIn', () => {
  test('calls onSignIn after click (simulated delay)', async () => {
    vi.useFakeTimers();
    const onSignIn = vi.fn();
    render(<GoogleSignIn onSignIn={onSignIn} />);

    const btn = screen.getByRole('button');
    fireEvent.click(btn);

    // advance fake timers to simulate the 1500ms delay in the component
    vi.advanceTimersByTime(1600);

    expect(onSignIn).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
