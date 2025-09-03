import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Instagram, Atom, Link as LinkIcon, Sun, Moon } from "lucide-react";
import Feed from "./components/Feed";
import About from "./components/About";
import Content from "./components/Content";
import Teste from "./components/teste";
import Media from "./components/media"; 

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="header-banner">
            <h1> Code is Poetry </h1>
          </div>

          <div className="follow-section">
            <a
              href="https://www.instagram.com/davydsonmaciel/"
              target="_blank"
              rel="noopener noreferrer"
              className="follow-button"
            >
              <Instagram size={16} /> Follow
            </a>
            <button className="theme-toggle-button" onClick={toggleTheme}>
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          <div className="profile-section">
            <img src='/assets/503615364_17971279187860441_8223247184359940490_n.jpg' alt="Davydson Maciel" className="profile-image" />
            <h1 className="profile-name">
             Davydson Maciel  <Atom  size={20} color="#ff1493" />
            </h1>
            <p className="profile-tagline">
              Vamos criar algo juntos  {" "}
            </p>
            <p className="profile-bio">
              Programador de Sistemas I com foco em PowerBuilder e Oracle SQL. <br />
              Atualmente no Squad da Voltz, atuando com Typescript, NestJS e NextJS.
              Cursando Tecnologia em Análise e Desenvolvimento de Sistemas na Unifran/Cataguases e o curso técnico em Desenvolvimento de Sistemas pelo SENAI, em parceria com o Grupo Energisa. Busco continuamente aprimorar minhas habilidades em programação e desenvolvimento de software, com experiência prática em criação de interfaces modernas e responsivas.
            </p>
            <div className="profile-meta">
              
              <a
                href="https://www.linkedin.com/in/davydsonmaciel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon size={16} /> Linkedin
              </a>
              
            </div>
          </div>

          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Linha do Tempo
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Sobre
            </NavLink>
            <NavLink
              to="/content"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projetos
            </NavLink>
            <NavLink
              to="/teste"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Testes e Reflexões
            </NavLink>
            <NavLink
              to="/media"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Mídia
            </NavLink>
            
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
            <Route path="/teste" element={<Teste />} />
            <Route path="/media" element={<Media />} />
            </Routes>
          </main>
      </div>
    </Router>
  );
}

export default App;
