import { useState, useEffect } from "react";
import { toast } from "sonner";
import { QuizOption } from "@/components/QuizOption";
import { DragDropQuestion } from "@/components/DragDropQuestion";
import { QuizProgress } from "@/components/QuizProgress";
import { Leaderboard } from "@/components/Leaderboard";
import { QuizState, LeaderboardEntry, Subject, Question } from "@/types/quiz";
import { Star, School, Timer, BookOpen, HelpCircle, X, LogOut } from "lucide-react";
import { fetchQuestions } from "@/services/questionService";

const TOTAL_QUIZ_TIME = 9 * 60; // 9 minutes in seconds
const WARNING_TIME = 4 * 60; // 4 minutes in seconds
const POINTS_PER_QUESTION = 5; // Each question is worth 5 marks

const SUBJECTS: Subject[] = [
  'Physics', 'Chemistry', 'Mathematics', 'Biology', 'English',
  'History', 'Geography', 'Computer Science', 'Economics',
  'Literature', 'Civic Education', 'Government', 'Agricultural Science',
  'Fine Arts', 'Music', 'Physical Education', 'Christian Religious Studies',
  'Islamic Religious Studies', 'Business Studies', 'Home Economics',
  'Technical Drawing', 'Health Science', 'Social Studies', 'French'
];

