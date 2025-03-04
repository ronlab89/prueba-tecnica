# Backend API - Gestión de Productos y Carrito de Compras

Este proyecto es una API RESTful desarrollada con **NestJS** que permite gestionar productos y carritos de compras. La API está diseñada para ser escalable, modular y fácil de usar.

---

## Índice

- [Características](#características)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del servidor](#ejecución-del-servidor)
- [Endpoints disponibles](#endpoints-disponibles)
- [Documentación de Swagger](#documentación-de-swagger)
- [Estructura del proyecto](#estructura-del-proyecto)

---

## Características

- **Gestión de productos**: Crea, lee, actualiza y elimina productos.
- **Gestión de carritos**: Agrega, lee, actualiza y elimina productos en el carrito de compras.
- **Documentación interactiva**: Usa Swagger para explorar y probar los endpoints.
- **Servidor**: Ejecuta la API en el puerto `4000`.
- **Rutas principales**:
  - `/api/v1/products`: Endpoints para productos.
  - `/api/v1/cart`: Endpoints para el carrito de compras.

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 18 o superior.
- **npm** o **yarn**: Para instalar las dependencias.
- **NestJS CLI**: Instala globalmente con:

```bash
  npm install -g @nestjs/cli`.
```

---

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/backend-api.git
   cd backend-api
   ```
2. Instala dependencias:
   ```bash
   npm install
   yarn install
   ```

---

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
ORIGIN=http://localhost:5173
PORT=4000
```

Este archivo contiene las variables de entorno necesarias para la configuración del servidor.

---

## Ejecución del servidor

Para ejecutar el servidor, sigue estos pasos:

1. Inicia el servidor en modo desarrollo:
   ```bash
   npm run start:dev
   yarn start:dev
   ```
2. El servidor estará disponible en `http://localhost:4000`.
3. Para iniciar el servidor en modo producción, ejecuta:

   ```bash
   npm run build
   npm run start:prod

   yarn build
   yarn start:prod
   ```

---

## Endpoints disponibles

### Productos

| Método   | URL                    | Descripción                    |
| -------- | ---------------------- | ------------------------------ |
| `POST`   | `/api/v1/products`     | Crea un nuevo producto.        |
| `GET`    | `/api/v1/products`     | Encuentra todos los productos. |
| `GET`    | `/api/v1/products/:id` | Encuentra un producto por id.  |
| `PATCH`  | `/api/v1/products/:id` | Actualiza un producto.         |
| `DELETE` | `/api/v1/products/:id` | Elimina un producto.           |

### Carrito de compras

| Método   | URL                | Descripción                    |
| -------- | ------------------ | ------------------------------ |
| `POST`   | `/api/v1/cart`     | Crea un nuevo producto.        |
| `GET`    | `/api/v1/cart`     | Encuentra todos los productos. |
| `GET`    | `/api/v1/cart/:id` | Encuentra un producto por id.  |
| `PATCH`  | `/api/v1/cart/:id` | Actualiza un producto.         |
| `DELETE` | `/api/v1/cart/:id` | Elimina un producto.           |

---

## Documentación de Swagger

La documentación de Swagger está disponible en `http://localhost:4000/api`.

---

## Estructura del proyecto

Este proyecto sigue una estructura modular típica de NestJS:

src/
├── products/ # Módulo de productos
│ ├── products.controller.ts
│ ├── products.service.ts
│ ├── dto/ # DTOs para validación
│ └── data/ # Datos fijos (productos iniciales)
├── cart/ # Módulo de carrito
│ ├── cart.controller.ts
│ ├── cart.service.ts
│ └── dto/ # DTOs para validación
├── app.controller.ts  
├── app.service.ts  
├── app.module.ts # Módulo principal
└── main.ts # Punto de entrada de la aplicación

---

### Licencia

Este proyecto está licenciado bajo licencia MIT. Para más información, consulta el archivo [LICENSE](LICENSE).
