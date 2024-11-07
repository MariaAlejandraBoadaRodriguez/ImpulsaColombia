import React from 'react';
import './Reports.css';

function Reports() {
  return (
    <div className="reports-container">
      <h1>Informe de Donaciones</h1>
      <h2>Proyecto de Conservación de Flora Local</h2>
      <p>¡Gracias por tu donación! Con tu ayuda, estamos haciendo grandes cosas en el Proyecto de Conservación de Flora Local.</p>
      
      <h3>Actividades Realizadas en el Proyecto</h3>
      <ul className="activities-list">
        <li>Reforestación de áreas degradadas</li>
        <li>Educación ambiental para comunidades locales</li>
        <li>Monitoreo y conservación de especies en peligro</li>
        <li>Creación de jardines botánicos de flora nativa</li>
        <li>Investigación sobre especies autóctonas</li>
        <li>Programas de voluntariado para reforestación</li>
        <li>Creación de senderos ecológicos educativos</li>
        <li>Publicación de informes de biodiversidad</li>
        <li>Talleres de identificación de plantas medicinales</li>
        <li>Restauración de ecosistemas afectados</li>
      </ul>

      <h3>Resumen de Donaciones</h3>
      <div className="charts-container">
        <div className="chart">
          <img src="/images/foto_1.jpg" alt="Gráfico de donaciones por mes" className="chart-image" />
        </div>
        <div className="chart">
          <img src="/images/foto_2.jpg" alt="Objetivo de donaciones" className="chart-image" />
        </div>
        <div className="chart">
          <img src="/images/foto_3.jpg" alt="Top donantes del proyecto" className="chart-image" />
        </div>
        <div className="chart">
          <img src="/images/foto_4.jpg" alt="Comparativa de donaciones año a año" className="chart-image" />
        </div>
      </div>
    </div>
  );
}

export default Reports;
