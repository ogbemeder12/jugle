
interface QuizProgressProps {
  current: number;
  total: number;
}

export const QuizProgress = ({ current, total }: QuizProgressProps) => {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
            Question {current + 1} of {total}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round(percentage)}% Complete
          </span>
        </div>
        <span className="text-sm font-medium text-gray-500">
          {total - (current + 1)} Questions Left
        </span>
      </div>
      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
