import React from 'react'
import './Validation.css'

export default function Validation() {
  const handleFormClick = () => {
    window.open('https://forms.google.com', '_blank')
  }

  return (
    <section className="validation section" id="validation">
      <div className="container">
        <div className="validation-content">
          <h2 className="validation-title">Ajude a melhorar o XMLScan</h2>
          <p className="validation-subtitle">
            Responda nosso formulário e nos diga se a solução resolve o seu problema.
          </p>
          <button
            onClick={handleFormClick}
            className="btn btn-primary"
          >
            Responder formulário
          </button>
          <p className="validation-disclaimer">
            Pesquisa acadêmica — Facens 2025. Dados utilizados exclusivamente para fins de pesquisa.
          </p>
        </div>
      </div>
    </section>
  )
}
