import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
  const [showDescription, setShowDescription] = useState(false);
  const navigate = useNavigate();

  // Ruta del video basado en el ID del proyecto
  const videoPath = `/videos/${project.id}.mp4`;

  return (
    <div className="content-card">
      <div className="flip-card">
      <div className={`flip-card-inner ${showDescription ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <h2>{project.name}</h2>
          <video controls width="300" height="200">
            <source src={videoPath} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
          <div style={{ marginTop: '10px' }}>
            <button className="custom-button" onClick={() => navigate('/contact')}>Contactar</button>
            <button className="custom-button" onClick={() => navigate('/donate')}>Donar</button>
            <button className="custom-button" onClick={() => setShowDescription(true)}>Abstrac</button>
          </div>
        </div>
        <div className="flip-card-back">
          <p>{project.description}</p>
          <button className="custom-button" onClick={() => setShowDescription(false)}>Volver</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
