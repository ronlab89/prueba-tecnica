# Proyecto Completo: API de Productos y Carrito de Compras

Este proyecto es una solución completa para gestionar productos y un carrito de compras. Incluye un **backend** desarrollado con **NestJS** y un **frontend** construido con **ReactJS**. La API permite realizar operaciones CRUD sobre productos y gestionar un carrito de compras, mientras que el frontend proporciona una interfaz interactiva para consumir esta API.

---

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Solución Implementada](#solución-implementada)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Ejecución](#instalación-y-ejecución)

---

## Descripción del Proyecto

El objetivo de este proyecto es construir una aplicación completa que permita:

1. Gestionar productos mediante una API RESTful.
2. Agregar productos a un carrito de compras.
3. Visualizar los productos agregados al carrito desde una interfaz de usuario.

La solución está dividida en dos partes principales:

- **Backend**: Una API desarrollada con NestJS que maneja productos y carritos.
- **Frontend**: Una aplicación ReactJS que consume la API para interactuar con los datos.

---

## Solución Implementada

### Backend

- **Framework**: NestJS.
- **Características**:
  - Gestión de productos con endpoints para crear, leer, actualizar y eliminar.
  - Gestión de carritos con endpoints para agregar, leer, actualizar y eliminar items.
  - Documentación interactiva con Swagger disponible en `/api`.
  - Datos iniciales cargados desde un archivo JSON para productos fijos.
- **Puerto**: El servidor se ejecuta en `http://localhost:4000`.

### Frontend

- **Framework**: ReactJS.
- **Características**:
  - Interfaz simple e intuitiva para interactuar con la API.
  - Lista de productos disponibles con botones para agregar al carrito.
  - Visualización del carrito actualizado en tiempo real.
  - Diseño responsive y limpio.
- **Puerto**: La aplicación frontend se ejecuta en `http://localhost:5173`.

---

## Tecnologías Utilizadas

### Backend

- **NestJS**: Framework robusto y escalable para construir APIs.
- **TypeScript**: Tipado estático para mejorar la seguridad y mantenibilidad del código.
- **Swagger**: Herramienta para documentar y probar la API.
- **class-validator**: Validación de datos entrantes en DTOs.

### Frontend

- **ReactJS**: Biblioteca para construir interfaces de usuario.
- **Axios**: Cliente HTTP para consumir la API.
- **React Router**: Manejo de rutas en la aplicación.
- **TailwindCSS**: Framework CSS de código abierto para estilizar la interfaz.
- **Zustand**: Estado global para manejar el estado de la aplicación.

---

## Instalación y Ejecución

En cada carpeta del proyecto, se proporciona un archivo `README.md` con instrucciones para instalar y ejecutar el backend y el frontend del proyecto.
