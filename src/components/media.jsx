import React, { useState } from "react";



function Media() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audioElement = document.getElementById("audioPlayer");
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  return (
    <>
    <div className="content-section">
      <div className="post-list">
        <article className="post-item">
          <h2>Imagens que expressam minha identidade:</h2>
          <div className="timeline">
            <div className="timeline-item-img">
              <img className="timeline-content-img" src="/assets/code.jfif" alt="Descrição da imagem 1" />
              <img className="timeline-content-img" src="/assets/flamengo.jpeg" alt="Descrição da imagem 2" />
              <img className="timeline-content-img" src="/assets/universo.jpg" alt="Descrição da imagem 3" />
              <img className="timeline-content-img" src="/assets/controle.webp" alt="Descrição da imagem 4" />
            </div>
          </div>
        <div className="music-player mt-8 p-4 bg-gray-800 rounded-lg">
              <h3 className="text-white mb-4">Minha Musica Favorita</h3>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={togglePlay}
                  className="botton-player bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none"
                >
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <audio id="audioPlayer" className="w-full" controls>
                  <source src="/assets/echoes.mp3" type="audio/mp3" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Media;