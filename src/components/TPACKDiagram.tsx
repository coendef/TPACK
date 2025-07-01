'use client'

import { useState } from 'react'

interface TPACKDiagramProps {
  onComplete: () => void
}

export default function TPACKDiagram({ onComplete }: TPACKDiagramProps) {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [exploredAreas, setExploredAreas] = useState<Set<string>>(new Set())
  const [hasCompleted, setHasCompleted] = useState(false)

  const areas = {
    'T': {
      name: 'Technology Knowledge (TK)',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      description: 'Kennis over digitale tools en technologieën',
      examples: [
        '💻 Werken met computers en tablets',
        '📱 Apps en software gebruiken',
        '🌐 Internet en online platforms',
        '🎥 Digitale media maken en bewerken'
      ],
      skills: [
        'Basis computervaardigheid',
        'Troubleshooting van technische problemen',
        'Nieuwe technologieën leren gebruiken',
        'Digitale veiligheid en privacy'
      ]
    },
    'P': {
      name: 'Pedagogical Knowledge (PK)',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      description: 'Kennis over leren, onderwijzen en leerlingen',
      examples: [
        '👥 Klassenmanagement',
        '🎯 Leerdoelen opstellen',
        '📊 Leerlingen beoordelen',
        '🤝 Differentiatie en individualisering'
      ],
      skills: [
        'Verschillende onderwijsmethoden',
        'Motivatie en betrokkenheid',
        'Leerpsychologie',
        'Groepsdynamiek'
      ]
    },
    'C': {
      name: 'Content Knowledge (CK)',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      description: 'Vakinhoudelijke kennis van het onderwerp',
      examples: [
        '🔢 Rekenen en wiskunde',
        '📖 Taal en lezen',
        '🌍 Wereldoriëntatie',
        '🎨 Creatieve vakken'
      ],
      skills: [
        'Diepgaande vakkennis',
        'Curriculum en leerdoelen',
        'Vakdidactiek',
        'Actuele ontwikkelingen in het vak'
      ]
    },
    'TP': {
      name: 'Technology + Pedagogy (TPK)',
      color: 'bg-cyan-500',
      hoverColor: 'hover:bg-cyan-600',
      description: 'Hoe technologie het leren en onderwijzen kan verbeteren',
      examples: [
        '📱 Interactieve leer-apps',
        '🎮 Educatieve games',
        '📊 Digitale toetsing',
        '💬 Online samenwerking'
      ],
      benefits: [
        'Verhoogde motivatie',
        'Directe feedback',
        'Gepersonaliseerd leren',
        'Nieuwe vormen van interactie'
      ]
    },
    'TC': {
      name: 'Technology + Content (TCK)',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      description: 'Hoe technologie vakinhoud kan ondersteunen',
      examples: [
        '🧮 Rekensoftware en calculators',
        '🗺️ Digitale atlassen en kaarten',
        '🔬 Virtuele experimenten',
        '📚 E-books en digitale bronnen'
      ],
      benefits: [
        'Complexe concepten visualiseren',
        'Toegang tot actuele informatie',
        'Simulaties en modellen',
        'Multimedia-rijke content'
      ]
    },
    'PC': {
      name: 'Pedagogy + Content (PCK)',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      description: 'Hoe je vakinhoud het beste kunt onderwijzen',
      examples: [
        '🎯 Vakspecifieke onderwijsmethoden',
        '📝 Aangepaste uitleg per vak',
        '🔍 Misconcepties herkennen',
        '📈 Vakgerichte beoordeling'
      ],
      benefits: [
        'Effectievere uitleg',
        'Betere begripsvorming',
        'Vakspecifieke didactiek',
        'Gerichte ondersteuning'
      ]
    },
    'TPACK': {
      name: 'Technology + Pedagogy + Content (TPACK)',
      color: 'bg-indigo-600',
      hoverColor: 'hover:bg-indigo-700',
      description: 'De perfecte combinatie: effectief onderwijs met technologie',
      examples: [
        '📊 Digitale grafieken maken bij wiskunde',
        '🎬 Video\'s maken over geschiedenis',
        '🌱 Apps gebruiken bij natuuronderwijs',
        '📝 Digitaal verhalen schrijven'
      ],
      benefits: [
        'Optimale leerervaring',
        'Technologie met doel',
        'Verhoogde betrokkenheid',
        'Toekomstgericht onderwijs'
      ]
    }
  }

  const handleAreaClick = (areaKey: string) => {
    setSelectedArea(areaKey)
    setExploredAreas(prev => new Set([...prev, areaKey]))
    
    // Check if all areas have been explored
    if (exploredAreas.size + 1 >= Object.keys(areas).length && !hasCompleted) {
      setTimeout(() => {
        setHasCompleted(true)
        onComplete()
      }, 1000)
    }
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Het TPACK Model - Interactief Diagram
        </h1>
        <p className="text-gray-600 mb-4">
          Klik op de verschillende gebieden om meer te leren over elk onderdeel
        </p>
        <div className="text-sm text-gray-500">
          Verkend: {exploredAreas.size}/{Object.keys(areas).length} gebieden
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Interactive Diagram */}
        <div className="bg-gray-50 p-8 rounded-xl">
          <div className="relative w-full max-w-md mx-auto">
            {/* SVG Venn Diagram */}
            <svg viewBox="0 0 400 400" className="w-full h-auto">
              {/* Technology Circle */}
              <circle
                cx="150"
                cy="150"
                r="120"
                fill="rgba(59, 130, 246, 0.3)"
                stroke="rgb(59, 130, 246)"
                strokeWidth="3"
                className="cursor-pointer hover:fill-opacity-50 transition-all"
                onClick={() => handleAreaClick('T')}
              />
              
              {/* Pedagogy Circle */}
              <circle
                cx="250"
                cy="150"
                r="120"
                fill="rgba(34, 197, 94, 0.3)"
                stroke="rgb(34, 197, 94)"
                strokeWidth="3"
                className="cursor-pointer hover:fill-opacity-50 transition-all"
                onClick={() => handleAreaClick('P')}
              />
              
              {/* Content Circle */}
              <circle
                cx="200"
                cy="230"
                r="120"
                fill="rgba(239, 68, 68, 0.3)"
                stroke="rgb(239, 68, 68)"
                strokeWidth="3"
                className="cursor-pointer hover:fill-opacity-50 transition-all"
                onClick={() => handleAreaClick('C')}
              />

              {/* Labels */}
              <text x="100" y="100" textAnchor="middle" className="fill-blue-700 font-bold text-sm cursor-pointer" onClick={() => handleAreaClick('T')}>
                Technology
              </text>
              <text x="300" y="100" textAnchor="middle" className="fill-green-700 font-bold text-sm cursor-pointer" onClick={() => handleAreaClick('P')}>
                Pedagogy
              </text>
              <text x="200" y="320" textAnchor="middle" className="fill-red-700 font-bold text-sm cursor-pointer" onClick={() => handleAreaClick('C')}>
                Content
              </text>

              {/* Intersection Labels */}
              <text x="200" y="120" textAnchor="middle" className="fill-cyan-700 font-bold text-xs cursor-pointer" onClick={() => handleAreaClick('TP')}>
                TPK
              </text>
              <text x="160" y="200" textAnchor="middle" className="fill-purple-700 font-bold text-xs cursor-pointer" onClick={() => handleAreaClick('TC')}>
                TCK
              </text>
              <text x="240" y="200" textAnchor="middle" className="fill-orange-700 font-bold text-xs cursor-pointer" onClick={() => handleAreaClick('PC')}>
                PCK
              </text>
              <text x="200" y="180" textAnchor="middle" className="fill-indigo-700 font-bold text-xs cursor-pointer" onClick={() => handleAreaClick('TPACK')}>
                TPACK
              </text>
            </svg>
          </div>

          {/* Quick Access Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-6">
            {Object.entries(areas).map(([key, area]) => (
              <button
                key={key}
                onClick={() => handleAreaClick(key)}
                className={`p-2 text-white text-xs rounded-lg transition-all ${area.color} ${area.hoverColor} ${
                  exploredAreas.has(key) ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                {exploredAreas.has(key) ? '✅ ' : ''}{area.name}
              </button>
            ))}
          </div>
        </div>

        {/* Information Panel */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          {selectedArea ? (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {areas[selectedArea as keyof typeof areas].name}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {areas[selectedArea as keyof typeof areas].description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">📋 Voorbeelden:</h3>
                  <ul className="space-y-2">
                    {areas[selectedArea as keyof typeof areas].examples.map((example, index) => (
                      <li key={index} className="text-gray-700 text-sm">
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>

                {areas[selectedArea as keyof typeof areas].skills && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">🎯 Belangrijke vaardigheden:</h3>
                    <ul className="space-y-2">
                      {areas[selectedArea as keyof typeof areas].skills?.map((skill, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                          • {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {areas[selectedArea as keyof typeof areas].benefits && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">✨ Voordelen:</h3>
                    <ul className="space-y-2">
                      {areas[selectedArea as keyof typeof areas].benefits?.map((benefit, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👆</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Klik op een gebied
              </h2>
              <p className="text-gray-600">
                Selecteer een onderdeel van het TPACK-model om meer informatie te zien
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-800 font-medium">Voortgang verkenning</span>
          <span className="text-blue-600 text-sm">
            {exploredAreas.size}/{Object.keys(areas).length} gebieden verkend
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(exploredAreas.size / Object.keys(areas).length) * 100}%` }}
          ></div>
        </div>
      </div>

      {hasCompleted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-xl">🎉</span>
            <span className="text-green-800 font-medium">
              Uitstekend! Je hebt alle onderdelen van het TPACK-model verkend. 
              Ga nu naar de praktijkvoorbeelden om te zien hoe het werkt in de klas.
            </span>
          </div>
        </div>
      )}
    </div>
  )
}