import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Donate.css';

function Donate() {
  const [donationStatus, setDonationStatus] = useState('');
  const navigate = useNavigate();

  const handleDonate = (event) => {
    event.preventDefault();
    setDonationStatus('¡Tu donación fue exitosa!');
    setTimeout(() => {
      navigate('/reports'); // Redirige a la página de informes después de 2 segundos
    }, 400);
  };

  return (
    <div className="donate-container">
      <h1>Página de Donaciones</h1>
      <p>Por favor, ingresa tus datos para realizar una donación.</p>
      <form onSubmit={handleDonate} className="donation-form">
        <label>
          Nombre Completo:
          <input type="text" name="name" required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" required />
        </label>
        <label>
          Número de Tarjeta:
          <input type="text" name="cardNumber" maxLength="16" required />
        </label>
        <label>
          Fecha de Expiración:
          <input type="text" name="expiry" placeholder="MM/AA" maxLength="5" required />
        </label>
        <label>
          CVV:
          <input type="text" name="cvv" maxLength="3" required />
        </label>
        <button type="submit">Donar</button>
      </form>
      {donationStatus && <p className="donation-status">{donationStatus}</p>}
    </div>
  );
}

export default Donate;
