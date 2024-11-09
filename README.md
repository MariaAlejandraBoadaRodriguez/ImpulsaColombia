# ImpulsaColombia

ImpulsaColombia es una plataforma dedicada a conectar emprendedores y proyectos innovadores en Colombia con patrocinadores. La plataforma permite explorar una variedad de proyectos de impacto social, ambiental y cultural, proporcionando un medio para que los patrocinadores puedan contribuir a estos proyectos mediante donaciones.

## Tabla de Contenidos
- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Home Page**: Página principal con una breve descripción de la plataforma y un botón para ingresar.
- **Registro e Inicio de Sesión**: Funcionalidad para que los usuarios se registren como patrocinadores o emprendedores.
- **Panel de Control (Dashboard)**: Muestra una lista de proyectos activos con opciones para visualizar, contactar y donar.
- **Donaciones**: Página dedicada para realizar donaciones a los proyectos.
- **Reportes**: Sección con gráficos e indicadores de las donaciones realizadas, mostrando el progreso y el objetivo de financiamiento.
- **Contacto**: Modal de contacto para que los usuarios puedan enviar mensajes a los responsables de los proyectos.
  
## Instalación

Para ejecutar este proyecto de manera local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MariaAlejandraBoadaRodriguez/ImpulsaColombia.git
2. Accede al directorio del proyecto:
   cd ImpulsaColombia
3. Instala las dependencias:
   npm install
4. Inicia el servidor de desarrollo:
   npm start
   
El proyecto estará disponible en http://localhost:3000.

# Uso

- **Ingresar**: En la página principal, haz clic en "Ingresar" para acceder al sistema.
- **Registrar un Proyecto**: Los emprendedores pueden registrarse y agregar detalles de su proyecto, incluyendo nombre, descripción y una imagen de portada.
- **Explorar Proyectos**: Una vez autenticado, accede al dashboard para ver proyectos activos. Haz clic en "Contactar" para enviar un mensaje al administrador del proyecto o en "Donar" para realizar una donación.
- **Reportes**: Después de una donación, puedes acceder a la sección de reportes para ver los indicadores de financiamiento.

# Estructura del Proyecto

- `App.js`: Configuración de las rutas principales de la aplicación, con navegación basada en el estado de inicio de sesión del usuario.
- `HomePage.js`: Página de bienvenida con una breve introducción y botón de ingreso.
- `Dashboard.js`: Página principal para usuarios autenticados, mostrando una lista de proyectos activos.
- `ProjectCard.js`: Componente de tarjeta para mostrar cada proyecto, con opciones para contactar, donar y ver una descripción.
- `Contact.js`: Modal de contacto para enviar mensajes a los administradores de proyectos.
- `Donate.js`: Página para realizar donaciones con un formulario de datos de pago.
- `Reports.js`: Visualización de gráficos de donaciones e indicadores económicos.
- `RegisterLogin.js`: Página de registro e inicio de sesión con opciones para agregar detalles del proyecto.

# Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia la aplicación en modo de desarrollo.
- `npm run build`: Genera una versión optimizada para producción en la carpeta `build`.
- `npm run deploy`: Despliega el proyecto en GitHub Pages.

# Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para el enrutamiento dentro de la aplicación.
- **Recharts**: Biblioteca para gráficos, utilizada en la sección de reportes.
- **CSS**: Para el diseño y estilo de los componentes.

# Contribuciones

Las contribuciones son bienvenidas. Para realizar cambios, por favor, abre un issue o realiza un pull request.

# Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
