
import { Question, Subject } from "@/types/quiz";
import { physicsQuestions } from "@/data/physics-questions";

const API_URL = "https://opentdb.com/api.php";

export const fetchQuestions = async (subject: Subject): Promise<Question[]> => {
  // If physics is selected, return our custom physics questions
  if (subject === "Physics") {
    return physicsQuestions;
  }

  const categoryMap: Record<Subject, number> = {
    "Computer Science": 18,
    "Mathematics": 19,
    "History": 23,
    "Geography": 22,
    "Literature": 10,
    "Music": 12,
    "Chemistry": 17,
    "Biology": 17,
    "English": 10,
    "Economics": 19,
    "Civic Education": 24,
    "Government": 24,
    "Agricultural Science": 17,
    "Fine Arts": 25,
    "Physical Education": 21,
    "Christian Religious Studies": 20,
    "Islamic Religious Studies": 20,
    "Business Studies": 19,
    "Home Economics": 19,
    "Technical Drawing": 19,
    "Health Science": 17,
    "Social Studies": 24,
    "French": 10,
    "Physics": 17 // Fallback category if API is needed
  };

  const response = await fetch(
    `${API_URL}?amount=10&category=${categoryMap[subject]}&type=multiple&difficulty=medium`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }

  const data = await response.json();
  
  return data.results.map((q: any, index: number): Question => ({
    id: `q-${index}`,
    type: "multiple-choice",
    question: q.question,
    options: [
      { id: `a-${index}`, text: q.correct_answer, isCorrect: true },
      ...q.incorrect_answers.map((answer: string, i: number) => ({
        id: `i-${index}-${i}`,
        text: answer,
        isCorrect: false
      }))
    ].sort(() => Math.random() - 0.5), // Shuffle options
    explanation: "Explanation will be shown after answering",
    subject
  }));
};
