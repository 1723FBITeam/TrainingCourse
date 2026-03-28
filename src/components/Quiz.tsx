import { useState } from 'react';

interface QuizProps {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export function Quiz({ question, options, correctIndex, explanation }: QuizProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
  };

  return (
    <div className="quiz-container">
      <p className="quiz-question">{question}</p>
      {options.map((option, index) => {
        let className = 'quiz-option';
        if (selectedIndex !== null) {
          if (index === correctIndex) className += ' correct';
          else if (index === selectedIndex) className += ' incorrect';
        }
        return (
          <button
            key={index}
            className={className}
            onClick={() => handleSelect(index)}
            disabled={selectedIndex !== null}
          >
            {option}
          </button>
        );
      })}
      {selectedIndex !== null && (
        <div className="quiz-explanation">{explanation}</div>
      )}
    </div>
  );
}
