import React from 'react'
import './Features.css'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Importação de XML',
      description: 'Upload de NF-e com validação de estrutura',
      icon: '📄'
    },
    {
      id: 2,
      title: 'Cálculo automático',
      description: 'ICMS, PIS, COFINS e IPI calculados e comparados',
      icon: '🧮'
    },
    {
      id: 3,
      title: 'Log de atividades',
      description: 'Histórico completo com filtros por data e tipo',
      icon: '📋'
    }
  ]

  return (
    <section className="features section" id="features">
      <div className="container">
        <h2 className="section-title">Funcionalidades principais</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
