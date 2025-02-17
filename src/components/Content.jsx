import React from 'react';

function Content() {
  const posts = [
    {
      title: "Sistema de gerenciamento de Academias",
      tec: "HTML, CSS, JAVASCRIPT",
      link: "https://github.com/davydsonmr1/sistema-teste-academia"
    },
    {
      title: "Sistema de gerenciamento de estoque de uma padaria",
      tec: "HTML, CSS, JAVASCRIPT",
      link: "https://github.com/davydsonmr1/Sistema-estoque-padaria"
    },
    {
      title: "Dashboard de finanças pessoais",
      tec: "REACT , TAILWIND CSS",
      link: "https://github.com/davydsonmr1/project-react-app-finan-as"
    }
    
  ];

  return (
    <div className="content-section">
      
      
      <h2>Projetos recentes</h2>
      <div className="post-list">
        {posts.map((post, index) => (
          <article key={index} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.tec}</p>
            <a href={post.link} target='blank' className="permalink">Saiba mais</a>
            
            
          </article>
        ))}
      </div>
      {/* <a href="#" className="permalink">Ver mais Projetos</a> */}
    </div>
  );
}

export default Content;