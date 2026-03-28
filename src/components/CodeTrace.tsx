export interface CodeTraceStep {
  file: string;
  location: string;
  description: string;
}

export interface CodeTraceProps {
  title: string;
  steps: CodeTraceStep[];
  startAction: string;
  endResult: string;
}

export function CodeTrace({ title, steps, startAction, endResult }: CodeTraceProps) {
  return (
    <div className="code-trace">
      <div className="trace-title">{title}</div>
      <div className="trace-start">
        <span>🟢</span> {startAction}
      </div>
      <div className="trace-steps">
        {steps.map((step, i) => (
          <div className="trace-step" data-step={i + 1} key={i}>
            <span className="step-file">{step.file}</span>{' '}
            <span className="step-location">{step.location}</span>
            <div className="step-description">{step.description}</div>
          </div>
        ))}
      </div>
      <div className="trace-end">
        <span>🔵</span> {endResult}
      </div>
    </div>
  );
}
