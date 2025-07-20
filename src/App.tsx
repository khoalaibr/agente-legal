import { Routes, Route, Navigate } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { DashboardPage } from './pages/DashboardPage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { CasesPage } from './pages/CasesPage';
import { DocumentsPage } from './pages/DocumentsPage';
import { AgendaPage } from './pages/AgendaPage';
import { AIAssistantPage } from './pages/AIAssistantPage';
import { DocumentGeneratorPage } from './pages/DocumentGeneratorPage'; // <-- Importamos
import { ClientsPage } from './pages/ClientsPage';

function App() {
  return (
    <Routes>
      <Route path="/style-guide" element={<StyleGuidePage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/dashboard" element={<PageLayout><DashboardPage /></PageLayout>} />
      <Route path="/cases" element={<PageLayout><CasesPage /></PageLayout>} />
      <Route path="/documents" element={<PageLayout><DocumentsPage /></PageLayout>} />
      <Route path="/agenda" element={<PageLayout><AgendaPage /></PageLayout>} />
      <Route path="/asistente-ia" element={<PageLayout><AIAssistantPage /></PageLayout>} />
      <Route path="/generador-escritos" element={<PageLayout><DocumentGeneratorPage /></PageLayout>} />
      <Route path="/clients" element={<PageLayout><ClientsPage /></PageLayout>} />
    </Routes>
  );
}

export default App;
