import React, { useState } from "react";



function Teste() {
  return (
    <>
    <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Pontos a melhorar :</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-content">
                - Preciso melhorar minha organização e planejamento de estudos.
              </span>
              <span className="timeline-content">
                - Meu foco e concentração durante os estudos podem ser aprimorados.
              </span>
              <span className="timeline-content">
                - Meu back-end precisa ser aprimorado.
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
     <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Sonhos e Objetivos Futuros :</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-content">
                - Formar na faculdade de Análise e Desenvolvimento de Sistemas.
              </span>
              <span className="timeline-content">
                - Conseguir me especializar na area de desenvolvimento.
              </span>
              <span className="timeline-content">
                - Consolidar minha empresa HDL Soluções na área de tecnologia.
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
    <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Frases e inspirações :</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-content">
                - Não importa que você vá devagar, contanto que você não pare.  Confúcio
              </span>
              <span className="timeline-content">
                - Coragem é saber o que não temer. Platão
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
    </>
  );
}

export default Teste;