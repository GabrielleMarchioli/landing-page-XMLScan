import React from 'react'
import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Importe o XML',
      description: 'da nota fiscal'
    },
    {
      number: 2,
      title: 'O sistema valida',
      description: 'e recalcula os impostos'
    },
    {
      number: 3,
      title: 'Veja as divergências',
      description: 'e exporte o relatório'
    }
  ]

  return (
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">Como funciona</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="step">
                <div className="step-number">{step.number}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
