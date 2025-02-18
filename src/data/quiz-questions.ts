import { Question, Subject } from "@/types/quiz";

export const quizQuestions: Question[] = [
  {
    id: "q1",
    type: "multiple-choice",
    question: "What is the capital of France?",
    options: [
      { id: "1", text: "London", isCorrect: false },
      { id: "2", text: "Berlin", isCorrect: false },
      { id: "3", text: "Paris", isCorrect: true },
      { id: "4", text: "Madrid", isCorrect: false },
    ],
    explanation: "Paris is the capital and largest city of France.",
    subject: "Geography"
  },
  {
    id: "q2",
    type: "drag-drop",
    question: "Arrange these planets in order from closest to farthest from the Sun:",
    dragDropItems: [
      { id: "mercury", text: "Mercury", correctPosition: 0 },
      { id: "venus", text: "Venus", correctPosition: 1 },
      { id: "earth", text: "Earth", correctPosition: 2 },
      { id: "mars", text: "Mars", correctPosition: 3 },
    ],
    explanation: "The correct order of planets from the Sun is: Mercury, Venus, Earth, Mars.",
    subject: "Physics"
  },
  {
    id: "q3",
    type: "multiple-choice",
    question: "Which programming language is known as the 'language of the web'?",
    options: [
      { id: "1", text: "Python", isCorrect: false },
      { id: "2", text: "JavaScript", isCorrect: true },
      { id: "3", text: "Java", isCorrect: false },
      { id: "4", text: "C++", isCorrect: false },
    ],
    explanation: "JavaScript is widely known as the 'language of the web' as it's the primary language used for web development.",
    subject: "Computer Science"
  },
  {
    id: "q4",
    type: "multiple-choice",
    question: "What is the chemical symbol for Gold?",
    options: [
      { id: "1", text: "Ag", isCorrect: false },
      { id: "2", text: "Fe", isCorrect: false },
      { id: "3", text: "Au", isCorrect: true },
      { id: "4", text: "Cu", isCorrect: false },
    ],
    explanation: "Au (from Latin: aurum) is the chemical symbol for Gold.",
    subject: "Chemistry"
  },
  {
    id: "q5",
    type: "multiple-choice",
    question: "Which is the largest ocean on Earth?",
    options: [
      { id: "1", text: "Atlantic Ocean", isCorrect: false },
      { id: "2", text: "Pacific Ocean", isCorrect: true },
      { id: "3", text: "Indian Ocean", isCorrect: false },
      { id: "4", text: "Arctic Ocean", isCorrect: false },
    ],
    explanation: "The Pacific Ocean is the largest and deepest ocean on Earth.",
    subject: "Geography"
  },
  {
    id: "q6",
    type: "multiple-choice",
    question: "Who painted the Mona Lisa?",
    options: [
      { id: "1", text: "Vincent van Gogh", isCorrect: false },
      { id: "2", text: "Pablo Picasso", isCorrect: false },
      { id: "3", text: "Leonardo da Vinci", isCorrect: true },
      { id: "4", text: "Michelangelo", isCorrect: false },
    ],
    explanation: "The Mona Lisa was painted by Leonardo da Vinci in the early 16th century.",
    subject: "Fine Arts"
  },
  {
    id: "q7",
    type: "drag-drop",
    question: "Arrange these historical events in chronological order:",
    dragDropItems: [
      { id: "declaration", text: "Declaration of Independence", correctPosition: 0 },
      { id: "civil", text: "U.S. Civil War", correctPosition: 1 },
      { id: "ww1", text: "World War I", correctPosition: 2 },
      { id: "ww2", text: "World War II", correctPosition: 3 },
    ],
    explanation: "These events occurred in order: Declaration of Independence (1776), Civil War (1861-1865), WWI (1914-1918), WWII (1939-1945).",
    subject: "History"
  },
  {
    id: "q8",
    type: "multiple-choice",
    question: "What is the smallest prime number?",
    options: [
      { id: "1", text: "0", isCorrect: false },
      { id: "2", text: "1", isCorrect: false },
      { id: "3", text: "2", isCorrect: true },
      { id: "4", text: "3", isCorrect: false },
    ],
    explanation: "2 is the smallest and only even prime number.",
    subject: "Mathematics"
  },
  {
    id: "q9",
    type: "multiple-choice",
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: "1", text: "Venus", isCorrect: false },
      { id: "2", text: "Mars", isCorrect: true },
      { id: "3", text: "Jupiter", isCorrect: false },
      { id: "4", text: "Saturn", isCorrect: false },
    ],
    explanation: "Mars is called the Red Planet due to its reddish appearance.",
    subject: "Geography"
  },
  {
    id: "q10",
    type: "multiple-choice",
    question: "What is the capital of Japan?",
    options: [
      { id: "1", text: "Seoul", isCorrect: false },
      { id: "2", text: "Beijing", isCorrect: false },
      { id: "3", text: "Tokyo", isCorrect: true },
      { id: "4", text: "Bangkok", isCorrect: false },
    ],
    explanation: "Tokyo is the capital and largest city of Japan.",
    subject: "Geography"
  },
  {
    id: "q11",
    type: "drag-drop",
    question: "Arrange these numbers from smallest to largest:",
    dragDropItems: [
      { id: "pi", text: "π (Pi)", correctPosition: 0 },
      { id: "e", text: "e (Euler's number)", correctPosition: 1 },
      { id: "phi", text: "φ (Golden Ratio)", correctPosition: 2 },
      { id: "sqrt5", text: "√5", correctPosition: 3 },
    ],
    explanation: "π ≈ 3.14159, e ≈ 2.71828, φ ≈ 1.61803, √5 ≈ 2.23607",
    subject: "Mathematics"
  },
  {
    id: "q12",
    type: "multiple-choice",
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { id: "1", text: "Osmium", isCorrect: false },
      { id: "2", text: "Oxygen", isCorrect: true },
      { id: "3", text: "Oganesson", isCorrect: false },
      { id: "4", text: "Osmium", isCorrect: false },
    ],
    explanation: "O is the chemical symbol for Oxygen.",
    subject: "Chemistry"
  },
  {
    id: "q13",
    type: "multiple-choice",
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      { id: "1", text: "Charles Dickens", isCorrect: false },
      { id: "2", text: "Jane Austen", isCorrect: false },
      { id: "3", text: "William Shakespeare", isCorrect: true },
      { id: "4", text: "Mark Twain", isCorrect: false },
    ],
    explanation: "Romeo and Juliet was written by William Shakespeare in the late 16th century.",
    subject: "Literature"
  },
  {
    id: "q14",
    type: "multiple-choice",
    question: "What is the speed of light in vacuum?",
    options: [
      { id: "1", text: "299,792 km/s", isCorrect: true },
      { id: "2", text: "150,000 km/s", isCorrect: false },
      { id: "3", text: "200,000 km/s", isCorrect: false },
      { id: "4", text: "350,000 km/s", isCorrect: false },
    ],
    explanation: "The speed of light in vacuum is approximately 299,792 kilometers per second.",
    subject: "Physics"
  },
  {
    id: "q15",
    type: "drag-drop",
    question: "Arrange these animals by their average lifespan (shortest to longest):",
    dragDropItems: [
      { id: "mouse", text: "Mouse", correctPosition: 0 },
      { id: "cat", text: "Cat", correctPosition: 1 },
      { id: "elephant", text: "Elephant", correctPosition: 2 },
      { id: "tortoise", text: "Giant Tortoise", correctPosition: 3 },
    ],
    explanation: "Average lifespans: Mouse (1-3 years), Cat (12-18 years), Elephant (60-70 years), Giant Tortoise (100+ years)",
    subject: "Biology"
  },
  {
    id: "q16",
    type: "multiple-choice",
    question: "Which continent is the largest by land area?",
    options: [
      { id: "1", text: "North America", isCorrect: false },
      { id: "2", text: "Africa", isCorrect: false },
      { id: "3", text: "Asia", isCorrect: true },
      { id: "4", text: "Antarctica", isCorrect: false },
    ],
    explanation: "Asia is the largest continent by land area.",
    subject: "Geography"
  },
  {
    id: "q17",
    type: "multiple-choice",
    question: "What is the hardest natural substance on Earth?",
    options: [
      { id: "1", text: "Gold", isCorrect: false },
      { id: "2", text: "Iron", isCorrect: false },
      { id: "3", text: "Diamond", isCorrect: true },
      { id: "4", text: "Platinum", isCorrect: false },
    ],
    explanation: "Diamond is the hardest known natural substance on Earth.",
    subject: "Physics"
  },
  {
    id: "q18",
    type: "multiple-choice",
    question: "Which famous scientist developed the theory of relativity?",
    options: [
      { id: "1", text: "Isaac Newton", isCorrect: false },
      { id: "2", text: "Albert Einstein", isCorrect: true },
      { id: "3", text: "Stephen Hawking", isCorrect: false },
      { id: "4", text: "Niels Bohr", isCorrect: false },
    ],
    explanation: "Albert Einstein developed both the special and general theories of relativity.",
    subject: "Physics"
  },
  {
    id: "q19",
    type: "drag-drop",
    question: "Arrange these units of length from shortest to longest:",
    dragDropItems: [
      { id: "mm", text: "Millimeter", correctPosition: 0 },
      { id: "cm", text: "Centimeter", correctPosition: 1 },
      { id: "m", text: "Meter", correctPosition: 2 },
      { id: "km", text: "Kilometer", correctPosition: 3 },
    ],
    explanation: "1 kilometer = 1000 meters, 1 meter = 100 centimeters, 1 centimeter = 10 millimeters",
    subject: "Physics"
  },
  {
    id: "q20",
    type: "multiple-choice",
    question: "What percentage of Earth's surface is covered by water?",
    options: [
      { id: "1", text: "50%", isCorrect: false },
      { id: "2", text: "61%", isCorrect: false },
      { id: "3", text: "71%", isCorrect: true },
      { id: "4", text: "81%", isCorrect: false },
    ],
    explanation: "Approximately 71% of Earth's surface is covered by water.",
    subject: "Geography"
  },
];

// Function to shuffle the questions array
export const getShuffledQuestions = () => {
  const shuffled = [...quizQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
