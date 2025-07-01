'use client'

import { useState } from 'react'

interface TPACKQuizProps {
  onComplete: () => void
}

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  category: 'basic' | 'application' | 'analysis'
}

export default function TPACKQuiz({ onComplete }: TPACKQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)

  const questions: Question[] = [
    {
      id: 1,
      question: "Wat betekent de afkorting TPACK?",
      options: [
        "Technology, Pedagogy, and Content Knowledge",
        "Teaching, Planning, and Curriculum Knowledge", 
        "Technology, Practice, and Creative Knowledge",
        "Technical, Pedagogical, and Cognitive Knowledge"
      ],
      correct: 0,
      explanation: "TPACK staat voor Technology, Pedagogy, and Content Knowledge. Dit model beschrijft hoe deze drie kennisdomeinen samenkomen voor effectief onderwijs met technologie.",
      category: 'basic'
    },
    {
      id: 2,
      question: "Een leraar gebruikt een rekenmachine tijdens de wiskundeles. Welk TPACK-onderdeel wordt hier NIET gedemonstreerd?",
      options: [
        "Technology Knowledge (TK)",
        "Content Knowledge (CK)", 
        "Pedagogical Knowledge (PK)",
        "Alle onderdelen worden gedemonstreerd"
      ],
      correct: 2,
      explanation: "Het gebruik van alleen een rekenmachine toont Technology Knowledge (kennis van de tool) en Content Knowledge (wiskunde), maar niet noodzakelijk Pedagogical Knowledge (hoe kinderen leren). Voor TPACK moet de technologie pedagogisch verantwoord worden ingezet.",
      category: 'analysis'
    },
    {
      id: 3,
      question: "Welk voorbeeld toont het beste TPACK (alle drie de componenten geïntegreerd)?",
      options: [
        "Leerlingen kijken naar een educatieve video over dieren",
        "Leerlingen maken een digitaal verhaal over hun vakantie met tekst, beeld en geluid",
        "Leerlingen spelen een educatief spel op de tablet",
        "Leerlingen zoeken informatie op internet voor een werkstuk"
      ],
      correct: 1,
      explanation: "Het maken van een digitaal verhaal combineert Technology (digitale tools), Pedagogy (creatief schrijven, multimodale expressie) en Content (taalvaardigheden, verhaalstructuur). De andere voorbeelden missen één of meer componenten.",
      category: 'application'
    },
    {
      id: 4,
      question: "Wat is het belangrijkste doel van het TPACK-model?",
      options: [
        "Zorgen dat leraren meer technologie gebruiken",
        "Leerlingen voorbereiden op de digitale toekomst",
        "Effectief onderwijs ontwerpen waarbij technologie pedagogiek en vakinhoud versterkt",
        "Kosten besparen door digitale middelen"
      ],
      correct: 2,
      explanation: "Het hoofddoel van TPACK is om effectief onderwijs te ontwerpen waarbij technologie niet zomaar wordt toegevoegd, maar pedagogiek en vakinhoud versterkt. Het gaat om de doelgerichte integratie van alle drie de componenten.",
      category: 'basic'
    },
    {
      id: 5,
      question: "Een leraar wil leerlingen laten samenwerken aan een project over het milieu. Ze gebruikt een online platform waar leerlingen samen kunnen schrijven en feedback kunnen geven. Welke TPACK-combinatie is dit vooral?",
      options: [
        "Technology + Content (TCK)",
        "Technology + Pedagogy (TPK)", 
        "Pedagogy + Content (PCK)",
        "Volledige TPACK integratie"
      ],
      correct: 3,
      explanation: "Dit is volledige TPACK integratie: Technology (online platform), Pedagogy (samenwerken, feedback geven), en Content (milieu-onderwerp). Alle drie de componenten worden doelgericht gecombineerd.",
      category: 'application'
    },
    {
      id: 6,
      question: "Waarom is het belangrijk dat leraren TPACK ontwikkelen in plaats van alleen technische vaardigheden?",
      options: [
        "Omdat technologie snel verandert",
        "Omdat leerlingen meer weten van technologie dan leraren",
        "Omdat technologie alleen effectief is als het pedagogisch en inhoudelijk verantwoord wordt ingezet",
        "Omdat scholen dit verplicht stellen"
      ],
      correct: 2,
      explanation: "TPACK is belangrijk omdat technologie op zichzelf geen beter onderwijs garandeert. Het moet pedagogisch verantwoord en inhoudelijk relevant worden ingezet om leerresultaten te verbeteren.",
      category: 'analysis'
    },
    {
      id: 7,
      question: "Een leraar gebruikt een app waarmee leerlingen hun eigen niveau kunnen kiezen bij het oefenen van tafels. Welk voordeel van TPACK wordt hier vooral gedemonstreerd?",
      options: [
        "Technologie vervangt de leraar",
        "Leerlingen worden stiller in de klas",
        "Differentiatie en gepersonaliseerd leren worden mogelijk",
        "Ouders kunnen thuis helpen"
      ],
      correct: 2,
      explanation: "Dit voorbeeld toont hoe TPACK differentiatie en gepersonaliseerd leren mogelijk maakt. De technologie (app) ondersteunt de pedagogiek (aangepast aan individuele behoeften) voor de vakinhoud (tafels).",
      category: 'application'
    },
    {
      id: 8,
      question: "Wat is een belangrijk kenmerk van goede TPACK-toepassing?",
      options: [
        "De nieuwste technologie gebruiken",
        "Zoveel mogelijk verschillende apps inzetten",
        "Technologie gebruiken die de leerdoelen ondersteunt",
        "Alleen digitale materialen gebruiken"
      ],
      correct: 2,
      explanation: "Goede TPACK-toepassing kenmerkt zich door het gebruik van technologie die de leerdoelen ondersteunt. Het gaat niet om de nieuwste of meeste technologie, maar om doelgerichte inzet.",
      category: 'analysis'
    }
  ]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = selectedAnswer
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setShowExplanation(false)
      } else {
        // Quiz completed
        const finalScore = newAnswers.reduce((score, answer, index) => {
          return score + (answer === questions[index].correct ? 1 : 0)
        }, 0)
        setScore(finalScore)
        setQuizCompleted(true)
        onComplete()
      }
    }
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAnswers([])
    setQuizCompleted(false)
    setScore(0)
  }

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return 'text-green-600'
    if (percentage >= 60) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return "Uitstekend! Je begrijpt TPACK goed. 🌟"
    if (percentage >= 60) return "Goed gedaan! Je bent op de goede weg. 👍"
    return "Nog even oefenen. Bekijk de uitleg en probeer opnieuw. 💪"
  }

  if (quizCompleted) {
    return (
      <div className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Quiz Voltooid! 🎉
          </h1>
          <div className={`text-6xl font-bold mb-4 ${getScoreColor(score, questions.length)}`}>
            {score}/{questions.length}
          </div>
          <p className="text-xl text-gray-600 mb-6">
            {getScoreMessage(score, questions.length)}
          </p>
        </div>

        {/* Results breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Resultaten per vraag:</h2>
          <div className="space-y-4">
            {questions.map((question, index) => (
              <div key={question.id} className="border-b border-gray-100 pb-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-gray-800 font-medium text-sm">
                    {index + 1}. {question.question}
                  </p>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    answers[index] === question.correct 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {answers[index] === question.correct ? '✅ Correct' : '❌ Fout'}
                  </span>
                </div>
                {answers[index] !== question.correct && (
                  <div className="text-sm text-gray-600">
                    <p><strong>Jouw antwoord:</strong> {question.options[answers[index] || 0]}</p>
                    <p><strong>Correct antwoord:</strong> {question.options[question.correct]}</p>
                    <p className="mt-2 text-gray-700">{question.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center space-x-4">
          <button
            onClick={restartQuiz}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            🔄 Quiz Opnieuw Doen
          </button>
          <button
            onClick={onComplete}
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            ✅ Ga naar Reflectie
          </button>
        </div>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          TPACK Quiz
        </h1>
        <p className="text-gray-600 mb-4">
          Test je kennis over het TPACK-model
        </p>
        <div className="text-sm text-gray-500">
          Vraag {currentQuestion + 1} van {questions.length}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Question */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
                currentQ.category === 'basic' ? 'bg-green-100 text-green-800' :
                currentQ.category === 'application' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {currentQ.category === 'basic' ? '📚 Basiskennis' :
                 currentQ.category === 'application' ? '💡 Toepassing' :
                 '🔍 Analyse'}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              {currentQ.question}
            </h2>
          </div>

          {/* Answer options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? showExplanation
                      ? index === currentQ.correct
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-blue-500 bg-blue-50'
                    : showExplanation && index === currentQ.correct
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                } ${showExplanation ? 'cursor-default' : 'hover:bg-gray-50'}`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === currentQ.correct
                          ? 'border-green-500 bg-green-500 text-white'
                          : 'border-red-500 bg-red-500 text-white'
                        : 'border-blue-500 bg-blue-500 text-white'
                      : showExplanation && index === currentQ.correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300'
                  }`}>
                    {showExplanation && index === currentQ.correct ? '✓' :
                     showExplanation && selectedAnswer === index && index !== currentQ.correct ? '✗' :
                     selectedAnswer === index ? '●' : String.fromCharCode(65 + index)}
                  </span>
                  <span className="text-gray-800">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">💡 Uitleg:</h3>
              <p className="text-blue-700 text-sm">{currentQ.explanation}</p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex justify-between">
            <button
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Vorige
            </button>
            
            <div className="space-x-3">
              {selectedAnswer !== null && !showExplanation && (
                <button
                  onClick={handleShowExplanation}
                  className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  💡 Toon Uitleg
                </button>
              )}
              
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {currentQuestion === questions.length - 1 ? 'Voltooien' : 'Volgende →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}