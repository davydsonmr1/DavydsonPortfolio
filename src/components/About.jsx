import React from 'react';

function About() {
  return (
    <div className="content-section">
      <h1>Olá <span className="wave">👋</span></h1>
      <p>
      Sou Davydson, desenvolvedor Full Stack focado em JavaScript, React e Node.js. Atualmente, curso Análise e Desenvolvimento de Sistemas e o técnico em Desenvolvimento de Sistemas pelo SENAI em parceria com o projeto Rio Pomba Valley da Energisa, sempre buscando aprender e evoluir.
    <br />Adoro criar interfaces web modernas e responsivas, explorar novas tecnologias e desenvolver soluções que fazem a diferença.

    <br />Quer saber mais? Dá uma olhada nos meus projetos!
      </p>
      <a href="https://drive.google.com/file/d/1u5NquiThrIgh8PSD2ETN6QZsdKQaO8l_/view?usp=sharing" target='_blank' className="permalink">Baixe o meu Curriculo</a>
    </div>
  );
}

export default About;