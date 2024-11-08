import React, { useState } from "react";
import "./Contact.css";

function Contact({ projectName, showModal, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado", formData);
    setSubmitted(true);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Contactar sobre {projectName}</h2>
        {submitted ? (
          <p>
            ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
          </p>
        ) : (
          <form
            onSubmit={handleFormSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              name="fullName"
              placeholder="Nombre Completo"
              value={formData.fullName}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Número de Teléfono"
              value={formData.phone}
              onChange={handleFormChange}
              required
            />
            <textarea
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleFormChange}
              required
              style={{ minHeight: "80px" }}
            />
            <button type="submit" className="custom-button">
              Enviar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
