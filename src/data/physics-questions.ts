
import { Question, Subject } from "@/types/quiz";

export const physicsQuestions: Question[] = [
  {
    id: "phys-1",
    type: "multiple-choice",
    question: "What is the SI unit of force?",
    options: [
      { id: "p1-a", text: "Newton (N)", isCorrect: true },
      { id: "p1-b", text: "Joule (J)", isCorrect: false },
      { id: "p1-c", text: "Pascal (Pa)", isCorrect: false },
      { id: "p1-d", text: "Watt (W)", isCorrect: false }
    ],
    explanation: "The Newton (N) is the SI unit of force, named after Isaac Newton.",
    subject: "Physics"
  },
  {
    id: "phys-2",
    type: "multiple-choice",
    question: "What is the speed of light in vacuum?",
    options: [
      { id: "p2-a", text: "299,792,458 meters per second", isCorrect: true },
      { id: "p2-b", text: "300,000,000 meters per second", isCorrect: false },
      { id: "p2-c", text: "299,000,000 meters per second", isCorrect: false },
      { id: "p2-d", text: "310,000,000 meters per second", isCorrect: false }
    ],
    explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second.",
    subject: "Physics"
  },
  {
    id: "phys-3",
    type: "multiple-choice",
    question: "Who proposed the three laws of motion?",
    options: [
      { id: "p3-a", text: "Isaac Newton", isCorrect: true },
      { id: "p3-b", text: "Albert Einstein", isCorrect: false },
      { id: "p3-c", text: "Galileo Galilei", isCorrect: false },
      { id: "p3-d", text: "Johannes Kepler", isCorrect: false }
    ],
    explanation: "Isaac Newton published his three laws of motion in his work Principia Mathematica.",
    subject: "Physics"
  },
  {
    id: "phys-4",
    type: "multiple-choice",
    question: "What is the acceleration due to gravity on Earth?",
    options: [
      { id: "p4-a", text: "9.8 m/s²", isCorrect: true },
      { id: "p4-b", text: "9.0 m/s²", isCorrect: false },
      { id: "p4-c", text: "10.0 m/s²", isCorrect: false },
      { id: "p4-d", text: "8.8 m/s²", isCorrect: false }
    ],
    explanation: "The acceleration due to gravity on Earth is approximately 9.8 m/s².",
    subject: "Physics"
  },
  {
    id: "phys-5",
    type: "multiple-choice",
    question: "What is the formula for kinetic energy?",
    options: [
      { id: "p5-a", text: "KE = 1/2 mv²", isCorrect: true },
      { id: "p5-b", text: "KE = mv", isCorrect: false },
      { id: "p5-c", text: "KE = mgh", isCorrect: false },
      { id: "p5-d", text: "KE = mv²", isCorrect: false }
    ],
    explanation: "The formula for kinetic energy is KE = 1/2 mv², where m is mass and v is velocity.",
    subject: "Physics"
  },
  {
    id: "phys-6",
    type: "multiple-choice",
    question: "Which fundamental force is responsible for holding atomic nuclei together?",
    options: [
      { id: "p6-a", text: "Strong nuclear force", isCorrect: true },
      { id: "p6-b", text: "Electromagnetic force", isCorrect: false },
      { id: "p6-c", text: "Weak nuclear force", isCorrect: false },
      { id: "p6-d", text: "Gravitational force", isCorrect: false }
    ],
    explanation: "The strong nuclear force is responsible for holding protons and neutrons together in atomic nuclei.",
    subject: "Physics"
  },
  {
    id: "phys-7",
    type: "multiple-choice",
    question: "What is the unit of electric current?",
    options: [
      { id: "p7-a", text: "Ampere (A)", isCorrect: true },
      { id: "p7-b", text: "Volt (V)", isCorrect: false },
      { id: "p7-c", text: "Ohm (Ω)", isCorrect: false },
      { id: "p7-d", text: "Watt (W)", isCorrect: false }
    ],
    explanation: "The Ampere (A) is the SI unit of electric current.",
    subject: "Physics"
  },
  {
    id: "phys-8",
    type: "multiple-choice",
    question: "What is Ohm's Law?",
    options: [
      { id: "p8-a", text: "V = IR", isCorrect: true },
      { id: "p8-b", text: "V = I/R", isCorrect: false },
      { id: "p8-c", text: "V = R/I", isCorrect: false },
      { id: "p8-d", text: "V = I²R", isCorrect: false }
    ],
    explanation: "Ohm's Law states that voltage (V) equals current (I) multiplied by resistance (R).",
    subject: "Physics"
  },
  {
    id: "phys-9",
    type: "multiple-choice",
    question: "What type of lens is used to correct myopia (nearsightedness)?",
    options: [
      { id: "p9-a", text: "Concave lens", isCorrect: true },
      { id: "p9-b", text: "Convex lens", isCorrect: false },
      { id: "p9-c", text: "Bifocal lens", isCorrect: false },
      { id: "p9-d", text: "Cylindrical lens", isCorrect: false }
    ],
    explanation: "Concave lenses are used to correct myopia by diverging light rays before they enter the eye.",
    subject: "Physics"
  },
  {
    id: "phys-10",
    type: "multiple-choice",
    question: "What is the law of conservation of energy?",
    options: [
      { id: "p10-a", text: "Energy cannot be created or destroyed, only transferred or converted.", isCorrect: true },
      { id: "p10-b", text: "Energy can be created but not destroyed.", isCorrect: false },
      { id: "p10-c", text: "Energy can be destroyed but not created.", isCorrect: false },
      { id: "p10-d", text: "Energy can be both created and destroyed.", isCorrect: false }
    ],
    explanation: "The law of conservation of energy states that energy cannot be created or destroyed, only transformed from one form to another.",
    subject: "Physics"
  },
  {
    id: "phys-11",
    type: "multiple-choice",
    question: "What is the first law of thermodynamics?",
    options: [
      { id: "p11-a", text: "Energy cannot be created or destroyed, only transferred or changed in form.", isCorrect: true },
      { id: "p11-b", text: "Heat flows from hot to cold.", isCorrect: false },
      { id: "p11-c", text: "Entropy always increases.", isCorrect: false },
      { id: "p11-d", text: "Work equals force times distance.", isCorrect: false }
    ],
    explanation: "The first law of thermodynamics is essentially the law of conservation of energy applied to thermodynamic systems.",
    subject: "Physics"
  },
  {
    id: "phys-12",
    type: "multiple-choice",
    question: "Which scientist developed the theory of relativity?",
    options: [
      { id: "p12-a", text: "Albert Einstein", isCorrect: true },
      { id: "p12-b", text: "Isaac Newton", isCorrect: false },
      { id: "p12-c", text: "Niels Bohr", isCorrect: false },
      { id: "p12-d", text: "Max Planck", isCorrect: false }
    ],
    explanation: "Albert Einstein developed both the special (1905) and general (1915) theories of relativity.",
    subject: "Physics"
  },
  {
    id: "phys-13",
    type: "multiple-choice",
    question: "What is the SI unit of power?",
    options: [
      { id: "p13-a", text: "Watt (W)", isCorrect: true },
      { id: "p13-b", text: "Joule (J)", isCorrect: false },
      { id: "p13-c", text: "Newton (N)", isCorrect: false },
      { id: "p13-d", text: "Pascal (Pa)", isCorrect: false }
    ],
    explanation: "The Watt (W) is the SI unit of power, equal to one joule per second.",
    subject: "Physics"
  },
  {
    id: "phys-14",
    type: "multiple-choice",
    question: "What is the name of the device used to measure electric current?",
    options: [
      { id: "p14-a", text: "Ammeter", isCorrect: true },
      { id: "p14-b", text: "Voltmeter", isCorrect: false },
      { id: "p14-c", text: "Ohmmeter", isCorrect: false },
      { id: "p14-d", text: "Wattmeter", isCorrect: false }
    ],
    explanation: "An ammeter is used to measure electric current in amperes.",
    subject: "Physics"
  },
  {
    id: "phys-15",
    type: "multiple-choice",
    question: "Which type of mirror is used in car headlights?",
    options: [
      { id: "p15-a", text: "Concave mirror", isCorrect: true },
      { id: "p15-b", text: "Convex mirror", isCorrect: false },
      { id: "p15-c", text: "Plane mirror", isCorrect: false },
      { id: "p15-d", text: "Parabolic mirror", isCorrect: false }
    ],
    explanation: "Concave mirrors are used in car headlights because they can focus light into a beam.",
    subject: "Physics"
  },
  {
    id: "phys-16",
    type: "drag-drop",
    question: "Arrange these units of electrical measurement in order of their relationship (V = IR):",
    dragDropItems: [
      { id: "volt", text: "Voltage (V)", correctPosition: 0 },
      { id: "equals", text: "Equals (=)", correctPosition: 1 },
      { id: "current", text: "Current (I)", correctPosition: 2 },
      { id: "times", text: "Multiplied by (×)", correctPosition: 3 },
      { id: "resistance", text: "Resistance (R)", correctPosition: 4 }
    ],
    explanation: "Ohm's Law states that Voltage equals Current multiplied by Resistance (V = IR).",
    subject: "Physics"
  },
  {
    id: "phys-17",
    type: "drag-drop",
    question: "Arrange these types of electromagnetic waves in order of increasing frequency:",
    dragDropItems: [
      { id: "radio", text: "Radio waves", correctPosition: 0 },
      { id: "micro", text: "Microwaves", correctPosition: 1 },
      { id: "infrared", text: "Infrared", correctPosition: 2 },
      { id: "visible", text: "Visible light", correctPosition: 3 },
      { id: "uv", text: "Ultraviolet", correctPosition: 4 },
      { id: "xray", text: "X-rays", correctPosition: 5 },
      { id: "gamma", text: "Gamma rays", correctPosition: 6 }
    ],
    explanation: "Electromagnetic waves are arranged in the electromagnetic spectrum from lowest to highest frequency.",
    subject: "Physics"
  },
  {
    id: "phys-18",
    type: "drag-drop",
    question: "Arrange Newton's Laws of Motion in order:",
    dragDropItems: [
      { id: "first", text: "An object at rest stays at rest unless acted upon by a force", correctPosition: 0 },
      { id: "second", text: "Force equals mass times acceleration (F = ma)", correctPosition: 1 },
      { id: "third", text: "For every action, there is an equal and opposite reaction", correctPosition: 2 }
    ],
    explanation: "Newton's three laws of motion form the foundation of classical mechanics.",
    subject: "Physics"
  },
  {
    id: "phys-19",
    type: "drag-drop",
    question: "Arrange these units of power and energy in ascending order of magnitude:",
    dragDropItems: [
      { id: "watt", text: "Watt (W)", correctPosition: 0 },
      { id: "kilowatt", text: "Kilowatt (kW)", correctPosition: 1 },
      { id: "megawatt", text: "Megawatt (MW)", correctPosition: 2 },
      { id: "gigawatt", text: "Gigawatt (GW)", correctPosition: 3 }
    ],
    explanation: "Power units increase by factors of 1000: 1 kW = 1000 W, 1 MW = 1000 kW, 1 GW = 1000 MW.",
    subject: "Physics"
  },
  {
    id: "phys-20",
    type: "drag-drop",
    question: "Arrange these steps of the scientific method in order:",
    dragDropItems: [
      { id: "observe", text: "Make an observation", correctPosition: 0 },
      { id: "question", text: "Ask a question", correctPosition: 1 },
      { id: "hypothesis", text: "Form a hypothesis", correctPosition: 2 },
      { id: "experiment", text: "Conduct an experiment", correctPosition: 3 },
      { id: "analyze", text: "Analyze the data", correctPosition: 4 },
      { id: "conclude", text: "Draw conclusions", correctPosition: 5 }
    ],
    explanation: "The scientific method is a systematic way of learning about the world through observation and experimentation.",
    subject: "Physics"
  }
];
