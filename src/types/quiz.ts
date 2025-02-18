export type QuestionType = 'multiple-choice' | 'drag-drop';

export type Subject = 
  | 'Physics'
  | 'Chemistry'
  | 'Mathematics'
  | 'Biology'
  | 'English'
  | 'History'
  | 'Geography'
  | 'Computer Science'
  | 'Economics'
  | 'Literature'
  | 'Civic Education'
  | 'Government'
  | 'Agricultural Science'
  | 'Fine Arts'
  | 'Music'
  | 'Physical Education'
  | 'Christian Religious Studies'
  | 'Islamic Religious Studies'
  | 'Business Studies'
  | 'Home Economics'
  | 'Technical Drawing'
  | 'Health Science'
  | 'Social Studies'
  | 'French';

export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface DragDropItem {
  id: string;
  text: string;
  correctPosition: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: Option[];
  dragDropItems?: DragDropItem[];
  explanation?: string;
  subject: Subject;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswer: string | null;
  answers: Record<string, string[]>;
  score: number;
  stars: number;
  school: string;
  playerName: string;
  subject: Subject | '';
  isComplete: boolean;
  timeRemaining: number;
}

export interface LeaderboardEntry {
  id: string;
  playerName: string;
  school: string;
  subject: Subject;
  score: number;
  stars: number;
  timestamp: Date;
}
