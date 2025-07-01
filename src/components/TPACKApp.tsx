'use client'

import { useState } from 'react'
import TPACKIntroduction from './TPACKIntroduction'
import TPACKDiagram from './TPACKDiagram'
import TPACKExamples from './TPACKExamples'
import TPACKQuiz from './TPACKQuiz'
import TPACKReflection from './TPACKReflection'

type Section = 'intro' | 'diagram' | 'examples' | 'quiz' | 'reflection'

export default function TPACKApp() {
  const [currentSection, setCurrentSection] = useState<Section>('intro')
  const [completedSections, setCompletedSections] = useState<Set<Section>>(new Set())

  const sections = [
    { id: 'intro' as Section, title: 'Introductie', icon: '📚', description: 'Wat is TPACK?' },
    { id: 'diagram' as Section, title: 'Het Model', icon: '🎯', description: 'Interactief diagram' },
    { id: 'examples' as Section, title: 'Voorbeelden', icon: '💡', description: 'Praktijkvoorbeelden' },
    { id: 'quiz' as Section, title: 'Quiz', icon: '🧩', description: 'Test je kennis' },
    { id: 'reflection' as Section, title: 'Reflectie', icon: '🤔', description: 'Eigen toepassing' }
  ]

  const markSectionCompleted = (section: Section) => {
    setCompletedSections(prev => new Set([...prev, section]))
  }

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'intro':
        return <TPACKIntroduction onComplete={() => markSectionCompleted('intro')} />
      case 'diagram':
        return <TPACKDiagram onComplete={() => markSectionCompleted('diagram')} />
      case 'examples':
        return <TPACKExamples onComplete={() => markSectionCompleted('examples')} />
      case 'quiz':
        return <TPACKQuiz onComplete={() => markSectionCompleted('quiz')} />
      case 'reflection':
        return <TPACKReflection onComplete={() => markSectionCompleted('reflection')} />
      default:
        return <TPACKIntroduction onComplete={() => markSectionCompleted('intro')} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">TPACK Model</h1>
              <p className="text-gray-600 mt-1">Technologie, Pedagogiek & Vakinhoud</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500">Voortgang</div>
              <div className="text-2xl font-bold text-blue-600">
                {completedSections.size}/{sections.length}
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Navigatie</h2>
              <nav className="space-y-3">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      currentSection === section.id
                        ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{section.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold">{section.title}</div>
                        <div className={`text-sm ${
                          currentSection === section.id ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {section.description}
                        </div>
                      </div>
                      {completedSections.has(section.id) && (
                        <span className="text-green-500 text-xl">✅</span>
                      )}
                    </div>
                  </button>
                ))}
              </nav>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Voortgang</span>
                  <span>{Math.round((completedSections.size / sections.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${(completedSections.size / sections.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {renderCurrentSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}