const Index = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswer: null,
    answers: {},
    score: 0,
    stars: 0,
    school: "",
    playerName: "",
    subject: "",
    isComplete: false,
    timeRemaining: TOTAL_QUIZ_TIME,
  });

  const [showQuiz, setShowQuiz] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const currentQuestion = questions[quizState.currentQuestionIndex];

  useEffect(() => {
    // Load leaderboard from localStorage
    const savedLeaderboard = localStorage.getItem("quizLeaderboard");
    if (savedLeaderboard) {
      setLeaderboard(JSON.parse(savedLeaderboard));
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (showQuiz && !quizState.isComplete) {
      timer = setInterval(() => {
        setQuizState(prev => {
          if (prev.timeRemaining <= 1) {
            // Time's up - end quiz
            clearInterval(timer);
            toast.error("Time's up!");
            return {
              ...prev,
              isComplete: true,
              timeRemaining: 0,
            };
          }
          
          // Show warning when 4 minutes remaining
          if (prev.timeRemaining === WARNING_TIME) {
            toast.warning("4 minutes remaining!");
          }
          
          return {
            ...prev,
            timeRemaining: prev.timeRemaining - 1,
          };
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [showQuiz, quizState.isComplete]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStartQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const playerName = formData.get("playerName") as string;
    const school = formData.get("school") as string;
    const subject = formData.get("subject") as Subject;

    if (!playerName || !school || !subject) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const fetchedQuestions = await fetchQuestions(subject);
      setQuestions(fetchedQuestions);
      setQuizState(prev => ({
        ...prev,
        playerName,
        school,
        subject,
        timeRemaining: TOTAL_QUIZ_TIME,
      }));
      setShowQuiz(true);
    } catch (error) {
      toast.error("Failed to fetch questions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMultipleChoiceAnswer = (answerId: string) => {
    if (quizState.selectedAnswer) return;

    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answerId,
    }));

    const isCorrect = currentQuestion?.options?.find(
      (opt) => opt.id === answerId
    )?.isCorrect;

    if (isCorrect) {
      const earnedStars = Math.floor((quizState.score + POINTS_PER_QUESTION) / 20);
      toast.success(`Correct answer! +${POINTS_PER_QUESTION} marks`);
      setQuizState((prev) => ({
        ...prev,
        score: prev.score + POINTS_PER_QUESTION,
        stars: earnedStars,
      }));
    } else {
      toast.error("Incorrect answer. Try again!");
    }

    setTimeout(() => {
      if (quizState.currentQuestionIndex < questions.length - 1) {
        setQuizState((prev) => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          selectedAnswer: null,
        }));
      } else {
        setQuizState((prev) => ({
          ...prev,
          isComplete: true,
        }));
      }
    }, 1500);
  };

  const handleDragDropAnswer = (answer: string[]) => {
    const correctOrder = currentQuestion?.dragDropItems?.sort(
      (a, b) => a.correctPosition - b.correctPosition
    ).map((item) => item.id);

    const isCorrect =
      JSON.stringify(answer) === JSON.stringify(correctOrder);

    if (isCorrect) {
      const earnedStars = Math.floor((quizState.score + POINTS_PER_QUESTION) / 20);
      toast.success(`Correct order! +${POINTS_PER_QUESTION} marks`);
      setQuizState((prev) => ({
        ...prev,
        score: prev.score + POINTS_PER_QUESTION,
        stars: earnedStars,
      }));

      setTimeout(() => {
        if (quizState.currentQuestionIndex < questions.length - 1) {
          setQuizState((prev) => ({
            ...prev,
            currentQuestionIndex: prev.currentQuestionIndex + 1,
          }));
        } else {
          setQuizState((prev) => ({
            ...prev,
            isComplete: true,
          }));
        }
      }, 1500);
    }
  };

  const saveToLeaderboard = () => {
    const newEntry: LeaderboardEntry = {
      id: Date.now().toString(),
      playerName: quizState.playerName,
      school: quizState.school,
      subject: quizState.subject as Subject,
      score: quizState.score,
      stars: quizState.stars,
      timestamp: new Date(),
    };

    const updatedLeaderboard = [...leaderboard, newEntry];
    setLeaderboard(updatedLeaderboard);
    localStorage.setItem("quizLeaderboard", JSON.stringify(updatedLeaderboard));
    setShowQuiz(false);
    
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answers: {},
      score: 0,
      stars: 0,
      school: "",
      playerName: "",
      subject: "",
      isComplete: false,
      timeRemaining: TOTAL_QUIZ_TIME,
    });
    setQuestions([]);
  };

  const handleLogout = () => {
    setShowQuiz(false);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswer: null,
      answers: {},
      score: 0,
      stars: 0,
      school: "",
      playerName: "",
      subject: "",
      isComplete: false,
      timeRemaining: TOTAL_QUIZ_TIME,
    });
    setQuestions([]);
    toast.success("Successfully logged out!");
  };

  const InstructionsPanel = () => (
    <div 
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        showInstructions ? 'translate-x-0' : 'translate-x-full'
      } z-50`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Instructions</h3>
          <button
            onClick={() => setShowInstructions(false)}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4 text-sm">
          <p>1. Select your subject before starting the quiz.</p>
          <p>2. You have 9 minutes to complete all questions.</p>
          <p>3. A warning will appear when 4 minutes are remaining.</p>
          <p>4. Each correct answer contributes to your total score.</p>
          <p>5. You can earn stars based on your performance.</p>
          <p>6. Your score will be added to the leaderboard upon completion.</p>
        </div>
      </div>
    </div>
  );

  if (!showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <img
              src="/signup-logo.PNG"
              alt="Description"
              className="w-48 h-24"
            />

            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Welcome to QuizJungle
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your knowledge across various subjects with our interactive quiz platform.
              Challenge yourself and track your progress!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="quiz-card p-8 backdrop-blur-lg bg-white/90">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Journey</h2>
              <form onSubmit={handleStartQuiz} className="space-y-6">
                <div>
                  <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="playerName"
                    name="playerName"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                    School
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your school"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Choose Your Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECTS.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Loading Questions...</span>
                    </>
                  ) : (
                    "Start Quiz"
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="quiz-card p-6 bg-white/90 backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Timer className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-600">9-minute time limit for added challenge</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-600">Earn stars based on your performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-600">Wide range of subjects to choose from</span>
                  </li>
                </ul>
              </div>

              <div className="quiz-card p-6 bg-white/90 backdrop-blur-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Leaderboard</h3>
                <Leaderboard entries={leaderboard} />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowInstructions(true)}
          className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Show Instructions"
        >
          <HelpCircle className="w-6 h-6" />
        </button>

        <InstructionsPanel />
      </div>
    );
  }

  if (quizState.isComplete) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 p-4 gap-8">
        <div className="quiz-card max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center mb-8">Quiz Complete!</h1>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-2 text-lg">
              <School className="w-5 h-5" />
              <span>{quizState.school}</span>
            </div>
            <p className="text-xl text-center">
              {quizState.playerName}, your score: {quizState.score.toFixed(1)}%
            </p>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-xl font-bold">{quizState.stars} stars earned!</span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={saveToLeaderboard}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Save Score & Play Again
            </button>
          </div>
        </div>

        <Leaderboard entries={leaderboard} />
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 p-4">
        <div className="quiz-card max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center">Question not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-50 p-4 gap-8">
      <div className="w-full max-w-2xl flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Quiz Dashboard</h2>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      <div className="quiz-card max-w-2xl w-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <QuizProgress
              current={quizState.currentQuestionIndex}
              total={questions.length}
            />
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">{quizState.subject}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{quizState.stars}</span>
            </div>
            <div className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full">
              {quizState.score.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">{currentQuestion.question}</h2>
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <Timer className="w-4 h-4" />
            <span className={`font-semibold ${quizState.timeRemaining <= WARNING_TIME ? 'text-red-500' : ''}`}>
              {formatTime(quizState.timeRemaining)}
            </span>
          </div>
        </div>
        
        {currentQuestion.type === "multiple-choice" && (
          <div className="space-y-4">
            {currentQuestion.options?.map((option) => (
              <QuizOption
                key={option.id}
                option={option}
                selected={quizState.selectedAnswer === option.id}
                showResult={!!quizState.selectedAnswer}
                onClick={() => handleMultipleChoiceAnswer(option.id)}
              />
            ))}
          </div>
        )}

        {currentQuestion.type === "drag-drop" && (
          <DragDropQuestion
            items={currentQuestion.dragDropItems || []}
            onAnswer={handleDragDropAnswer}
          />
        )}

        {currentQuestion.explanation && quizState.selectedAnswer && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">{currentQuestion.explanation}</p>
          </div>
        )}
      </div>

      <Leaderboard entries={leaderboard} />

      <button
        onClick={() => setShowInstructions(true)}
        className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Show Instructions"
      >
        <HelpCircle className="w-6 h-6" />
      </button>

      <InstructionsPanel />
    </div>
  );
};

export default Index;
