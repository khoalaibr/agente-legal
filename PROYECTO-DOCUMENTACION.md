# PROYECTO-DOCUMENTACION.md

## Fase 1: Configuración Inicial del Proyecto (Corregida)

### Decisión Arquitectónica: Tailwind CSS v3

Se decidió utilizar **Tailwind CSS v3** en lugar de la v4 (alfa).
**Razón:** La v3 es la versión estable, madura y con soporte de la comunidad. Garantiza un entorno de desarrollo predecible y robusto, que es un requisito clave para este proyecto.

### Comandos de Instalación

1.  **Crear el proyecto con Vite:**
    ```bash
    npm create vite@latest mi-app-react -- --template react-ts
    cd mi-app-react
    ```

2.  **Instalar dependencias de producción:**
    ```bash
    npm install react-router-dom @reduxjs/toolkit react-redux axios @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome clsx tailwind-merge class-variance-authority
    ```

3.  **Instalar dependencias de desarrollo (Tailwind v3):**
    ```bash
    npm install -D tailwindcss@^3 postcss autoprefixer
    ```

4.  **Inicializar Tailwind CSS:**
    ```bash
    npx tailwindcss init -p
    ```

### Fragmentos de Código de Configuración

* **`tailwind.config.js`**:
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

* **`postcss.config.js`**:
    ```javascript
    export default {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    }
    ```

* **`src/index.css`**:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
## Fase 2: Arquitectura y Estructura de Carpetas

Se define y crea la estructura de directorios del proyecto, basada en una clara separación de responsabilidades.

### Estructura de Directorios en `/src`

* [cite_start]**/app/**: Configuración central de la app (tienda Redux).
* [cite_start]**/assets/**: Recursos estáticos (imágenes, fuentes).
* [cite_start]**/components/**: Componentes de React.
    * [cite_start]**ui/**: Componentes atómicos y reutilizables (Button, Input)[cite: 12].
    * [cite_start]**layout/**: Estructura de páginas (Header, Sidebar).
    * [cite_start]**features/**: Componentes específicos de una funcionalidad[cite: 15].
* [cite_start]**/features/**: Lógica de estado (slices de Redux).
* [cite_start]**/hooks/**: Hooks personalizados de React[cite: 19].
* [cite_start]**/pages/**: Componentes de página completa asociados a rutas.
* [cite_start]**/services/**: Lógica de comunicación con APIs[cite: 24].
* [cite_start]**/styles/**: Archivos de estilos globales. (aqui muevo index.css)

### Comandos de Implementación

1.  **Crear directorios:**
    ```bash
    mkdir -p src/app src/assets src/components/ui src/components/layout src/components/features/chat src/features/chat src/hooks src/pages src/services src/styles
    ```
2.  **Limpiar archivos iniciales:**
    ```bash
    rm src/App.css src/assets/react.svg
    ```
## Fase 3: Migración de Diseño Estático a React

Se inicia el proceso de traducir un diseño HTML/CSS estático a la arquitectura de componentes de React del proyecto.

### Paso 3.1: Integración de Design Tokens

Se han extraído los tokens de diseño (colores, sombras) del archivo estático y se han integrado en `tailwind.config.js` para que estén disponibles globalmente en la aplicación.

**`tailwind.config.js` (extracto):**
```javascript
// ...
extend: {
  colors: {
    primary: { /* ... */ },
    secondary: { /* ... */ },
    accent: { /* ... */ },
  },
  boxShadow: {
    'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
}
// ...
### Paso 3.2: Corrección de Estilos del Layout

* **Problema:** El componente `Sidebar` no mostraba los estilos correctos (fondo, color de texto).
* **Causa:** Se omitió la migración de la clase de CSS personalizada `.gradient-bg` del archivo estático original.
* **Solución:** Se añadió la definición de la clase `.gradient-bg` al archivo global `src/styles/index.css` para que esté disponible en toda la aplicación.

**`src/styles/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.gradient-bg {
  background: linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 100%);
}

