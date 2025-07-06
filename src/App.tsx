import { Routes, Route, Navigate } from 'react-router-dom';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { PageLayout } from './components/layout/PageLayout';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  return (
    <Routes>
      {/* Ruta para la Guía de Estilos (no usa el layout principal) */}
      <Route path="/style-guide" element={<StyleGuidePage />} />

      {/* Redirige la ruta raíz hacia el dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Rutas que SÍ usan el layout del dashboard */}
      <Route
        path="/dashboard"
        element={
          <PageLayout>
            <DashboardPage />
          </PageLayout>
        }
      />
      
      {/* Aquí añadiremos el resto de las páginas (casos, agenda, etc.) 
          usando el mismo PageLayout para mantener la consistencia.
          Ejemplo:
          <Route 
            path="/cases"
            element={
              <PageLayout>
                <CasesPage /> 
              </PageLayout>
            }
          />
      */}
    </Routes>
  );
}

export default App;
