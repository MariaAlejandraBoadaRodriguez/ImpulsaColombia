import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Asegúrate de importar el archivo CSS

function Header() {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1>ImpulsaColombia</h1>
      <div className="header-buttons">
        <button className="custom-button-h" onClick={() => navigate('/ingresar')}>Emprendedores</button>
        <button className="custom-button-h" onClick={() => navigate('/patrocinadores')}>Patrocinadores</button>
      </div>
    </header>
  );
}

export default Header;
