import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa el hook useNavigate
import './RegisterLogin.css';

const Register_Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    sponsorMode: false,
    projectName: '',        // Nombre del proyecto
    projectImage: null,     // Imagen de portada (almacenará el archivo)
    projectDescription: '', // Descripción
    contactNumber: '',      // Número de contacto
    contactEmail: ''        // Correo de contacto
  });


  const navigate = useNavigate();  // Usa el hook useNavigate para la navegación

  // Manejar el cambio en el campo de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];  // Obtiene el primer archivo seleccionado
    if (file) {
      setFormData({
        ...formData,
        projectImage: file
      });
    }
  };

  // Eliminar la imagen seleccionada
  const handleRemoveImage = () => {
    setFormData({
      ...formData,
      projectImage: null  // Restablece la imagen a null
    });
    document.getElementById('file-upload').value = ''; // Limpia el campo de entrada de archivo
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSponsorModeChange = () => {
    setFormData({
      ...formData,
      sponsorMode: !formData.sponsorMode
    });
  };

  const handleRegister = async () => {
    try {
      // Si hay imagen, deberías enviarla a un servidor
      if (formData.projectImage) {
        const formDataToSend = new FormData();
        formDataToSend.append('image', formData.projectImage);

        // Realiza la solicitud para subir la imagen
        const response = await fetch('/upload', {
          method: 'POST',
          body: formDataToSend
        });

        if (response.ok) {
          console.log('Imagen subida exitosamente');
        } else {
          console.error('Error subiendo la imagen');
        }
      }

      // Resto de la lógica de registro
      console.log('Registrando usuario:', formData);

      // Redirigir al Dashboard
      navigate('/');
    } catch (error) {
      console.error('Error registrando usuario:', error);
    }
  };

  const handleLogin = async () => {
    try {
      console.log('Iniciando sesión con:', formData.email, formData.password);
      const userDoc = { sponsorMode: formData.sponsorMode };
      if (userDoc.sponsorMode) {
        navigate('/');  // Redirige al dashboard de patrocinador
      } else {
        navigate('/');  // Redirige al dashboard de emprendedor
      }
    } catch (error) {
      console.error('Error iniciando sesión:', error);
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const renderRegisterForm = () => (
    <>
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleInputChange}
        className="form-input"
      />
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleInputChange}
        className="form-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleInputChange}
        className="form-input"
      />

      <div className="sponsor-checkbox">
        <input
          type="checkbox"
          name="sponsorMode"
          checked={formData.sponsorMode}
          onChange={handleSponsorModeChange}
          className="checkbox-input"
        />
        <span>Registrarse como Emprendedor</span>
      </div>

      {/* Mostrar campos adicionales solo si sponsorMode está activado */}
      {formData.sponsorMode && (
        <>
          <input
            name="projectName"
            type="text"
            placeholder="Nombre del proyecto"
            value={formData.projectName}
            onChange={handleInputChange}
            className="form-input"
          />

          {/* Campo para cargar la imagen de portada */}
          <div className="image-upload-container">
            <input
              id="file-upload"  // Asignamos un ID al campo de archivo
              name="projectImage"
              type="file"
              accept="image/*"  // Asegura que solo se puedan seleccionar imágenes
              onChange={handleImageChange}
              className="form-input"
            />

            {formData.projectImage && (
              <span
                className="remove-image"
                onClick={handleRemoveImage}
              >
                &times; {/* Este es el ícono de la "X" */}
              </span>
            )}
          </div>

          <textarea
            name="projectDescription"
            placeholder="Descripción del proyecto"
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            name="contactNumber"
            type="text"
            placeholder="Número de contacto"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="form-input"
          />
          <input
            name="contactEmail"
            type="email"
            placeholder="Correo de contacto"
            value={formData.contactEmail}
            onChange={handleInputChange}
            className="form-input"
          />
        </>
      )}

      <button onClick={handleRegister} className="submit-button">
        Registrarse
      </button>
    </>
  );

  const renderLoginForm = () => (
    <>
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleInputChange}
        className="form-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formData.password}
        onChange={handleInputChange}
        className="form-input"
      />
      <button onClick={handleLogin} className="submit-button">
        Iniciar Sesión
      </button>
    </>
  );

  return (
    <div className="auth-container">
      <div className="back-button" onClick={handleGoBack}>
        ←
      </div>
      <div className="auth-form">
        <h2 className="auth-title">
          {isRegistering ? 'Registro' : 'Inicio de Sesión'}
        </h2>

        {isRegistering ? renderRegisterForm() : renderLoginForm()}

        <div className="toggle-form">
          <button
            type="button"
            onClick={() => setIsRegistering(!isRegistering)}
            className="toggle-button"
          >
            {isRegistering
              ? '¿Ya tienes una cuenta? Inicia sesión'
              : '¿No tienes una cuenta? Regístrate'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register_Login;
