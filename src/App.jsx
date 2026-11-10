import React from 'react';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Java', 'Spring Boot',
  'Node.js', 'Express', 'MongoDB', 'JSON Server', 'Postman', 'Git e GitHub'
];

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#inicio">JP<span>.</span></a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#formacao">Formação</a>
          <a href="#habilidades">Stacks</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">PORTFÓLIO PROFISSIONAL · 2026</p>
            <h1>Olá, eu sou<br /><span>João Pedro Flor.</span></h1>
            <p className="lead">Estudante de Sistemas de Informação, com interesse em tecnologia, desenvolvimento de soluções e melhoria de processos.</p>
            <div className="actions">
              <a className="button primary" href="#sobre">Conheça meu perfil</a>
              <a className="button secondary" href="#contato">Entrar em contato</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="avatar">JP</div>
            <p className="card-label">EM DESENVOLVIMENTO</p>
            <h2>Tecnologia com<br />visão de negócio.</h2>
            <p>Aprendizado contínuo, organização e foco em resultados.</p>
          </div>
        </section>

        <section className="section" id="sobre">
          <p className="eyebrow">01 / SOBRE MIM</p>
          <h2>Um pouco sobre minha trajetória</h2>
          <p className="section-text">Tenho experiência profissional em atividades de atendimento, suporte administrativo e relacionamento com clientes, além de organização de informações e acompanhamento de demandas.</p>
          <p className="section-text">Atualmente, curso Sistemas de Informação na UMC e busco ampliar meus conhecimentos em desenvolvimento de software e tecnologia. Tenho interesse em unir minha experiência profissional à formação em TI para contribuir com soluções práticas, organizadas e eficientes.</p>
        </section>

        <section className="section split" id="formacao">
          <div>
            <p className="eyebrow">02 / FORMAÇÃO</p>
            <h2>Conhecimento em construção</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <span className="dot"></span>
              <p className="date">EM ANDAMENTO</p>
              <h3>Bacharelado em Sistemas de Informação</h3>
              <p>UMC — Universidade de Mogi das Cruzes</p>
            </article>
            <article className="timeline-item">
              <span className="dot"></span>
              <p className="date">FORMAÇÃO ANTERIOR</p>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <p>Formação informada no currículo profissional.</p>
            </article>
          </div>
        </section>

        <section className="section" id="habilidades">
          <p className="eyebrow">03 / STACKS E COMPETÊNCIAS</p>
          <h2>Ferramentas e tecnologias</h2>
          <p className="section-text">Tecnologias estudadas e utilizadas em atividades práticas durante a formação em Sistemas de Informação.</p>
          <div className="skills">
            {skills.map((skill) => <span className="skill" key={skill}>{skill}</span>)}
          </div>
          <div className="soft-skills">
            <div><strong>Organização</strong><span>Planejamento e acompanhamento de atividades.</span></div>
            <div><strong>Comunicação</strong><span>Relacionamento com clientes e trabalho em equipe.</span></div>
            <div><strong>Proatividade</strong><span>Iniciativa para aprender e resolver demandas.</span></div>
            <div><strong>Negociação</strong><span>Prospecção, propostas e acompanhamento comercial.</span></div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <p className="eyebrow">04 / EXPERIÊNCIA</p>
          <h2>Experiência profissional</h2>
          <div className="experience-card">
            <div>
              <p className="date">DESDE JANEIRO DE 2025</p>
              <h3>Alvaras Pavão &amp; Oliveira</h3>
              <p className="muted">Atuação comercial e suporte administrativo</p>
            </div>
            <ul>
              <li>Atendimento e relacionamento com clientes.</li>
              <li>Suporte administrativo e acompanhamento de demandas.</li>
              <li>Organização de documentos, informações e prazos.</li>
            </ul>
          </div>
        </section>

        <section className="contact" id="contato">
          <p className="eyebrow">05 / CONTATO</p>
          <h2>Vamos conversar?</h2>
          <p>Estou aberto a oportunidades, conexões e novos desafios profissionais.</p>
          <p className="contact-note">Adicione abaixo seus dados de contato e os links profissionais antes de publicar.</p>
          <div className="contact-links">
            <a href="https://github.com/joao-fagundess"
   target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </section>
      </main>
      <footer>© 2026 João Pedro Flor · Portfólio desenvolvido com React.</footer>
    </div>
  );
}

export default App;
