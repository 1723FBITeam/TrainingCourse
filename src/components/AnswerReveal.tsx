import { useState, type ReactNode } from 'react';

interface AnswerRevealProps {
  label?: string;
  children: ReactNode;
}

export function AnswerReveal({ label = 'Show Answer', children }: AnswerRevealProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="answer-reveal">
      <button className="reveal-toggle" onClick={() => setOpen(!open)}>
        <span className={`chevron${open ? ' open' : ''}`}>▶</span>
        {label}
      </button>
      <div className={`reveal-content${open ? ' visible' : ''}`}>
        {children}
      </div>
    </div>
  );
}
