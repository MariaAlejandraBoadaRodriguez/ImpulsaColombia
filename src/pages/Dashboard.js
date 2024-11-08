import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProyectCard';
import Description from '../components/Description';
import Convocatorias from '../components/Convocatorias'

function Dashboard() {
  const projects = [
    { id: 1, name: 'Proyecto de Conservación de Flora Local', description: 'Un proyecto dedicado a la preservación y documentación de especies de flora autóctona. A través de la fotografía y el registro en video, buscamos sensibilizar a la comunidad sobre la importancia de conservar la biodiversidad en nuestro entorno.' },
    { id: 2, name: 'Documental de Vida Silvestre', description: 'Una serie de videos que exploran el comportamiento de diversas especies de animales en su hábitat natural. Este proyecto pretende educar a las personas sobre la fauna local y promover prácticas que protejan sus ecosistemas.' },
    { id: 3, name: 'Proyecto de Fomento a la Lectura en Espacios Abiertos', description: 'Este proyecto promueve el hábito de la lectura al aire libre, invitando a las personas a disfrutar de la literatura en contacto con la naturaleza. Con bibliotecas móviles y espacios de lectura en parques y playas, buscamos acercar la lectura a todos.' },
    { id: 4, name: 'Deporte y Comunidad: Tenis para Todos', description: 'Una iniciativa que busca fomentar el deporte y el bienestar a través del tenis en comunidades locales. Ofrecemos clases y acceso gratuito a canchas de tenis, promoviendo la actividad física y la integración social.' },
    { id: 5, name: 'Fútbol Comunitario: Formación y Oportunidades', description: 'Un proyecto dedicado a promover el fútbol como herramienta de integración social y desarrollo personal en jóvenes de comunidades vulnerables. A través de entrenamientos y programas de formación, buscamos crear un ambiente de inclusión y oportunidades.' },
    { id: 6, name: 'Cultura del Café: Del Grano a la Taza', description: 'Esta iniciativa explora y celebra la tradición cafetera, ofreciendo talleres sobre el proceso de preparación y catas de café. El objetivo es educar y crear conciencia sobre la cadena de valor del café, apoyando a los productores locales y fomentando el consumo responsable.' },
    { id: 7, name: 'Agricultura Sostenible y Tecnologías Verdes', description: 'Proyecto que muestra prácticas de agricultura sostenible, desde la preparación del suelo hasta la cosecha. A través de la tecnología, buscamos optimizar el uso de recursos y minimizar el impacto ambiental en la producción de alimentos.' },
    { id: 8, name: 'Alimentación Saludable y Tradiciones Culinarias', description: 'Un recorrido visual por las tradiciones culinarias locales, con un enfoque en la preparación de alimentos saludables y sostenibles. Este proyecto busca fomentar una conexión más profunda con la comida y promover hábitos alimenticios saludables en la comunidad.' },
    { id: 9, name: 'Proyecto de Conservación de Flora Local', description: 'Un proyecto dedicado a la preservación y documentación de especies de flora autóctona. A través de la fotografía y el registro en video, buscamos sensibilizar a la comunidad sobre la importancia de conservar la biodiversidad en nuestro entorno.' },
    { id: 10, name: 'Documental de Vida Silvestre', description: 'Una serie de videos que exploran el comportamiento de diversas especies de animales en su hábitat natural. Este proyecto pretende educar a las personas sobre la fauna local y promover prácticas que protejan sus ecosistemas.' },
    { id: 11, name: 'Proyecto de Fomento a la Lectura en Espacios Abiertos', description: 'Este proyecto promueve el hábito de la lectura al aire libre, invitando a las personas a disfrutar de la literatura en contacto con la naturaleza. Con bibliotecas móviles y espacios de lectura en parques y playas, buscamos acercar la lectura a todos.' },
    { id: 12, name: 'Deporte y Comunidad: Tenis para Todos', description: 'Una iniciativa que busca fomentar el deporte y el bienestar a través del tenis en comunidades locales. Ofrecemos clases y acceso gratuito a canchas de tenis, promoviendo la actividad física y la integración social.' },
    { id: 13, name: 'Fútbol Comunitario: Formación y Oportunidades', description: 'Un proyecto dedicado a promover el fútbol como herramienta de integración social y desarrollo personal en jóvenes de comunidades vulnerables. A través de entrenamientos y programas de formación, buscamos crear un ambiente de inclusión y oportunidades.' },
    { id: 14, name: 'Cultura del Café: Del Grano a la Taza', description: 'Esta iniciativa explora y celebra la tradición cafetera, ofreciendo talleres sobre el proceso de preparación y catas de café. El objetivo es educar y crear conciencia sobre la cadena de valor del café, apoyando a los productores locales y fomentando el consumo responsable.' },
  ];

  const [, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    console.log("Selected Project:", project); // Verificar si el proyecto seleccionado es el correcto
    setSelectedProject(project);
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '120px' }}>
        <Description />
      </div>
      <div style={{ textAlign: 'center' }}>
        <h1>Proyectos Activos</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => handleProjectSelect(project)} />
        ))}
      </div>
      
      <div style={{marginTop: '110px'  }}>
        <Convocatorias />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
