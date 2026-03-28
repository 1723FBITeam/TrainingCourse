import { AnswerReveal } from './AnswerReveal';

interface CodeReadingProps {
  targetFile: string;
  answers?: {
    whatDoes?: string;
    belongsTo?: string;
    methods?: string;
    dependsOn?: string;
    whenRuns?: string;
  };
}

const questions = [
  { key: 'whatDoes', text: 'What does this file do?' },
  { key: 'belongsTo', text: 'What subsystem or command does it belong to?' },
  { key: 'methods', text: 'What methods does it expose?' },
  { key: 'dependsOn', text: 'What does it depend on?' },
  { key: 'whenRuns', text: 'When does this code run?' },
] as const;

export function CodeReading({ targetFile, answers }: CodeReadingProps) {
  return (
    <div className="code-reading">
      <div className="code-reading-title">🔍 Code Reading: <code>{targetFile}</code></div>
      {questions.map((q) => {
        const answer = answers?.[q.key];
        return (
          <div key={q.key} className="code-reading-question">
            <strong>{q.text}</strong>
            {answer ? (
              <AnswerReveal label="Show Answer">{answer}</AnswerReveal>
            ) : (
              <pre style={{ margin: '0.5rem 0 0', fontSize: '0.9rem', whiteSpace: 'pre-wrap' }}>
                {q.text} _______________
              </pre>
            )}
          </div>
        );
      })}
    </div>
  );
}
