import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <span className="logo-xml">xml</span>
              <span className="logo-scan">Scan</span>
            </div>
            <p className="footer-subtitle">
              Projeto acadêmico — Facens 2025
            </p>
          </div>
          <div className="footer-right">
            <a
              href="https://github.com/GabrielleMarchioli/XMLScan"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://gabriellemarchioli15.atlassian.net/jira/software/projects/SCRUM/boards/1/backlog"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="Jira"
            >
              Jira
            </a>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              title="Formulário de validação"
            >
              Formulário
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 XMLScan. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
