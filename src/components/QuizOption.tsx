
import { cn } from "@/lib/utils";
import { Option } from "@/types/quiz";
import { Check, X } from "lucide-react";

interface QuizOptionProps {
  option: Option;
  selected: boolean;
  showResult?: boolean;
  onClick: () => void;
}

export const QuizOption = ({
  option,
  selected,
  showResult,
  onClick,
}: QuizOptionProps) => {
  return (
    <div
      onClick={onClick}
      className={cn("quiz-option", {
        selected: selected && !showResult,
        correct: showResult && option.isCorrect,
        incorrect: showResult && !option.isCorrect && selected,
      })}
    >
      <div className="flex-1">{option.text}</div>
      {showResult && option.isCorrect && (
        <Check className="w-5 h-5 text-green-500 ml-2" />
      )}
      {showResult && !option.isCorrect && selected && (
        <X className="w-5 h-5 text-red-500 ml-2" />
      )}
    </div>
  );
};
