'use client'

import { useState } from 'react'

interface TPACKIntroductionProps {
  onComplete: () => void
}

export default function TPACKIntroduction({ onComplete }: TPACKIntroductionProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hasCompleted, setHasCompleted] = useState(false)

  const slides = [
    {
      title: "Welkom bij TPACK! 👋",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-6xl mb-4">🎓</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Hallo aanstaande leraar!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Je gaat leren over het <strong>TPACK-model</strong> - een belangrijk framework 
              dat je helpt om technologie effectief in te zetten in je onderwijs.
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Wat ga je leren?</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• Wat TPACK betekent en waarom het belangrijk is</li>
              <li>• Hoe de drie kennisdomeinen samenwerken</li>
              <li>• Praktische voorbeelden uit het basisonderwijs</li>
              <li>• Hoe je TPACK toepast in je eigen lessen</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Wat is TPACK? 🤔",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">TPACK</h2>
            <div className="text-4xl mb-4">📚 + 🎯 + 💻</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg text-center border-2 border-red-200">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-bold text-red-800 mb-2">Content Knowledge</h3>
              <p className="text-red-700 text-sm">
                <strong>Vakinhoud</strong><br/>
                Wat je weet over het vak dat je onderwijst
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-green-800 mb-2">Pedagogical Knowledge</h3>
              <p className="text-green-700 text-sm">
                <strong>Pedagogiek</strong><br/>
                Hoe je kinderen het beste kunt leren
              </p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
              <div className="text-3xl mb-3">💻</div>
              <h3 className="font-bold text-blue-800 mb-2">Technology Knowledge</h3>
              <p className="text-blue-700 text-sm">
                <strong>Technologie</strong><br/>
                Hoe je digitale tools effectief gebruikt
              </p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <p className="text-purple-800 text-lg font-medium">
              🎯 <strong>TPACK</strong> = De combinatie van deze drie kennisgebieden voor effectief onderwijs met technologie
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Waarom is TPACK belangrijk? 🌟",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Waarom heb je TPACK nodig als leraar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h3 className="font-bold text-yellow-800 mb-2">⚠️ Zonder TPACK</h3>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Technologie wordt gebruikt "omdat het moet"</li>
                  <li>• Geen duidelijk doel bij digitale tools</li>
                  <li>• Leerlingen raken afgeleid in plaats van gemotiveerd</li>
                  <li>• Technologie vervangt goed onderwijs niet</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <h3 className="font-bold text-green-800 mb-2">✅ Met TPACK</h3>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Technologie ondersteunt je leerdoelen</li>
                  <li>• Bewuste keuzes voor digitale tools</li>
                  <li>• Leerlingen zijn actiever betrokken</li>
                  <li>• Technologie versterkt je pedagogiek</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-blue-800 mb-3">🎯 Praktijkvoorbeeld</h3>
            <div className="text-blue-700">
              <p className="mb-2">
                <strong>Zonder TPACK:</strong> "We gaan vandaag rekenen op de tablet omdat de ICT-coördinator dat heeft gevraagd."
              </p>
              <p>
                <strong>Met TPACK:</strong> "We gebruiken deze reken-app omdat kinderen hiermee hun tafels kunnen oefenen op hun eigen niveau, 
                en ik kan direct zien waar ze hulp bij nodig hebben."
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "De geschiedenis van TPACK 📖",
      content: (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Hoe ontstond TPACK?
          </h2>
          
          <div className="timeline space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1">
                <h3 className="font-bold text-gray-800 mb-2">1986 - Lee Shulman</h3>
                <p className="text-gray-700 text-sm">
                  Introduceerde <strong>PCK</strong> (Pedagogical Content Knowledge) - 
                  de combinatie van vakkennis en pedagogische kennis.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1">
                <h3 className="font-bold text-gray-800 mb-2">2006 - Mishra & Koehler</h3>
                <p className="text-gray-700 text-sm">
                  Voegden <strong>Technology</strong> toe aan het model en creëerden 
                  <strong>TPACK</strong> (Technology, Pedagogy, and Content Knowledge).
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div className="bg-gray-50 p-4 rounded-lg flex-1">
                <h3 className="font-bold text-gray-800 mb-2">Nu - Wereldwijd gebruikt</h3>
                <p className="text-gray-700 text-sm">
                  TPACK wordt wereldwijd gebruikt in lerarenopleidingen en scholen 
                  om effectief onderwijs met technologie te ontwerpen.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-6 rounded-lg">
            <h3 className="font-bold text-indigo-800 mb-3">🧠 Waarom is dit belangrijk voor jou?</h3>
            <p className="text-indigo-700">
              Als aanstaande leraar groei je op in een digitale wereld. TPACK helpt je om 
              technologie niet zomaar te gebruiken, maar <strong>slim en doelgericht</strong> 
              in te zetten voor beter onderwijs.
            </p>
          </div>
        </div>
      )
    }
  ]

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else if (!hasCompleted) {
      setHasCompleted(true)
      onComplete()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="p-8">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Slide {currentSlide + 1} van {slides.length}
          </span>
          <span className="text-sm text-gray-600">
            {Math.round(((currentSlide + 1) / slides.length) * 100)}% voltooid
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Slide content */}
      <div className="min-h-[500px]">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {slides[currentSlide].title}
        </h1>
        {slides[currentSlide].content}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          ← Vorige
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          {currentSlide === slides.length - 1 ? 'Voltooid! ✅' : 'Volgende →'}
        </button>
      </div>

      {hasCompleted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-xl">🎉</span>
            <span className="text-green-800 font-medium">
              Goed gedaan! Je hebt de introductie voltooid. Ga nu naar het interactieve diagram.
            </span>
          </div>
        </div>
      )}
    </div>
  )
}