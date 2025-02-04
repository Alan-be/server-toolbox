# 🛠️ Full Stack Challenge - API Backend

Este es el backend del challenge técnico. Se trata de una API REST desarrollada con **Node.js** y **Express.js**, que obtiene, procesa y reformatea datos provenientes de una API externa.

---

## 📌 Descripción

La API expone un endpoint que permite obtener archivos en formato **CSV**, procesarlos y devolver la información en formato **JSON** estructurado.

### 🔧 Tecnologías utilizadas:

- **Node.js 14**
- **Express.js**
- **Axios**
- **Mocha + Chai (Testing)**
- **CORS**
- **StandardJS (Estilo de código)**

---

## 🚀 Instalación y ejecución

1. Clonar el repositorio:
   - git clone (https://github.com/Alan-be/server-toolbox.git)
   - cd server-toolbox
2. Instalar dependencias:
   - npm install
3. Iniciar el servidor:
- npm start
4. Ejecutar los test:
   - npm test
## 📌 Endpoints disponibles
1. GET /files/data
  - Obtiene la lista de archivos desde la API externa.
  - Descarga cada archivo CSV.
  - Filtra y formatea los datos, eliminando filas con errores.
  - Responde con un JSON estructurado.
2. GET /files/list
   - Obtiene una lista de archivos desde la API externa

##🔥 Extras
- No requiere variables de entorno.
- Código validado con StandardJS.
- Tests automatizados con Mocha + Chai.


