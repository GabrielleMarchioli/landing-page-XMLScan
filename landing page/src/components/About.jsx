import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-left">
            <h2 className="about-title">O XMLScan</h2>
            <p className="about-text">
              <strong>XMLScan – Análise de Conformidade Tributária das Notas</strong>
            </p>
            <p className="about-text">
              Para empresas que precisam garantir conformidade fiscal, o XMLScan realiza a análise automática das notas fiscais em XML, identificando inconsistências e riscos tributários.
            </p>
            <p className="about-text">
              Diferente de processos manuais, oferece validação inteligente e em tempo real, proporcionando mais segurança, agilidade e controle na gestão fiscal.
            </p>
          </div>
          <div className="about-right">
            <div className="vision-box">
              <h3 className="vision-title">Visão do Produto</h3>
              <p className="vision-text">
                Transformar a conformidade fiscal em um processo automático, seguro e confiável para contadores e pequenas empresas.
              </p>
              <div className="vision-benefits">
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Validação automática</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Análise em tempo real</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Redução de erros</span>
                </div>
                <div className="benefit">
                  <span className="benefit-icon">✓</span>
                  <span>Segurança garantida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
