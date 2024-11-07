import React from 'react';
import './HomePage.css';

function HomePage({ onLogin }) {
  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="content">
        <h1>ImpulsaColombia</h1>
        <p>Plataforma para conectar emprendedores con patrocinadores de proyectos innovadores en Colombia</p>
        <button onClick={onLogin} className="login-button">Ingresar</button>
      </div>
    </div>
  );
}

export default HomePage;
