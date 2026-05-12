import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-xml">xml</span>
          <span className="logo-scan">Scan</span>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <button
            onClick={() => scrollToSection('features')}
            className="nav-link"
          >
            Funcionalidades
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="nav-link"
          >
            Como funciona
          </button>
          <button
            onClick={() => scrollToSection('validation')}
            className="nav-link"
          >
            Avaliar solução
          </button>
        </div>

        <button className="btn btn-primary navbar-cta">
          Acessar o sistema
        </button>
      </div>
    </nav>
  )
}
