import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <span className="hero-tag">Validação de NF-e simplificada</span>
            <h1 className="hero-title">
              Importe, valide e concilie suas notas fiscais em segundos
            </h1>
            <p className="hero-subtitle">
              O XMLScan lê seu XML, recalcula os impostos e aponta divergências
              antes que virem problema.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Testar agora</button>
              <button className="btn btn-secondary">Ver funcionalidades</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="app-screenshot">
              <div className="screenshot-header">
                <div className="screenshot-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="screenshot-content">
                <div className="screenshot-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="screenshot-main">
                  <div className="search-bar"></div>
                  <div className="filters">
                    <div className="filter"></div>
                    <div className="filter"></div>
                  </div>
                  <div className="content-area">
                    <div className="content-line"></div>
                    <div className="content-line"></div>
                    <div className="content-line short"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
