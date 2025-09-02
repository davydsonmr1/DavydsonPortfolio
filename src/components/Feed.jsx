import React from "react";

function Feed() {
  return (
    <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Essa é minha linha do tempo até agora: </h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-year">2019</span>
              <span className="timeline-content">
                Em 2019 comecei a estudar programação por conta própria, focando inicialmente em HTML, CSS e JavaScript.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2020</span>
              <span className="timeline-content">
                Em 2020, comecei a fazer cursos online e a praticar mais intensamente, o que me ajudou a consolidar meus conhecimentos.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2021</span>
              <span className="timeline-content">
                Em 2021, comecei a trabalhar em projetos pessoais e a colaborar com outros desenvolvedores, o que me proporcionou uma experiência valiosa.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2022</span>
              <span className="timeline-content">
                Em 2022, aprofundei meus conhecimentos em JavaScript e comecei a aprender sobre frameworks como React.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2023</span>
              <span className="timeline-content">
                Em 2023, estou atualmente trabalhando em projetos mais complexos, utilizando React.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2024</span>
              <span className="timeline-content">
                Em 2024 entrei no ensino técnico em Desenvolvimento de Sistemas pelo SENAI, em parceria com o Grupo Energisa, e também estou cursando Tecnologia em Análise e Desenvolvimento de Sistemas na Doctum/Cataguases.
              </span>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2025</span>
              <span className="timeline-content">
                Em 2025, pretendo me aprofundar ainda mais em desenvolvimento web e explorar novas tecnologias.
              </span>
            </div>
          </div>
          {/* <a href="#" className="permalink">
            Saiba mais
          </a> */}
        </article>
      </div>
    </div>
  );
}

export default Feed;