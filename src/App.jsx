import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Instagram, Atom,  Link as LinkIcon } from "lucide-react";
import Feed from "./components/Feed";
import About from "./components/About";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <div className="header-banner">
            <h1> Code is Poetry </h1>
          </div>

          <a
            href="https://www.instagram.com/davydsonmaciel/"
            target="_blank"
            rel="noopener noreferrer"
            className="follow-button"
          >
            <Instagram size={16} /> Follow
          </a>

          <div className="profile-section">
            <img src='/assets/foto-perfil.png' alt="Davydson Maciel" className="profile-image" />
            <h1 className="profile-name">
             Davydson Maciel  <Atom  size={20} color="#ff1493" />
            </h1>
            <p className="profile-tagline">
              Vamos criar algo juntos  {" "}
            </p>
            <p className="profile-bio">
              Fullstack developer apaixonado por criar experiências digitais
              incríveis!
            </p>
            <div className="profile-meta">
              
              <a
                href="https://linkme.bio/davydsonmr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon size={16} /> Contato
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
              Feed
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
            
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/about" element={<About />} />
            <Route path="/content" element={<Content />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
