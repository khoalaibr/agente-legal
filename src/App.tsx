import { Routes, Route, Link } from 'react-router-dom';
import { StyleGuidePage } from './pages/StyleGuidePage';

// Esta será nuestra página de inicio temporal
function HomePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Página de Inicio</h1>
      <p className="mt-4">Este es el punto de partida de nuestra aplicación.</p>
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Menú de navegación simple para movernos entre páginas */}
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Inicio</Link></li>
          <li><Link to="/style-guide" className="hover:underline">Guía de Estilos</Link></li>
        </ul>
      </nav>

      {/* El componente Routes renderizará el componente de la ruta que coincida */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App