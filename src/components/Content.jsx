import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

function Content() {
  const [filter, setFilter] = useState("todos");

  const posts = [
    {
      title: "Calculadora de IMC",
      tec: "React",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/Calculadora-IMC-React",
    },
    {
      title: "Calculadora em Typescript",
      tec: "Typescript",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/Calculadora-em-Typescript",
    },
    {
      title: "Card de apresentação",
      tec: "HTML, CSS, JAVASCRIPT",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/Card-Apresentacao",
    },
    {
      title: "To-Do-List",
      tec: "HTML, CSS, JAVASCRIPT",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/to-do-list",
    },
    {
      title: "Jogo da memória",
      tec: "HTML, CSS, JAVASCRIPT",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/memory-game",
    },
    {
      title: "Cronograma de estudos com timer e gerador de perguntas",
      tec: "HTML, CSS, JAVASCRIPT",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/Cronograma-Estudos",
    },
    {
      title: "Sistema de tarefas Kanban",
      tec: "HTML, CSS, JAVASCRIPT",
      level: "Iniciante",
      link: "https://github.com/davydsonmr1/SistemaTarefasKanban",
    },
    {
      title: "Dashboard de finanças pessoais",
      tec: "REACT , TAILWIND CSS",
      level: "Intermediario",
      link: "https://github.com/davydsonmr1/project-react-app-finan-as",
    },
    {
      title: "Jogo da Velha",
      tec: "Javascript",
      level: "Intermediario",
      link: "https://github.com/davydsonmr1/jogo-da-velha",
    },
    {
      title: "Sistema de estoque de padaria",
      tec: "Javascript",
      level: "Intermediario",
      link: "https://github.com/davydsonmr1/Sistema-estoque-padaria",
    },
    {
      title: "Sistema de gerenciamento de academia",
      tec: "Javascript",
      level: "Intermediario",
      link: "https://github.com/davydsonmr1/sistema-teste-academia",
    },

  ];

  const filteredPosts = posts.filter((post) => {
    if (filter === "todos") return true;
    return post.level.toLowerCase() === filter;
  });

  return (
    <div className="content-section">
      <div className="filter-h1">
        <h2>Projetos recentes</h2>
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediario</option>
          <option value="avançado">Avançado</option>
        </select>
      </div>
      <div className="post-list">
        {filteredPosts.map((post, index) => (
          <article key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.tec}</p>
            <a href={post.link} target="blank" className="permalink">
              Saiba mais
            </a>
          </article>
        ))}
      </div>
      {/* <a href="#" className="permalink">Ver mais Projetos</a> */}
    </div>
  );
}

export default Content;
