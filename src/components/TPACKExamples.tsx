'use client'

import { useState } from 'react'

interface TPACKExamplesProps {
  onComplete: () => void
}

export default function TPACKExamples({ onComplete }: TPACKExamplesProps) {
  const [selectedExample, setSelectedExample] = useState<number | null>(null)
  const [viewedExamples, setViewedExamples] = useState<Set<number>>(new Set())
  const [hasCompleted, setHasCompleted] = useState(false)

  const examples = [
    {
      title: "Digitaal Verhalen Schrijven",
      subject: "Nederlandse Taal",
      grade: "Groep 5-6",
      tpackLevel: "TPACK",
      technology: "📱 Tablet met verhalen-app (Book Creator)",
      pedagogy: "🎯 Creatief schrijven, samenwerken, presenteren",
      content: "📖 Verhalenstructuur, spelling, woordenschat",
      description: "Leerlingen maken digitale verhalen met tekst, afbeeldingen en geluid",
      implementation: [
        "Leerlingen plannen hun verhaal met een storyboard",
        "Ze schrijven hun verhaal in de app met ondersteuning van spellingscontrole",
        "Voegen passende afbeeldingen en geluidseffecten toe",
        "Presenteren hun verhaal aan de klas via het digitale bord",
        "Geven elkaar feedback via digitale commentaren"
      ],
      benefits: [
        "Verhoogde motivatie door multimedia",
        "Directe feedback op spelling en grammatica",
        "Ontwikkeling van digitale vaardigheden",
        "Mogelijkheid tot herschrijven zonder opnieuw beginnen"
      ],
      challenges: [
        "Technische problemen kunnen afleiden",
        "Niet alle leerlingen hebben thuis toegang tot technologie",
        "Leraar moet goed bekend zijn met de app"
      ]
    },
    {
      title: "Virtuele Schoolreis door Rome",
      subject: "Geschiedenis/Aardrijkskunde",
      grade: "Groep 7-8",
      tpackLevel: "TPACK",
      technology: "🥽 VR-brillen, Google Earth VR, 360° video's",
      pedagogy: "🗺️ Ontdekkend leren, groepswerk, reflectie",
      content: "🏛️ Romeinse geschiedenis, architectuur, cultuur",
      description: "Leerlingen 'bezoeken' het oude Rome via virtual reality",
      implementation: [
        "Introductie van het oude Rome met traditionele bronnen",
        "Leerlingen krijgen opdrachten voor hun virtuele reis",
        "In groepjes verkennen ze verschillende locaties in VR",
        "Ze maken aantekeningen van hun ontdekkingen",
        "Presentatie van bevindingen met screenshots uit VR"
      ],
      benefits: [
        "Meeslepende ervaring van geschiedenis",
        "Toegang tot anders onbereikbare locaties",
        "Verhoogde betrokkenheid en motivatie",
        "Visueel-ruimtelijk leren wordt ondersteund"
      ],
      challenges: [
        "Dure technologie",
        "Sommige leerlingen kunnen duizelig worden",
        "Technische ondersteuning nodig"
      ]
    },
    {
      title: "Interactieve Breuken Leren",
      subject: "Rekenen/Wiskunde",
      grade: "Groep 6-7",
      tpackLevel: "TPACK",
      technology: "📊 Interactieve whiteboard, breuken-app, tablets",
      pedagogy: "🧮 Concrete-abstracte benadering, differentiatie",
      content: "🔢 Breuken, equivalentie, optellen en aftrekken",
      description: "Leerlingen leren breuken begrijpen door manipulatie en visualisatie",
      implementation: [
        "Start met concrete materialen (pizza's, chocoladerepen)",
        "Gebruik van digitale breukenstrips op het smartboard",
        "Leerlingen werken individueel met breuken-app op tablet",
        "App past moeilijkheidsgraad aan per leerling",
        "Leraar krijgt real-time inzicht in voortgang"
      ],
      benefits: [
        "Visuele representatie helpt begrip",
        "Directe feedback en aanpassing niveau",
        "Leerlingen kunnen in eigen tempo werken",
        "Leraar kan gericht ondersteunen"
      ],
      challenges: [
        "Balans tussen digitaal en concreet materiaal",
        "Niet alle leerlingen leren het beste digitaal",
        "Afhankelijkheid van werkende technologie"
      ]
    },
    {
      title: "Digitale Natuurdagboek",
      subject: "Natuur & Techniek",
      grade: "Groep 4-5",
      tpackLevel: "TPACK",
      technology: "📸 Tablet met camera, natuur-app (iNaturalist Kids)",
      pedagogy: "🔍 Onderzoekend leren, observeren, documenteren",
      content: "🌱 Planten en dieren, seizoenen, ecosystemen",
      description: "Leerlingen documenteren de natuur rond school digitaal",
      implementation: [
        "Leerlingen maken foto's van planten en dieren",
        "Gebruiken app om soorten te identificeren",
        "Houden digitaal dagboek bij van waarnemingen",
        "Vergelijken waarnemingen tussen seizoenen",
        "Delen ontdekkingen met andere scholen via platform"
      ],
      benefits: [
        "Verbinding tussen binnen- en buitenonderwijs",
        "Authentieke leeromgeving",
        "Ontwikkeling van onderzoeksvaardigheden",
        "Samenwerking met andere scholen mogelijk"
      ],
      challenges: [
        "Weersafhankelijkheid",
        "Privacy-overwegingen bij foto's",
        "Technologie moet robuust zijn voor buitengebruik"
      ]
    },
    {
      title: "Programmeren met Verhalen",
      subject: "Computational Thinking",
      grade: "Groep 6-8",
      tpackLevel: "TPACK",
      technology: "💻 Scratch Jr/Scratch, tablets/computers",
      pedagogy: "🧩 Probleemoplossend denken, trial-and-error, samenwerken",
      content: "🤖 Algoritmes, sequenties, loops, conditionals",
      description: "Leerlingen leren programmeren door interactieve verhalen te maken",
      implementation: [
        "Start met unplugged activiteiten (zonder computer)",
        "Introductie van Scratch met eenvoudige animaties",
        "Leerlingen maken hun eigen interactieve verhaal",
        "Integratie met andere vakken (verhaal over geschiedenis)",
        "Presentatie en feedback op elkaars programma's"
      ],
      benefits: [
        "Ontwikkeling van logisch denken",
        "Creativiteit gecombineerd met technologie",
        "Voorbereiding op digitale toekomst",
        "Foutjes maken is onderdeel van het leerproces"
      ],
      challenges: [
        "Leraren moeten zelf programmeren leren",
        "Frustratie bij technische problemen",
        "Balans tussen techniek en creativiteit"
      ]
    },
    {
      title: "Virtuele Wetenschapsexperimenten",
      subject: "Natuur & Techniek",
      grade: "Groep 7-8",
      tpackLevel: "TPACK",
      technology: "🧪 Simulatie-software, tablets, digitale sensoren",
      pedagogy: "🔬 Experimenteren, hypotheses opstellen, analyseren",
      content: "⚗️ Chemische reacties, natuurkunde, onderzoeksmethoden",
      description: "Leerlingen voeren experimenten uit die anders te gevaarlijk of duur zouden zijn",
      implementation: [
        "Leerlingen stellen hypotheses op over experimenten",
        "Voeren virtuele experimenten uit met simulaties",
        "Vergelijken resultaten met echte experimenten waar mogelijk",
        "Gebruiken digitale sensoren voor metingen",
        "Documenteren proces en resultaten digitaal"
      ],
      benefits: [
        "Veilige omgeving voor experimenten",
        "Herhaling van experimenten mogelijk",
        "Toegang tot anders onmogelijke experimenten",
        "Nauwkeurige metingen en data-analyse"
      ],
      challenges: [
        "Mist tactiele ervaring van echt experimenteren",
        "Dure software en apparatuur",
        "Technische kennis vereist van leraar"
      ]
    }
  ]

  const handleExampleClick = (index: number) => {
    setSelectedExample(index)
    setViewedExamples(prev => new Set([...prev, index]))
    
    if (viewedExamples.size + 1 >= 4 && !hasCompleted) {
      setTimeout(() => {
        setHasCompleted(true)
        onComplete()
      }, 1000)
    }
  }

  const getTpackColor = (level: string) => {
    switch (level) {
      case 'TPACK': return 'bg-purple-500 text-white'
      case 'TPK': return 'bg-cyan-500 text-white'
      case 'TCK': return 'bg-blue-500 text-white'
      case 'PCK': return 'bg-orange-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          TPACK in de Praktijk
        </h1>
        <p className="text-gray-600 mb-4">
          Ontdek hoe TPACK wordt toegepast in echte lessen in het basisonderwijs
        </p>
        <div className="text-sm text-gray-500">
          Bekeken voorbeelden: {viewedExamples.size}/{examples.length} (minimaal 4 voor voltooiing)
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Examples List */}
        <div className="lg:col-span-1 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Kies een voorbeeld:</h2>
          {examples.map((example, index) => (
            <div
              key={index}
              onClick={() => handleExampleClick(index)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedExample === index
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              } ${viewedExamples.has(index) ? 'ring-2 ring-green-400' : ''}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {viewedExamples.has(index) ? '✅ ' : ''}{example.title}
                </h3>
                <span className={`px-2 py-1 rounded text-xs font-medium ${getTpackColor(example.tpackLevel)}`}>
                  {example.tpackLevel}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{example.subject}</p>
              <p className="text-gray-500 text-xs">{example.grade}</p>
            </div>
          ))}
        </div>

        {/* Example Details */}
        <div className="lg:col-span-2">
          {selectedExample !== null ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {examples[selectedExample].title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>📚 {examples[selectedExample].subject}</span>
                      <span>👥 {examples[selectedExample].grade}</span>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getTpackColor(examples[selectedExample].tpackLevel)}`}>
                    {examples[selectedExample].tpackLevel}
                  </span>
                </div>
                
                <p className="text-gray-700 text-lg mb-6">
                  {examples[selectedExample].description}
                </p>
              </div>

              {/* TPACK Components */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">Technology</h3>
                  <p className="text-blue-700 text-sm">{examples[selectedExample].technology}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">Pedagogy</h3>
                  <p className="text-green-700 text-sm">{examples[selectedExample].pedagogy}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-2">Content</h3>
                  <p className="text-red-700 text-sm">{examples[selectedExample].content}</p>
                </div>
              </div>

              {/* Implementation */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">🚀 Uitvoering van de les:</h3>
                <ol className="space-y-2">
                  {examples[selectedExample].implementation.map((step, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Benefits and Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">✅ Voordelen:</h3>
                  <ul className="space-y-2">
                    {examples[selectedExample].benefits.map((benefit, index) => (
                      <li key={index} className="text-green-700 text-sm flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-3">⚠️ Uitdagingen:</h3>
                  <ul className="space-y-2">
                    {examples[selectedExample].challenges.map((challenge, index) => (
                      <li key={index} className="text-orange-700 text-sm flex items-start space-x-2">
                        <span className="text-orange-500 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <div className="text-6xl mb-4">👈</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Selecteer een voorbeeld
              </h2>
              <p className="text-gray-600">
                Kies een praktijkvoorbeeld uit de lijst om te zien hoe TPACK wordt toegepast
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-800 font-medium">Voortgang voorbeelden</span>
          <span className="text-blue-600 text-sm">
            {viewedExamples.size}/{examples.length} voorbeelden bekeken
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(viewedExamples.size / examples.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {hasCompleted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-green-600 text-xl">🎉</span>
            <span className="text-green-800 font-medium">
              Geweldig! Je hebt voldoende praktijkvoorbeelden bekeken. 
              Test nu je kennis met de quiz!
            </span>
          </div>
        </div>
      )}
    </div>
  )
}