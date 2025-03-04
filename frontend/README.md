# Frontend - Gestión de Productos y Carrito de Compras

Este es el frontend de una aplicación que permite gestionar productos y un carrito de compras. Está construido con **ReactJS** utilizando **Vite** como herramienta de construcción, **TailwindCSS** para estilos, **Zustand** para la gestión de estado y **Sonner** para notificaciones. La aplicación consume una API RESTful desarrollada con NestJS.

---

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características Principales](#características-principales)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Ejecución](#instalación-y-ejecución)
- [Uso de la Aplicación](#uso-de-la-aplicación)

---

## Descripción del Proyecto

El frontend de esta aplicación permite a los usuarios interactuar con una API backend para:

1. Ver una lista de productos disponibles.
2. Agregar productos al carrito de compras.
3. Visualizar los productos agregados al carrito en tiempo real.
4. Recibir notificaciones cuando se realizan acciones importantes (como agregar un producto al carrito).

La interfaz está diseñada para ser simple, intuitiva y responsive, asegurando una experiencia de usuario fluida.

---

## Características Principales

- **Interfaz Interactiva**: Diseño limpio y moderno con **TailwindCSS**.
- **Gestión de Estado Global**: Usa **Zustand** para manejar el estado del carrito.
- **Notificaciones**: Implementa **Sonner** para mostrar mensajes de éxito o error.
- **Consumo de API**: Usa **Axios** para interactuar con el backend.
- **Responsive Design**: Compatible con dispositivos móviles y escritorio.

---

## Tecnologías Utilizadas

- **Vite**: Herramienta de construcción rápida para React.
- **ReactJS**: Biblioteca para construir interfaces de usuario.
- **TailwindCSS**: Framework CSS utilitario para estilizar componentes.
- **Zustand**: Biblioteca ligera para la gestión de estado global.
- **Sonner**: Biblioteca para mostrar notificaciones toast.
- **Axios**: Cliente HTTP para consumir la API backend.
- **React Router**: Manejo de rutas en la aplicación.

---

## Estructura del Proyecto

frontend/
├── public/ # Archivos públicos (logo, etc.)
├── src/
│ ├── components/ # Componentes reutilizables
│ │ ├── CardProduct.jsx # Componente para mostrar un producto
│ │ ├── Loader.jsx # Muestra un indicador de carga
│ │ └── Navbar.jsx # Componente para mostrar la barra de navegación
│ ├── data/ # Datos de ejemplo
│ │ └── products.json # Lista de productos
│ ├── icons/ # Iconos de la aplicación
│ ├── services/ # Servicios para consumir la API
│ │ └── cartService.js # Cliente Axios para el carrito
│ │ └── productService.js # Cliente Axios para los productos
│ ├── utils/ # Utilidades para el proyecto
│ │ └── formatter.js # Formateador de números
│ ├── layouts/ # Componentes de diseño para la aplicación
│ │ └── LayoutPublic.jsx # Componente para la página principal
│ ├── store/ # Gestión de estados con Zustand
│ └── main.jsx # Punto de entrada de la aplicación
├── tailwind.config.js # Configuración de TailwindCSS
├── vite.config.js # Configuración de Vite
└── package.json # Dependencias y scripts

---

## Instalación y Ejecución

### Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 18 o superior.
- **npm** o **yarn**: Para instalar dependencias.

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ronlab89/prueba-tecnica.gitgit
   cd frontend
   ```

2. Instala las dependencias e inicia la aplicación en modo desarrollo:

   ```bash
   npm install
   npm run dev
   or
   yarn install
   yarn dev
   ```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
VITE_API_URL=http://localhost:4000/api/v1
```

4. La aplicación se ejecutará en `http://localhost:5173.`

---

## Uso de la Aplicación

### Pantalla Principal

- Lista de productos:

  - Muestra todos los productos disponibles obtenidos desde la API.
  - Cada producto tiene un botón para cambiar la cantidad y otro boton "Agregar al Carrito".

- Notificaciones:
  - Muestra una notificación cuando se agrega un producto al carrito.
  - Muestra una notificación cuando se elimina un producto del carrito.

### Carrito de Compras

- Visualización del carrito:
  - Muestra los productos agregados al carrito.
  - Calcula automáticamente el total del carrito.

### Presupuesto

- Selección del presupuesto:
  - Muestra una lista de productos disponibles para el presupuesto.
  - El usuario ingresa el presupuesto que tiene disponible.
  - Click en el botón "Calcular" para obtener la mejor combinación de productos.
  - Muestra la mejor combinación de productos para el presupuesto con el total calculado.
