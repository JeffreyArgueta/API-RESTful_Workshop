# API RESTful Workshop 🚀  
**Construcción de una API REST con Node.js y MySQL**

¡Bienvenido al repositorio del taller **"Construyendo una API REST con Node.js y MySQL"**! 🎯 Aquí aprenderás a desarrollar una API funcional desde cero, aplicando buenas prácticas de seguridad, optimización y modularidad.

## ℹ️ Acerca de  
Este repositorio contiene el material del taller **"Construyendo una API REST con Node.js y MySQL"**, enfocado en desarrollo backend, seguridad y optimización de rendimiento. 🚀

## 📌 Objetivos del Taller  
En este workshop, los participantes aprenderán a:  
- Configurar un entorno de desarrollo backend con **Node.js** y **MySQL**.  
- Diseñar y gestionar una base de datos utilizando **Sequelize**.  
- Implementar endpoints REST siguiendo buenas prácticas.  
- Aplicar medidas de **seguridad y autenticación con JWT**.  
- Optimizar el rendimiento con **Redis caching** y manejo eficiente de conexiones.  

## 🛠️ Tecnologías Utilizadas  
Este proyecto está construido con:  
- **Node.js** – Plataforma de desarrollo backend.  
- **Express.js** – Framework ligero para Node.js.  
- **MySQL** – Base de datos relacional.  
- **Sequelize** – ORM para Node.js y bases de datos SQL.  
- **JWT** – Autenticación segura con JSON Web Tokens.  
- **Redis** – Caché para optimización de consultas.  
- **express-validator** – Validación de datos en las solicitudes.  
- **Winston** – Sistema de logging para monitoreo.  

## ⚙️ Instalación  
Sigue estos pasos para configurar el proyecto en tu máquina:  

1️⃣ Clona el repositorio:  
```sh
git clone https://github.com/JeffreyArgueta/API-RESTful_Workshop.git
cd API-RESTful_Workshop
```

2️⃣ Instala las dependencias:
```sh
npm install
```

3️⃣ Configura las variables de entorno en un archivo .env. Ejemplo:
```sh
DB_HOST=localhost
DB_USER=root
DB_PASS=tu_contraseña
JWT_SECRET=clave_secreta
REDIS_HOST=localhost
```

4️⃣ Inicia el servidor:
```sh
npm start
```

¡Listo! La API ahora está corriendo en **http://localhost:3000** 🚀

## 🖥️ Endpoints Disponibles
Aquí algunos de los endpoints clave:

| Método | Ruta | Descripción |
|--------|------|------------|
| **GET** | `/users` | Obtiene todos los usuarios |
| **POST** | `/users` | Crea un nuevo usuario |
| **PUT** | `/users/:id` | Actualiza un usuario |
| **DELETE** | `/users/:id` | Elimina un usuario |

### 📝 Ejemplo de solicitud POST:
```json
{
   "name": "Juan Pérez",
   "email": "juan@example.com",
   "password": "securepassword123"
}
```

## 🔐 Seguridad y Autenticación
Este proyecto implementa JWT para la autenticación de usuarios y define reglas de CORS para el acceso seguro a la API.

## 👨‍🏫 Créditos
Taller presentado por **Jeffrey Argueta**, apasionado por el desarrollo backend, la escalabilidad y la enseñanza técnica. 🎓

## 📜 Licencia
Este proyecto está bajo la MIT License – ¡Siéntete libre de usarlo y mejorarlo!

## 🏆 Agradecimientos  
Este proyecto no habría sido posible sin el apoyo y la colaboración de mis compañeros. Un enorme agradecimiento a:  

- **Crhistopher Gutierrez** – Por su contribución en la base de datos para la actividad y resolución de la api.  
- **Christopher Álvarez** – Por su apoyo en ser el guía espiritual del grupo.
- **Nayeli Guzmán** – Por compartir conocimientos y ayudar a refinar el contenido del taller.
- **Carlos Chavarría** – Por su trabajo en optimización de rendimiento y estructuración de código.

Gracias a todos por ser parte de este proyecto y por su compromiso en crear una API REST sólida y bien estructurada. 🚀  
