
import { useState, useRef } from "react";
import { DragDropItem } from "@/types/quiz";
import { cn } from "@/lib/utils";

interface DragDropQuestionProps {
  items: DragDropItem[];
  onAnswer: (answer: string[]) => void;
}

export const DragDropQuestion = ({ items, onAnswer }: DragDropQuestionProps) => {
  const [draggedItem, setDraggedItem] = useState<DragDropItem | null>(null);
  const [orderedItems, setOrderedItems] = useState([...items]);
  const draggedNodeRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: React.DragEvent, item: DragDropItem) => {
    setDraggedItem(item);
    draggedNodeRef.current = e.target as HTMLDivElement;
    if (draggedNodeRef.current) {
      draggedNodeRef.current.classList.add("dragging");
    }
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    if (draggedNodeRef.current) {
      draggedNodeRef.current.classList.remove("dragging");
    }
    draggedNodeRef.current = null;
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (!draggedItem) return;

    const newItems = [...orderedItems];
    const draggedIndex = orderedItems.findIndex(
      (item) => item.id === draggedItem.id
    );

    newItems.splice(draggedIndex, 1);
    newItems.splice(index, 0, draggedItem);

    setOrderedItems(newItems);
    onAnswer(newItems.map((item) => item.id));
  };

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500 mb-4">
        Drag and drop the items to arrange them in the correct order
      </div>
      {orderedItems.map((item, index) => (
        <div
          key={item.id}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(e, index)}
          className={cn(
            "draggable-item cursor-move select-none p-4 rounded-lg border-2 bg-white shadow-sm transition-all duration-200",
            {
              "border-primary bg-primary/5": draggedItem?.id === item.id,
              "border-gray-200 hover:border-primary/50 hover:bg-primary/5": draggedItem?.id !== item.id,
            }
          )}
        >
          <div className="flex items-center gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
              {index + 1}
            </span>
            <span className="text-gray-900">{item.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
