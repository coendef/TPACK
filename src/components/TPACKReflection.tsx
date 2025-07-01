'use client'

import { useState } from 'react'

interface TPACKReflectionProps {
  onComplete: () => void
}

export default function TPACKReflection({ onComplete }: TPACKReflectionProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [reflectionData, setReflectionData] = useState({
    subject: '',
    grade: '',
    topic: '',
    currentApproach: '',
    technology: '',
    pedagogicalGoals: '',
    contentGoals: '',
    integration: '',
    challenges: '',
    solutions: '',
    evaluation: ''
  })
  const [hasCompleted, setHasCompleted] = useState(false)

  const steps = [
    {
      title: "Kies je Context",
      description: "Begin met het kiezen van een vak en onderwerp",
      fields: ['subject', 'grade', 'topic']
    },
    {
      title: "Huidige Aanpak",
      description: "Beschrijf hoe je dit onderwerp nu zou onderwijzen",
      fields: ['currentApproach']
    },
    {
      title: "Technology (T)",
      description: "Welke technologie zou je willen gebruiken?",
      fields: ['technology']
    },
    {
      title: "Pedagogy (P)",
      description: "Wat zijn je pedagogische doelen?",
      fields: ['pedagogicalGoals']
    },
    {
      title: "Content (C)",
      description: "Wat zijn je inhoudelijke leerdoelen?",
      fields: ['contentGoals']
    },
    {
      title: "TPACK Integratie",
      description: "Hoe combineer je alle drie de componenten?",
      fields: ['integration']
    },
    {
      title: "Uitdagingen & Oplossingen",
      description: "Welke uitdagingen verwacht je en hoe los je die op?",
      fields: ['challenges', 'solutions']
    },
    {
      title: "Evaluatie",
      description: "Hoe ga je het succes meten?",
      fields: ['evaluation']
    }
  ]

  const fieldLabels = {
    subject: "Vak",
    grade: "Groep",
    topic: "Onderwerp/Thema",
    currentApproach: "Huidige aanpak (zonder technologie)",
    technology: "Welke technologie wil je gebruiken?",
    pedagogicalGoals: "Pedagogische doelen (hoe leren kinderen het beste?)",
    contentGoals: "Inhoudelijke leerdoelen (wat moeten kinderen leren?)",
    integration: "Hoe combineer je technologie, pedagogiek en vakinhoud?",
    challenges: "Welke uitdagingen verwacht je?",
    solutions: "Hoe ga je deze uitdagingen oplossen?",
    evaluation: "Hoe meet je of je les succesvol was?"
  }

  const placeholders = {
    subject: "Bijv. Rekenen, Taal, Wereldoriëntatie...",
    grade: "Bijv. Groep 3, Groep 6, Groep 8...",
    topic: "Bijv. Breuken, Verhalen schrijven, Het weer...",
    currentApproach: "Beschrijf hoe je dit onderwerp traditioneel zou onderwijzen...",
    technology: "Bijv. Tablets met een app, interactief whiteboard, VR-brillen...",
    pedagogicalGoals: "Bijv. Samenwerken, zelfstandig leren, creativiteit stimuleren...",
    contentGoals: "Bijv. Breuken begrijpen, verhaalstructuur leren, weersomstandigheden kennen...",
    integration: "Beschrijf hoe de technologie je pedagogiek en vakinhoud versterkt...",
    challenges: "Bijv. Technische problemen, verschillende niveaus, tijd...",
    solutions: "Hoe ga je deze uitdagingen aanpakken?",
    evaluation: "Bijv. Observatie, toetsing, leerlingproducten, reflectie..."
  }

  const handleInputChange = (field: string, value: string) => {
    setReflectionData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const isStepComplete = (stepIndex: number) => {
    const step = steps[stepIndex]
    return step.fields.every(field => reflectionData[field as keyof typeof reflectionData].trim() !== '')
  }

  const canProceed = () => {
    return isStepComplete(currentStep)
  }

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else if (!hasCompleted) {
      setHasCompleted(true)
      onComplete()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateLessonPlan = () => {
    return `
# TPACK Lesplan: ${reflectionData.topic}

## Context
- **Vak:** ${reflectionData.subject}
- **Groep:** ${reflectionData.grade}
- **Onderwerp:** ${reflectionData.topic}

## Traditionele Aanpak
${reflectionData.currentApproach}

## TPACK Integratie

### Technology (T)
${reflectionData.technology}

### Pedagogy (P)
${reflectionData.pedagogicalGoals}

### Content (C)
${reflectionData.contentGoals}

### Geïntegreerde Aanpak (TPACK)
${reflectionData.integration}

## Implementatie

### Verwachte Uitdagingen
${reflectionData.challenges}

### Oplossingsstrategieën
${reflectionData.solutions}

### Evaluatie & Reflectie
${reflectionData.evaluation}

---
*Gemaakt met de TPACK Reflectietool*
    `.trim()
  }

  const downloadLessonPlan = () => {
    const content = generateLessonPlan()
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `TPACK-Lesplan-${reflectionData.topic.replace(/\s+/g, '-')}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  if (hasCompleted) {
    return (
      <div className="p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🎉 Reflectie Voltooid!
          </h1>
          <p className="text-gray-600 mb-6">
            Je hebt een complete TPACK-reflectie gemaakt voor je les over "{reflectionData.topic}"
          </p>
        </div>

        {/* Lesson Plan Preview */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Je TPACK Lesplan</h2>
            <button
              onClick={downloadLessonPlan}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              📄 Download Lesplan
            </button>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
              {generateLessonPlan()}
            </pre>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-2">💻 Technology</h3>
            <p className="text-blue-700 text-sm">{reflectionData.technology}</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-800 mb-2">🎯 Pedagogy</h3>
            <p className="text-green-700 text-sm">{reflectionData.pedagogicalGoals}</p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-800 mb-2">📚 Content</h3>
            <p className="text-red-700 text-sm">{reflectionData.contentGoals}</p>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-bold text-purple-800 mb-4">🚀 Volgende Stappen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Voor implementatie:</h4>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Test de technologie van tevoren</li>
                <li>• Bereid een backup-plan voor</li>
                <li>• Informeer collega's over je aanpak</li>
                <li>• Zorg voor technische ondersteuning</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">Na de les:</h4>
              <ul className="text-purple-600 text-sm space-y-1">
                <li>• Evalueer met leerlingen</li>
                <li>• Reflecteer op wat goed ging</li>
                <li>• Noteer verbeterpunten</li>
                <li>• Deel ervaringen met collega's</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">🎓 Gefeliciteerd!</h3>
            <p className="text-green-700">
              Je hebt alle onderdelen van de TPACK-leeromgeving voltooid. 
              Je bent nu klaar om effectief onderwijs met technologie te ontwerpen!
            </p>
          </div>
        </div>
      </div>
    )
  }

  const currentStepData = steps[currentStep]

  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          TPACK Reflectie & Lesontwerp
        </h1>
        <p className="text-gray-600 mb-4">
          Ontwerp je eigen les met het TPACK-model
        </p>
        <div className="text-sm text-gray-500">
          Stap {currentStep + 1} van {steps.length}: {currentStepData.title}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-purple-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`w-8 h-8 rounded-full text-sm font-bold transition-all ${
                index === currentStep
                  ? 'bg-purple-500 text-white'
                  : index < currentStep || isStepComplete(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
              }`}
              title={step.title}
            >
              {index < currentStep || isStepComplete(index) ? '✓' : index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Current Step */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {currentStepData.title}
            </h2>
            <p className="text-gray-600">
              {currentStepData.description}
            </p>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {currentStepData.fields.map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {fieldLabels[field as keyof typeof fieldLabels]}
                </label>
                {field === 'grade' ? (
                  <select
                    value={reflectionData[field as keyof typeof reflectionData]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Kies een groep...</option>
                    <option value="Groep 1">Groep 1</option>
                    <option value="Groep 2">Groep 2</option>
                    <option value="Groep 3">Groep 3</option>
                    <option value="Groep 4">Groep 4</option>
                    <option value="Groep 5">Groep 5</option>
                    <option value="Groep 6">Groep 6</option>
                    <option value="Groep 7">Groep 7</option>
                    <option value="Groep 8">Groep 8</option>
                  </select>
                ) : field === 'subject' ? (
                  <select
                    value={reflectionData[field as keyof typeof reflectionData]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Kies een vak...</option>
                    <option value="Rekenen/Wiskunde">Rekenen/Wiskunde</option>
                    <option value="Nederlandse Taal">Nederlandse Taal</option>
                    <option value="Wereldoriëntatie">Wereldoriëntatie</option>
                    <option value="Geschiedenis">Geschiedenis</option>
                    <option value="Aardrijkskunde">Aardrijkskunde</option>
                    <option value="Natuur & Techniek">Natuur & Techniek</option>
                    <option value="Tekenen">Tekenen</option>
                    <option value="Handvaardigheid">Handvaardigheid</option>
                    <option value="Muziek">Muziek</option>
                    <option value="Gymnastiek">Gymnastiek</option>
                    <option value="Engels">Engels</option>
                  </select>
                ) : (
                  <textarea
                    value={reflectionData[field as keyof typeof reflectionData]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    placeholder={placeholders[field as keyof typeof placeholders]}
                    rows={field === 'topic' ? 2 : 4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              ← Vorige
            </button>
            
            <button
              onClick={nextStep}
              disabled={!canProceed()}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentStep === steps.length - 1 ? 'Voltooien ✅' : 'Volgende →'}
            </button>
          </div>
        </div>

        {/* Progress Summary */}
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-purple-800 font-medium">Voortgang reflectie</span>
            <span className="text-purple-600 text-sm">
              {steps.filter((_, index) => isStepComplete(index)).length}/{steps.length} stappen voltooid
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}