import React from "react";

function Feed() {
  return (
    <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Hello World!</h2>
          <p>
            Este é o meu site onde posto sobre meu dia e projetos em andamento. Você pode acompanhar o feed aqui e ver meus projetos na aba "projetos".
          </p>
          {/* <a href="#" className="permalink">
            Saiba mais
          </a> */}
        </article>
      </div>
    </div>
  );
}

export default Feed;