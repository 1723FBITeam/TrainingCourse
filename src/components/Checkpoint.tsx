import type { ReactNode } from 'react';
import { AnswerReveal } from './AnswerReveal';

interface CheckpointProps {
  title: string;
  prompt: string;
  children: ReactNode;
}

export function Checkpoint({ title, prompt, children }: CheckpointProps) {
  return (
    <div className="checkpoint-card">
      <div className="checkpoint-header">
        <span>✅</span>
        {title}
      </div>
      <div className="checkpoint-prompt">{prompt}</div>
      <AnswerReveal label="Check Answer">
        {children}
      </AnswerReveal>
    </div>
  );
}
