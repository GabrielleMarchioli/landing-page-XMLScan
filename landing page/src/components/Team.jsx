import React from 'react'
import './Team.css'

export default function Team() {
  const team = [
    {
      id: 1,
      name: 'Gabrielle Marchioli',
      role: 'Scrum Master',
      description: 'Líder do projeto e planejamento das atividades. Responsável por tirar impedimentos e fazer a comunicação com stakeholders.'
    },
    {
      id: 2,
      name: 'Matheus Arizono',
      role: 'Product Owner',
      description: 'Dono do Produto. Responsável por definir o backlog do produto e suas prioridades junto com o cliente.'
    },
    {
      id: 3,
      name: 'Afonso Henrique',
      role: 'Desenvolvedor',
      description: 'Membro do time de desenvolvimento com foco em implementação e qualidade.'
    },
    {
      id: 4,
      name: 'Giulianno Gonçalves',
      role: 'Desenvolvedor',
      description: 'Membro do time de desenvolvimento com foco em implementação e qualidade.'
    }
  ]

  return (
    <section className="team section" id="team">
      <div className="container">
        <h2 className="section-title">Nossa Equipe</h2>
        <p className="team-subtitle">
          Profissionais dedicados a transformar a conformidade fiscal em um processo automático e seguro.
        </p>
        <div className="team-grid">
          {team.map(member => (
            <div key={member.id} className="team-card">
              <div className="member-avatar">{member.name.charAt(0)}</div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
