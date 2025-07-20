Prompt para Continuación de Proyecto: Asesor Legal IA1. ROL Y OBJETIVOActuarás como un Arquitecto de Frontend y Diseñador de Sistemas de UI/UX senior. Tu misión principal es guiar a un usuario, paso a paso, en la creación de una aplicación web completa y robusta llamada "Asesor Legal IA" usando React y TypeScript. El resultado final debe ser un código limpio, escalable y mantenible.2. FILOSOFÍA DE TRABAJOLa metodología es el Component-Driven Development (CDD). El proceso consiste en:Analizar un diseño o una funcionalidad.Descomponer la UI en componentes atómicos y reutilizables (Ej: Button, Card, Modal).Construir cada componente de forma aislada en la carpeta /components/ui.Validar visualmente cada componente y sus variantes en una página dedicada (/style-guide).Ensamblar estos componentes para construir funcionalidades más complejas (componentes de "features") y páginas completas (/pages).Toda la lógica de estado de la aplicación se gestiona de forma centralizada con Redux Toolkit.3. STACK TECNOLÓGICOFramework: React con TypeScript.Bundler/Servidor de Desarrollo: Vite.Estilos: Tailwind CSS.Enrutamiento: react-router-dom.Gestión de Estado: @reduxjs/toolkit y react-redux.Utilidades de Clases: clsx y tailwind-merge.Iconos: @fortawesome/react-fontawesome.IDs Únicos: uuid.4. ESTRUCTURA DE CARPETASEl proyecto sigue una estructura de carpetas modular y escalable dentro de /src:/app: Configuración central de la aplicación (tienda de Redux)./assets: Recursos estáticos./components:/ui: Componentes de UI atómicos, genéricos y reutilizables./layout: Componentes estructurales (Header, Sidebar, etc.)./features: Componentes complejos y específicos de una funcionalidad (ej: features/cases/CaseCard.tsx)./features: Lógica de estado de Redux (slices)./hooks: Hooks personalizados de React./pages: Componentes que representan una página completa asociada a una ruta./services: (Aún no implementado) Para la lógica de llamadas a API./styles: Estilos globales.5. ESTADO ACTUAL DEL CÓDIGOA continuación se presenta la estructura completa de archivos del proyecto. El usuario pegará el contenido actual de cada archivo en el espacio correspondiente.{/* ====================================================================== */}
{/* ======================= ARCHIVOS DE CONFIGURACIÓN ======================= */}
{/* ====================================================================== */}

{/* RUTA: /package.json */}
{
  "name": "asesor-legal",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.7.2",
    "@fortawesome/free-regular-svg-icons": "^6.7.2",
    "@fortawesome/free-solid-svg-icons": "^6.7.2",
    "@fortawesome/react-fontawesome": "^0.2.2",
    "@reduxjs/toolkit": "^2.8.2",
    "axios": "^1.10.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.6.3",
    "tailwind-merge": "^3.3.1",
    "uuid": "^11.1.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.29.0",
    "@types/react": "^19.1.8",
    "@types/react-dom": "^19.1.6",
    "@types/uuid": "^10.0.0",
    "@vitejs/plugin-react": "^4.5.2",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.29.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.2.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "~5.8.3",
    "typescript-eslint": "^8.34.1",
    "vite": "^7.0.0"
  }
}


{/* RUTA: /tailwind.config.js */}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extendemos la paleta de colores con los del diseño.
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },
      // Extendemos las sombras de caja.
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      // Podríamos añadir la fuente 'Inter' aquí también, pero Vite ya la suele manejar bien.
      // Por ahora, nos enfocamos en colores y sombras.
    },
  },
  plugins: [],
}


{/* RUTA: /postcss.config.js */}
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

{/* RUTA: /vite.config.ts */}
{/*
  PEGA AQUÍ EL CONTENIDO COMPLETO DE vite.config.ts
*/}


{/* ====================================================================== */}
{/* ========================== ARCHIVOS DE /src ========================== */}
{/* ====================================================================== */}

{/* RUTA: /src/main.tsx */}
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // <-- Importa el Provider
import { store } from './app/store'; // <-- Importa nuestra tienda
import App from './App.tsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Envuelve la App con el Provider para habilitar Redux */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);


{/* RUTA: /src/App.tsx */}
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


{/* RUTA: /src/styles/index.css */}
/* Importa las directivas base de Tailwind CSS */
@tailwind base;
@tailwind components;
@tailwind utilities;

/*
  Aquí añadimos las clases personalizadas que no son parte de Tailwind
  pero que son necesarias para nuestro diseño.
*/
.gradient-bg {
  background: linear-gradient(135deg, #0c4a6e 0%, #1e3a8a 100%);
}

{/* RUTA: /src/app/store.ts */}
import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../features/dashboard/dashboardSlice';

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

{/* RUTA: /src/features/dashboard/dashboardSlice.ts */}
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// --- Tipos de Estado ---
export interface StatCardState {
  title: string;
  value: string;
  iconName: 'briefcase' | 'calendarDay' | 'fileAlt' | 'clock';
  iconBg: string;
  iconColor: string;
  change: string;
  changeColor?: string;
}

export interface CaseState {
  id: string;
  title: string;
  caseNumber: string;
  caseType: 'Civil' | 'Comercial' | 'Laboral' | 'Familia' | 'Penal';
  status: 'Activo' | 'En proceso' | 'Pendiente' | 'Urgente' | 'Archivado';
  statusColor: string;
  deadline: string;
  deadlineInDays: number;
  lastUpdated: string;
  client: {
    name: string;
    avatarUrl?: string;
  };
  entities: { type: string, value: string }[];
  iaSuggestion?: string;
  activeCollaborators?: { name: string; avatarUrl: string }[];
}

export interface TaskState {
  id: string;
  text: string;
  priority: 'Urgente' | 'Media' | 'Normal';
  completed: boolean;
  relatedCaseId?: string;
  deadline?: string;
  description?: string;
}

export interface ChatMessageState {
    id: string;
    sender: 'ia' | 'user';
    text: string;
    type: 'standard' | 'thinking' | 'citation' | 'error';
    actions?: string[];
    citation?: {
        title: string;
        source: string;
    };
}

export interface ConversationHistoryItem {
    id: string;
    title: string;
    preview: string;
    date: string;
}

export interface DocumentState {
  id: string;
  title: string;
  caseName: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  tags: { text: string; color: string }[];
  contentPreview: string;
  entities: { type: string, value: string }[];
  lastUpdated: string;
  iaSuggestion?: string;
  icon: 'file-contract' | 'file-alt' | 'file-invoice';
  iconColor: string;
}

export interface CalendarEventState {
    id: string;
    title: string;
    caseName: string;
    date: string;
    duration: string;
    type: 'audiencia' | 'reunion' | 'plazo' | 'recordatorio';
    typeColor: string;
    icon: 'gavel' | 'users' | 'file-signature' | 'bell';
    location?: string;
    participants?: { name: string; avatarUrl: string }[];
    iaSuggestion?: string;
}

export interface ReferenceItemState {
    id: string;
    title: string;
    description: string;
    tag: string;
    relevance: 'Alta' | 'Media' | 'Baja';
}

export interface TemplateState {
    id: string;
    title: string;
    description: string;
    tags: { text: string; color: string }[];
    timeToComplete: string;
    usageCount: number;
    isNew?: boolean;
    isFavorite?: boolean;
}

export interface CategoryState {
    id: string;
    name: string;
    icon: 'home' | 'briefcase' | 'users' | 'store';
    iconColor: string;
    bgColor: string;
    templateCount: number;
}

export interface ClientState {
  id: string;
  name: string;
  type: 'Persona' | 'Empresa';
  status: 'Activo' | 'Inactivo' | 'Pendiente' | 'Conflicto';
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  tags: { text: string; color: string }[];
  activeCasesCount: number;
  lastCase: string;
  riskLevel: 'Bajo' | 'Medio' | 'Alto';
  valueLevel: 'Bajo' | 'Medio' | 'Alto';
  lastActivity: string;
  lastActivityDate: string;
  avatarUrl?: string;
  isFavorite?: boolean;
}

interface AppState {
  stats: StatCardState[];
  recentCases: CaseState[];
  pendingTasks: TaskState[];
  chatHistory: ChatMessageState[];
  conversations: ConversationHistoryItem[];
  recentDocuments: DocumentState[];
  calendarEvents: CalendarEventState[];
  references: {
      normativa: ReferenceItemState[];
      jurisprudencia: ReferenceItemState[];
      casos: ReferenceItemState[];
  };
  templates: TemplateState[];
  categories: CategoryState[];
  clients: ClientState[];
}

const initialState: AppState = {
  stats: [
    { title: 'Casos Activos', value: '12', iconName: 'briefcase', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', change: '+2 desde el mes pasado', changeColor: 'text-green-500' },
    { title: 'Plazos Próximos', value: '5', iconName: 'calendarDay', iconBg: 'bg-red-100', iconColor: 'text-red-700', change: 'En los próximos 7 días' },
    { title: 'Documentos Pendientes', value: '8', iconName: 'fileAlt', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-700', change: '+3 desde la semana pasada', changeColor: 'text-red-500' },
    { title: 'Horas Facturables', value: '32.5', iconName: 'clock', iconBg: 'bg-green-100', iconColor: 'text-green-700', change: 'Este mes' },
  ],
  recentCases: [
    { id: 'case-1', title: 'Rodríguez c/ Seguros Confianza', caseNumber: 'CASO-2025-042', caseType: 'Civil', status: 'En proceso', statusColor: 'bg-yellow-100 text-yellow-800', deadline: '18/07/2025', deadlineInDays: 3, lastUpdated: 'Hace 2 días', client: { name: 'Juan Rodríguez', avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg' }, entities: [ { type: 'person', value: 'Juan Rodríguez' }, { type: 'organization', value: 'Seguros Confianza' }, { type: 'date', value: '18/07/2025' }, { type: 'money', value: '$50,000' } ], iaSuggestion: 'Se han encontrado 3 documentos similares que podrían ser relevantes para este caso.', activeCollaborators: [{ name: 'Ana García', avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg' }] },
    { id: 'case-2', title: 'Pérez - Sucesión', caseNumber: 'CASO-2025-039', caseType: 'Civil', status: 'Activo', statusColor: 'bg-green-100 text-green-800', deadline: '25/07/2025', deadlineInDays: 10, lastUpdated: 'Hace 5 días', client: { name: 'María Pérez', avatarUrl: 'https://randomuser.me/api/portraits/women/58.jpg' }, entities: [ { type: 'person', value: 'María Pérez' }, { type: 'person', value: 'Carlos Pérez' }, { type: 'date', value: '25/07/2025' }, { type: 'location', value: 'Montevideo' } ] },
    { id: 'case-3', title: 'Constructora Horizonte - Contrato', caseNumber: 'CASO-2025-035', caseType: 'Comercial', status: 'Urgente', statusColor: 'bg-red-100 text-red-800', deadline: '15/07/2025', deadlineInDays: 0, lastUpdated: 'Hace 25 minutos', client: { name: 'Constructora Horizonte S.A.' }, entities: [ { type: 'organization', value: 'Constructora Horizonte S.A.' }, { type: 'date', value: '15/07/2025' }, { type: 'money', value: '$1,250,000' } ], iaSuggestion: '¡Plazo crítico! El vencimiento es hoy. Se recomienda priorizar este caso.', activeCollaborators: [{ name: 'Carlos Rodríguez', avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg' }] },
  ],
  pendingTasks: [
    { id: 'task-1', text: 'Preparar escrito para caso Rodríguez', priority: 'Urgente', completed: false, relatedCaseId: 'case-1' },
    { id: 'task-2', text: 'Revisar contrato Constructora Horizonte', priority: 'Media', completed: false, relatedCaseId: 'case-3' },
    { id: 'task-3', text: 'Contactar testigos caso Rodríguez', priority: 'Normal', completed: true, relatedCaseId: 'case-1' },
    { id: 'task-4', text: 'Preparar documentación sucesión Pérez', priority: 'Media', completed: false, relatedCaseId: 'case-2' },
    { id: 'task-5', text: 'Actualizar registro de horas facturables', priority: 'Normal', completed: false },
  ],
  chatHistory: [
    { id: 'chat-1', sender: 'ia', type: 'standard', text: 'Bienvenido al Asistente Legal IA. ¿En qué puedo ayudarte hoy?'},
    { id: 'chat-2', sender: 'user', type: 'standard', text: 'Necesito información sobre indemnización por despido injustificado.' },
    { id: 'chat-3', sender: 'ia', type: 'citation', text: 'De acuerdo con la Ley N° 10.489, un trabajador despedido sin causa justificada tiene derecho a una indemnización.', citation: { title: 'Ley N° 10.489', source: 'IMPO' }, actions: ['Ver ley', 'Generar informe'] },
  ],
  conversations: [
      { id: 'conv-1', title: 'Consulta sobre despido injustificado', preview: 'Análisis de indemnización por despido...', date: 'Hoy, 10:30' },
      { id: 'conv-2', title: 'Interpretación del Código Civil', preview: 'Artículo 1324 sobre responsabilidad...', date: 'Ayer, 15:45' },
  ],
  recentDocuments: [
    { id: 'doc-1', title: 'Contrato de Arrendamiento', caseName: 'Caso Pérez - Sucesión', author: { name: 'Dra. Ana García', avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg' }, tags: [{ text: 'Contrato', color: 'bg-blue-100 text-blue-800' }], contentPreview: 'En la ciudad de Montevideo...', entities: [ { type: 'person', value: 'María Pérez' }], lastUpdated: 'Hace 10 minutos', iaSuggestion: 'Falta cláusula de actualización de alquiler.', icon: 'file-contract', iconColor: 'text-blue-600' },
  ],
  calendarEvents: [
    { id: 'event-1', title: 'Audiencia Preliminar', caseName: 'Constructora Horizonte - Contrato', date: '2025-07-15T10:00:00', duration: '10:00 a 11:30', type: 'audiencia', typeColor: 'bg-red-100 text-red-800', icon: 'gavel', location: 'Juzgado Civil 5º Turno', participants: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' } ], iaSuggestion: '¡Evento crítico hoy!' },
  ],
  references: {
      normativa: [
          { id: 'ref-norm-1', title: 'Ley N° 10.489', description: 'Indemnización por despido', tag: 'Laboral', relevance: 'Alta' },
      ],
      jurisprudencia: [],
      casos: [],
  },
  templates: [
    { id: 'tpl-1', title: 'Contrato de Arrendamiento', description: 'Contrato estándar para arrendamiento de inmuebles', tags: [{ text: 'Civil', color: 'bg-blue-100 text-blue-800' }, { text: 'Comercial', color: 'bg-yellow-100 text-yellow-800' }], timeToComplete: '15-20 min', usageCount: 1250, isFavorite: false },
    { id: 'tpl-2', title: 'Demanda Laboral', description: 'Demanda por despido injustificado', tags: [{ text: 'Laboral', color: 'bg-pink-100 text-pink-800' }], timeToComplete: '25-30 min', usageCount: 980, isFavorite: false },
  ],
  categories: [
    { id: 'cat-1', name: 'Civil', icon: 'home', iconColor: 'text-blue-600', bgColor: 'bg-blue-100', templateCount: 42 },
    { id: 'cat-2', name: 'Laboral', icon: 'briefcase', iconColor: 'text-pink-600', bgColor: 'bg-pink-100', templateCount: 28 },
  ],
  clients: [
    {
      id: 'client-1',
      name: 'Juan Pérez',
      type: 'Persona',
      status: 'Activo',
      contact: { email: 'juan.perez@email.com', phone: '+598 99 123 456', address: 'Montevideo, Uruguay' },
      tags: [{ text: 'Laboral', color: 'bg-pink-100 text-pink-800' }, { text: 'Civil', color: 'bg-blue-100 text-blue-800' }],
      activeCasesCount: 2,
      lastCase: 'Despido injustificado',
      riskLevel: 'Bajo',
      valueLevel: 'Alto',
      lastActivity: 'Audiencia laboral',
      lastActivityDate: 'Hace 30 días',
      avatarUrl: 'https://randomuser.me/api/portraits/men/72.jpg',
      isFavorite: false,
    },
    {
      id: 'client-2',
      name: 'Constructora Rodríguez S.A.',
      type: 'Empresa',
      status: 'Activo',
      contact: { email: 'contacto@constructorarodriguez.com', phone: '+598 2 456 7890', address: 'Montevideo, Uruguay' },
      tags: [{ text: 'Comercial', color: 'bg-yellow-100 text-yellow-800' }, { text: 'Laboral', color: 'bg-pink-100 text-pink-800' }],
      activeCasesCount: 5,
      lastCase: 'Contrato de obra',
      riskLevel: 'Alto',
      valueLevel: 'Alto',
      lastActivity: 'Reunión contractual',
      lastActivityDate: 'Hace 5 días',
      isFavorite: false,
    },
    {
      id: 'client-3',
      name: 'María González',
      type: 'Persona',
      status: 'Activo',
      contact: { email: 'maria.gonzalez@email.com', phone: '+598 99 789 012', address: 'Punta del Este, Uruguay' },
      tags: [{ text: 'Familia', color: 'bg-green-100 text-green-800' }, { text: 'Civil', color: 'bg-blue-100 text-blue-800' }],
      activeCasesCount: 1,
      lastCase: 'Divorcio',
      riskLevel: 'Bajo',
      valueLevel: 'Medio',
      lastActivity: 'Consulta telefónica',
      lastActivityDate: 'Hace 2 días',
      avatarUrl: 'https://randomuser.me/api/portraits/women/58.jpg',
      isFavorite: true,
    },
  ],
};

type AddTaskPayload = Omit<TaskState, 'id' | 'completed'>;
type AddCasePayload = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;
type AddEventPayload = Omit<CalendarEventState, 'id'>;

const statusColorMap: Record<CaseState['status'], string> = {
    'Activo': 'bg-green-100 text-green-800',
    'En proceso': 'bg-yellow-100 text-yellow-800',
    'Pendiente': 'bg-blue-100 text-blue-800',
    'Urgente': 'bg-red-100 text-red-800',
    'Archivado': 'bg-gray-100 text-gray-800',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const taskId = action.payload;
      const task = state.pendingTasks.find(t => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    addTask: (state, action: PayloadAction<AddTaskPayload>) => {
      const newTask: TaskState = {
        id: uuidv4(),
        completed: false,
        ...action.payload,
      };
      state.pendingTasks.unshift(newTask);
    },
    addCase: (state, action: PayloadAction<AddCasePayload>) => {
        const newCase: CaseState = {
            id: uuidv4(),
            lastUpdated: 'Ahora mismo',
            deadlineInDays: action.payload.deadline ? Math.ceil((new Date(action.payload.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : 99,
            statusColor: statusColorMap[action.payload.status],
            entities: [],
            ...action.payload,
        };
        state.recentCases.unshift(newCase);
    },
    addCalendarEvent: (state, action: PayloadAction<AddEventPayload>) => {
        const newEvent: CalendarEventState = {
            id: uuidv4(),
            ...action.payload,
        };
        state.calendarEvents.push(newEvent);
    },
    addChatMessage: (state, action: PayloadAction<Omit<ChatMessageState, 'id'>>) => {
        const lastMessage = state.chatHistory[state.chatHistory.length - 1];
        if (lastMessage?.type === 'thinking') {
            state.chatHistory[state.chatHistory.length - 1] = { id: lastMessage.id, ...action.payload };
        } else {
            state.chatHistory.push({ id: uuidv4(), ...action.payload });
        }
    },
    setAiThinking: (state, action: PayloadAction<boolean>) => {
        state.chatHistory = state.chatHistory.filter(m => m.type !== 'thinking');
        if (action.payload) {
            state.chatHistory.push({
                id: uuidv4(),
                sender: 'ia',
                type: 'thinking',
                text: 'Analizando consulta...'
            });
        }
    }
  },
});

export const { 
    toggleTaskCompletion, 
    addTask, 
    addCase, 
    addCalendarEvent, 
    addChatMessage, 
    setAiThinking 
} = dashboardSlice.actions;

export default dashboardSlice.reducer;


{/* RUTA: /src/hooks/useRedux.ts */}
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';

// Crea y exporta versiones tipadas de los hooks.
// Úsalos en toda tu aplicación en lugar de los `useDispatch` y `useSelector` simples.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


{/* ====================================================================== */}
{/* ========================== PÁGINAS (/pages) ========================== */}
{/* ====================================================================== */}

{/* RUTA: /src/pages/DashboardPage.tsx */}
import { Card } from '../components/ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCalendarDay, faFileAlt, faClock, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useAppSelector } from '../hooks/useRedux';
import type { StatCardState } from '../features/dashboard/dashboardSlice';
import { RecentCasesList } from '../components/features/dashboard/RecentCasesList';
import { PendingTasksList } from '../components/features/dashboard/PendingTasksList';
import { AIAssistant } from '../components/features/dashboard/AIAssistant';
import { RecentDocuments } from '../components/features/dashboard/RecentDocuments';
import { Calendar } from '../components/features/dashboard/Calendar'; // <-- Importamos el Calendario

const iconMap: { [key: string]: IconDefinition } = {
  briefcase: faBriefcase,
  calendarDay: faCalendarDay,
  fileAlt: faFileAlt,
  clock: faClock,
};

type StatCardProps = {
  data: StatCardState;
};

function StatCard({ data }: StatCardProps) {
  const { title, value, iconName, iconBg, iconColor, change, changeColor } = data;
  const icon = iconMap[iconName];

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-secondary-600">{title}</h3>
        <span className={`w-8 h-8 rounded-full flex items-center justify-center ${iconBg} ${iconColor}`}>
          {icon && <FontAwesomeIcon icon={icon} />}
        </span>
      </div>
      <p className="text-2xl font-bold text-secondary-900">{value}</p>
      <p className={`text-xs mt-1 ${changeColor || 'text-secondary-500'}`}>
        {change.startsWith('+') && <FontAwesomeIcon icon={faArrowUp} className="mr-1" />}
        {change}
      </p>
    </Card>
  );
}

export function DashboardPage() {
  const statsData = useAppSelector((state) => state.dashboard.stats);

  return (
    <div className="space-y-8">
      {/* Encabezado de la página */}
      <div>
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">
          Bienvenido, Dr. Martínez
        </h1>
        <p className="text-secondary-600">
          Aquí tiene un resumen de su actividad reciente y próximos compromisos.
        </p>
      </div>

      {/* Grid para las tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <StatCard key={stat.title} data={stat} />
        ))}
      </div>

      {/* Grid principal para el contenido */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Columna izquierda (más ancha) */}
        <div className="lg:col-span-2 space-y-6">
          <RecentCasesList />
          <Calendar /> {/* <-- Añadimos el Calendario */}
        </div>
        
        {/* Columna derecha */}
        <div className="space-y-6">
          <PendingTasksList />
          <AIAssistant />
        </div>
      </div>

      {/* Tabla de Documentos Recientes (ocupa todo el ancho) */}
      <div>
        <RecentDocuments />
      </div>
    </div>
  );
}


{/* RUTA: /src/pages/CasesPage.tsx */}
import { useState, useMemo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { CaseCard } from '../components/features/cases/CaseCard';
import { CaseFilters, type Filters } from '../components/features/cases/CaseFilters';
import { CaseTabs } from '../components/features/cases/CaseTabs';
import { Modal } from '../components/ui/Modal';
import { NewCaseForm } from '../components/features/cases/NewCaseForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFilter, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { addCase, type CaseState } from '../features/dashboard/dashboardSlice';

const ITEMS_PER_PAGE = 6;
type CaseFormData = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;

export function CasesPage() {
  const allCases = useAppSelector((state) => state.dashboard.recentCases);
  const dispatch = useAppDispatch();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('Todos');
  const [filters, setFilters] = useState<Filters>({
    searchTerm: '',
    caseType: '',
    status: '',
  });

  const filteredCases = useMemo(() => {
    let cases = allCases;
    if (activeTab !== 'Todos') {
      cases = cases.filter(c => c.status === activeTab);
    }
    return cases.filter(c => {
      const searchTermMatch = c.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) || c.caseNumber.toLowerCase().includes(filters.searchTerm.toLowerCase()) || c.client.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const caseTypeMatch = filters.caseType ? c.caseType === filters.caseType : true;
      const statusMatch = filters.status ? c.status === filters.status : true;
      return searchTermMatch && caseTypeMatch && statusMatch;
    });
  }, [allCases, filters, activeTab]);

  const tabs = useMemo(() => {
    const statusCounts = allCases.reduce((acc, c) => {
      acc[c.status] = (acc[c.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return [
      { name: 'Todos', count: allCases.length },
      { name: 'Activo', count: statusCounts['Activo'] || 0 },
      { name: 'En proceso', count: statusCounts['En proceso'] || 0 },
      { name: 'Pendiente', count: statusCounts['Pendiente'] || 0 },
      { name: 'Urgente', count: statusCounts['Urgente'] || 0 },
      { name: 'Archivado', count: statusCounts['Archivado'] || 0 },
    ].filter(tab => tab.count > 0 || tab.name === 'Todos');
  }, [allCases]);

  const totalPages = Math.ceil(filteredCases.length / ITEMS_PER_PAGE);
  const paginatedCases = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCases.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredCases, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, activeTab]);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddCase = (caseData: CaseFormData) => {
    dispatch(addCase(caseData));
    handleCloseModal();
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-1">Gestión de Casos</h1>
            <p className="text-secondary-600">Administre todos sus casos legales en un solo lugar.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button onClick={handleOpenModal} className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              <span>Nuevo Caso</span>
            </button>
            <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              <span>Filtros</span>
            </button>
          </div>
        </div>

        <CaseFilters filters={filters} onFilterChange={setFilters} />
        <CaseTabs tabs={tabs} activeTab={activeTab} onTabClick={setActiveTab} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedCases.length > 0 ? (
            paginatedCases.map((caseData) => (
              <CaseCard key={caseData.id} caseData={caseData} />
            ))
          ) : (
            <div className="lg:col-span-3 text-center py-12">
              <p className="text-secondary-500">No se encontraron casos que coincidan con la selección.</p>
            </div>
          )}
        </div>

        {totalPages > 0 && (
          <div className="flex justify-between items-center">
            <div className="text-sm text-secondary-500">
              Mostrando <strong>{paginatedCases.length}</strong> de <strong>{filteredCases.length}</strong> casos
            </div>
            <div className="flex space-x-1">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button 
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-accent-600 text-white' : 'text-secondary-500 hover:bg-secondary-100'}`}
                >
                  {page}
                </button>
              ))}
              <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Crear Nuevo Caso">
        <NewCaseForm onCancel={handleCloseModal} onSubmit={handleAddCase} />
      </Modal>
    </>
  );
}


{/* RUTA: /src/pages/DocumentsPage.tsx */}
import { useState, useMemo, useEffect } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { DocumentCard } from '../components/features/documents/DocumentCard';
import { DocumentFilters, type DocumentFiltersState } from '../components/features/documents/DocumentFilters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUpload, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ITEMS_PER_PAGE = 6;

export function DocumentsPage() {
  const allDocuments = useAppSelector((state) => state.dashboard.recentDocuments);

  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<DocumentFiltersState>({
    searchTerm: '',
    documentType: '',
    caseId: '',
  });

  const filteredDocuments = useMemo(() => {
    return allDocuments.filter(doc => {
      const searchTermMatch = doc.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                              doc.contentPreview.toLowerCase().includes(filters.searchTerm.toLowerCase());
      
      const documentTypeMatch = filters.documentType 
        ? doc.tags.some(tag => tag.text === filters.documentType) 
        : true;
      
      const caseMatch = filters.caseId ? doc.caseName === filters.caseId : true;

      return searchTermMatch && documentTypeMatch && caseMatch;
    });
  }, [allDocuments, filters]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  const paginatedDocuments = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDocuments.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredDocuments, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900 mb-1">Gestión de Documentos</h1>
          <p className="text-secondary-600">Administre todos sus documentos legales en un solo lugar.</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            <span>Nuevo Documento</span>
          </button>
          <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            <span>Importar</span>
          </button>
        </div>
      </div>

      <DocumentFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedDocuments.length > 0 ? (
          paginatedDocuments.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))
        ) : (
          <div className="lg:col-span-3 text-center py-12">
            <p className="text-secondary-500">No se encontraron documentos que coincidan con los filtros.</p>
          </div>
        )}
      </div>

      {totalPages > 0 && (
        <div className="flex justify-between items-center">
          <div className="text-sm text-secondary-500">
            Mostrando <strong>{paginatedDocuments.length}</strong> de <strong>{filteredDocuments.length}</strong> documentos
          </div>
          <div className="flex space-x-1">
            <button onClick={handlePrevPage} disabled={currentPage === 1} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button 
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md ${currentPage === page ? 'bg-accent-600 text-white' : 'text-secondary-500 hover:bg-secondary-100'}`}
              >
                {page}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages} className="px-3 py-1 rounded-md text-secondary-500 hover:bg-secondary-100 disabled:opacity-50">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


{/* RUTA: /src/pages/AgendaPage.tsx */}
import { useState, useMemo, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/useRedux';
import { AgendaCalendar } from '../components/features/agenda/AgendaCalendar';
import { UpcomingEventsPanel } from '../components/features/agenda/UpcomingEventsPanel';
import { AgendaFilters, type AgendaFiltersState } from '../components/features/agenda/AgendaFilters';
import { NewEventForm } from '../components/features/agenda/NewEventForm';
import { Modal } from '../components/ui/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { addCalendarEvent, type CalendarEventState } from '../features/dashboard/dashboardSlice';

type EventFormData = Omit<CalendarEventState, 'id'>;

export function AgendaPage() {
  const allEvents = useAppSelector((state) => state.dashboard.calendarEvents);
  const dispatch = useAppDispatch();
  
  const [selectedDate, setSelectedDate] = useState(new Date('2025-07-15'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filters, setFilters] = useState<AgendaFiltersState>({
    eventType: '',
    caseName: '',
    searchTerm: '',
  });

  const filteredEvents = useMemo(() => {
    return allEvents.filter(event => {
      const eventDate = new Date(event.date);
      const isSameDay = eventDate.toDateString() === selectedDate.toDateString();
      
      const typeMatch = filters.eventType ? event.type === filters.eventType : true;
      const caseMatch = filters.caseName ? event.caseName === filters.caseName : true;
      const searchMatch = filters.searchTerm ? event.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) : true;

      // Por ahora, el panel derecho solo muestra eventos del día seleccionado.
      // Los filtros de la barra superior se podrían usar para resaltar días en el calendario.
      return isSameDay && typeMatch && caseMatch && searchMatch;
    });
  }, [allEvents, selectedDate, filters]);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleAddEvent = (eventData: EventFormData) => {
    dispatch(addCalendarEvent(eventData));
    handleCloseModal();
  };

  return (
    <>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-secondary-900 mb-1">Agenda y Calendario</h1>
            <p className="text-secondary-600">Gestione sus eventos, audiencias y reuniones.</p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button onClick={handleOpenModal} className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              <span>Nuevo Evento</span>
            </button>
            <button className="bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium flex items-center justify-center">
              <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
              <span>Sincronizar</span>
            </button>
          </div>
        </div>

        <AgendaFilters filters={filters} onFilterChange={setFilters} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AgendaCalendar events={allEvents} onDayClick={handleDayClick} />
          </div>
          <div className="lg:col-span-1">
            <UpcomingEventsPanel events={filteredEvents} selectedDate={selectedDate} />
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Crear Nuevo Evento">
        <NewEventForm onCancel={handleCloseModal} onSubmit={handleAddEvent} />
      </Modal>
    </>
  );
}


{/* RUTA: /src/pages/AIAssistantPage.tsx */}
import { ChatHistoryPanel } from '../components/features/ai-assistant/ChatHistoryPanel';
import { ChatInterface } from '../components/features/ai-assistant/ChatInterface';
import { ReferencesPanel } from '../components/features/ai-assistant/ReferencesPanel'; // <-- Importamos el nuevo componente

export function AIAssistantPage() {
  return (
    <div className="flex flex-1 overflow-hidden h-full">
      <ChatHistoryPanel />
      <ChatInterface />
      <ReferencesPanel />
    </div>
  );
}


{/* RUTA: /src/pages/DocumentGeneratorPage.tsx */}
import { useState } from 'react';
import { useAppSelector } from '../hooks/useRedux';
import { TemplateCard } from '../components/features/doc-generator/TemplateCard';
import { DocumentGeneratorModal } from '../components/features/doc-generator/DocumentGeneratorModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUsers, faStore } from '@fortawesome/free-solid-svg-icons';
import type { CategoryState, TemplateState } from '../features/dashboard/dashboardSlice';
import { clsx } from 'clsx';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap: { [key: string]: IconDefinition } = { home: faHome, briefcase: faBriefcase, users: faUsers, store: faStore };

const CategoryCard = ({ category }: { category: CategoryState }) => (
  <a href="#" className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow hover:-translate-y-px">
    <div className={clsx('p-3 rounded-full mb-3', category.bgColor)}>
      <FontAwesomeIcon icon={iconMap[category.icon]} className={clsx(category.iconColor, 'text-xl')} />
    </div>
    <h3 className="text-md font-medium text-secondary-900 mb-1">{category.name}</h3>
    <p className="text-xs text-secondary-500">{category.templateCount} plantillas</p>
  </a>
);

export function DocumentGeneratorPage() {
  const templates = useAppSelector((state) => state.dashboard.templates);
  const categories = useAppSelector((state) => state.dashboard.categories);

  // --- Estados para el control de la UI ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateState | null>(null);

  // --- Manejadores de eventos ---
  const handleCreateClick = (template: TemplateState) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTemplate(null);
  };

  return (
    <>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-secondary-900">Generador de Escritos</h1>
          <p className="text-secondary-600">Crea documentos legales profesionales a partir de plantillas inteligentes</p>
        </div>
        
        <section>
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Plantillas populares</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map(template => (
              <TemplateCard 
                key={template.id} 
                template={template} 
                onCreateClick={handleCreateClick} // <-- CORRECCIÓN: Pasamos la prop requerida
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-secondary-900 mb-4">Explorar por categoría</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      </div>

      <DocumentGeneratorModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        template={selectedTemplate}
      />
    </>
  );
}


{/* RUTA: /src/pages/StyleGuidePage.tsx */}
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// Un componente auxiliar para organizar las secciones de la guía de estilos.
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mb-12">
    <h2 className="text-2xl font-semibold border-b border-secondary-300 pb-2 mb-6 text-secondary-800">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

export function StyleGuidePage() {
  return (
    <div className="container mx-auto p-8 bg-secondary-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-secondary-900">Guía de Estilos</h1>

      {/* Sección para los Botones */}
      <Section title="Buttons">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="md">Medium (Default)</Button>
          <Button variant="primary" size="lg">Large</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" disabled>Primary Disabled</Button>
          <Button variant="secondary" disabled>Secondary Disabled</Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">
            <FontAwesomeIcon icon={faSpinner} className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </Button>
        </div>
      </Section>

      {/* Nueva sección para las Tarjetas (Cards) */}
      <Section title="Cards">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">Tarjeta Básica</h3>
            <p className="text-secondary-600">
              Este es un componente Card básico. Sirve como contenedor para
              cualquier tipo de contenido, heredando los estilos base.
            </p>
          </Card>
          <Card className="p-6 bg-primary-800 text-white">
            <h3 className="text-lg font-semibold mb-2">Tarjeta Invertida</h3>
            <p>
              Puedes pasar clases adicionales para sobreescribir o extender los
              estilos base, como cambiar el color de fondo y texto.
            </p>
          </Card>
          <Card className="p-4 border-2 border-dashed border-secondary-300 shadow-none bg-transparent">
            <h3 className="text-lg font-semibold mb-2 text-secondary-800">Tarjeta sin Sombra</h3>
            <p className="text-secondary-600">
              Aquí se removió la sombra (`shadow-none`) y se añadió un borde.
            </p>
          </Card>
        </div>
      </Section>

    </div>
  );
}



{/* ====================================================================== */}
{/* ==================== COMPONENTES DE UI (/components/ui) ==================== */}
{/* ====================================================================== */}

{/* RUTA: /src/components/ui/Button.tsx */}
import React, { forwardRef, type ButtonHTMLAttributes } from 'react'; // <-- CORRECCIÓN AQUÍ
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// class-variance-authority (cva) nos ayuda a definir variantes de componentes de forma ordenada.
// Es una herramienta muy popular para construir bibliotecas de componentes con Tailwind.
const buttonVariants = cva(
  // Estilos base aplicados a todas las variantes
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      // Define las variantes de estilo del botón
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-600/90',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-200/80',
        danger: 'bg-red-600 text-white hover:bg-red-600/90',
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
      },
      // Define las variantes de tamaño del botón
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    // Valores por defecto si no se especifica ninguna prop
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

// Definimos las props del componente usando TypeScript.
// Extiende los atributos de un botón HTML estándar y las variantes que creamos.
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// Creamos el componente usando forwardRef.
// Esto permite a los componentes padres obtener una referencia al elemento <button> interno,
// lo cual es una buena práctica para componentes de UI reutilizables.
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    // Usamos twMerge y clsx para combinar las clases de Tailwind de forma segura.
    // 1. buttonVariants({ variant, size }) obtiene las clases de la variante/tamaño.
    // 2. className permite al usuario pasar clases adicionales desde fuera.
    // 3. twMerge se asegura de que no haya conflictos (ej: si se pasa un 'bg-green-500' desde fuera, sobreescribirá el 'bg-blue-600' de la variante).
    const finalClassName = twMerge(clsx(buttonVariants({ variant, size, className })));

    return (
      <button
        className={finalClassName}
        ref={ref}
        {...props} // Pasamos el resto de las props (como onClick, children, disabled, etc.)
      />
    );
  }
);
Button.displayName = 'Button'; // Asignamos un nombre para facilitar el debugging en las DevTools.

export { Button, buttonVariants };


{/* RUTA: /src/components/ui/Card.tsx */}
import React, { forwardRef, type HTMLAttributes } from 'react'; // <-- CORRECCIÓN AQUÍ
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

// Las props del Card extienden los atributos de un <div> estándar.
export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    // Usamos twMerge y clsx para combinar las clases de forma segura.
    // El usuario puede pasar clases adicionales si necesita personalizar una tarjeta específica.
    const finalClassName = twMerge(
      clsx('bg-white rounded-lg shadow-custom', className)
    );

    return (
      <div
        ref={ref}
        className={finalClassName}
        {...props} // Pasamos el resto de las props, como 'children'.
      />
    );
  }
);
Card.displayName = 'Card';

export { Card };


{/* RUTA: /src/components/ui/Modal.tsx */}
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    // Usamos Fragment para el portal, aunque aquí está simplificado.
    // El div principal actúa como el fondo oscuro (backdrop).
    <div
      className="fixed inset-0 bg-secondary-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // Cierra el modal si se hace clic en el fondo
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 m-4"
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el contenido cierre el modal
      >
        {/* Encabezado del Modal */}
        <div className="flex justify-between items-center mb-4">
          <h3 id="modal-title" className="text-lg font-semibold text-secondary-900">
            {title}
          </h3>
          <button
            className="text-secondary-500 hover:text-secondary-700"
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        {/* Contenido del Modal */}
        <div>{children}</div>
      </div>
    </div>
  );
}



{/* ====================================================================== */}
{/* ================= COMPONENTES DE LAYOUT (/components/layout) ================= */}
{/* ====================================================================== */}

{/* RUTA: /src/components/layout/Header.tsx */}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faChevronDown, faBars } from '@fortawesome/free-solid-svg-icons';

// Las props del Header incluirán una función para manejar el clic del botón de menú en móviles.
type HeaderProps = {
  onMenuButtonClick: () => void;
};

export function Header({ onMenuButtonClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Lado Izquierdo: Botón de Menú y Logo */}
          <div className="flex items-center">
            {/* Este botón solo será visible en pantallas pequeñas (md:hidden) */}
            <button
              onClick={onMenuButtonClick}
              className="mr-4 text-secondary-500 hover:text-secondary-700 md:hidden"
              aria-label="Abrir menú"
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
            <a href="#" className="text-xl font-bold text-primary-800">
              Asesor Legal <span className="text-accent-600">IA</span>
            </a>
          </div>

          {/* Lado Derecho: Búsqueda y Perfil */}
          <div className="flex items-center">
            {/* Barra de Búsqueda */}
            <div className="relative mr-4 hidden sm:block">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-40 md:w-64 px-4 py-2 rounded-full border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Iconos y Perfil de Usuario */}
            <div className="flex items-center space-x-4">
              <button className="text-secondary-500 hover:text-secondary-700 relative" aria-label="Notificaciones">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>

              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Foto de perfil del Dr. Martínez"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span className="hidden md:inline text-sm font-medium text-secondary-800">Dr. Martínez</span>
                <button className="ml-1 text-secondary-500 hover:text-secondary-700" aria-label="Opciones de perfil">
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


{/* RUTA: /src/components/layout/Sidebar.tsx */}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt, faFolderOpen, faCalendarAlt, faFileAlt, faUsers,
  faSearch, faRobot, faFileSignature, faCalculator,
  faUserCog, faCog, faQuestionCircle,
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { clsx } from 'clsx';
import { NavLink } from 'react-router-dom';

type SidebarItemProps = {
  icon: IconDefinition;
  label: string;
  to: string;
  isExpanded: boolean;
};

function SidebarItem({ icon, label, to, isExpanded }: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          'flex items-center py-2 px-3 rounded-md mb-1 transition-colors duration-200',
          'hover:bg-white/20',
          { 'bg-white/20 border-l-4 border-white': isActive },
          { 'justify-center': !isExpanded }
        )
      }
    >
      <FontAwesomeIcon icon={icon} className={clsx('w-5', { 'mr-3': isExpanded })} />
      <span className={clsx({ 'hidden': !isExpanded })}>{label}</span>
    </NavLink>
  );
}

type SidebarProps = {
  isMobileOpen: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
};

export function Sidebar({ isMobileOpen, isExpanded, onToggleExpand }: SidebarProps) {
  return (
    <aside
      className={clsx(
        'gradient-bg text-white flex-shrink-0 overflow-y-auto transition-all duration-300 flex flex-col',
        'md:relative md:translate-x-0',
        { 'w-64': isExpanded, 'w-20': !isExpanded },
        { 'translate-x-0': isMobileOpen, '-translate-x-full absolute': !isMobileOpen }
      )}
    >
      <div className="flex-1 p-4">
        {/* Sección Principal */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Principal</p>
          <nav>
            <SidebarItem to="/dashboard" icon={faTachometerAlt} label="Dashboard" isExpanded={isExpanded} />
            <SidebarItem to="/cases" icon={faFolderOpen} label="Casos" isExpanded={isExpanded} />
            <SidebarItem to="/agenda" icon={faCalendarAlt} label="Agenda" isExpanded={isExpanded} />
            <SidebarItem to="/documents" icon={faFileAlt} label="Documentos" isExpanded={isExpanded} />
            <SidebarItem to="/clients" icon={faUsers} label="Clientes" isExpanded={isExpanded} />
          </nav>
        </div>

        {/* Sección Herramientas */}
        <div className="mb-8">
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Herramientas</p>
          <nav>
            <SidebarItem to="/legal-search" icon={faSearch} label="Búsqueda Legal" isExpanded={isExpanded} />
            <SidebarItem to="/asistente-ia" icon={faRobot} label="Asistente IA" isExpanded={isExpanded} />
            {/* CORRECCIÓN: Este es un NavLink, no un botón que abre un modal */}
            <SidebarItem to="/generador-escritos" icon={faFileSignature} label="Generador de Escritos" isExpanded={isExpanded} />
            <SidebarItem to="/calculator" icon={faCalculator} label="Calculadora de Plazos" isExpanded={isExpanded} />
          </nav>
        </div>

        {/* Sección Configuración */}
        <div>
          <p className={clsx('text-xs uppercase tracking-wider text-secondary-300 mb-2', { 'hidden': !isExpanded })}>Configuración</p>
          <nav>
            <SidebarItem to="/profile" icon={faUserCog} label="Perfil" isExpanded={isExpanded} />
            <SidebarItem to="/settings" icon={faCog} label="Ajustes" isExpanded={isExpanded} />
            <SidebarItem to="/help" icon={faQuestionCircle} label="Ayuda" isExpanded={isExpanded} />
          </nav>
        </div>
      </div>
      
      <div className="p-4 border-t border-white/20 hidden md:block">
        <button 
          onClick={onToggleExpand} 
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-white/20 transition-colors"
          aria-label={isExpanded ? "Colapsar menú" : "Expandir menú"}
        >
          <FontAwesomeIcon icon={isExpanded ? faChevronLeft : faChevronRight} className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
}


{/* RUTA: /src/components/layout/PageLayout.tsx */}
import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const handleToggleSidebarExpand = () => setIsSidebarExpanded(prev => !prev);

  return (
    <div className="h-screen flex bg-secondary-50">
      <Sidebar
        isMobileOpen={isMobileMenuOpen}
        isExpanded={isSidebarExpanded}
        onToggleExpand={handleToggleSidebarExpand}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuButtonClick={handleToggleMobileMenu} />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}



{/* ====================================================================== */}

{/* ================ COMPONENTES DE FEATURES (/components/features) ================ */}
{/* ====================================================================== */}

{/* RUTA: /src/components/features/cases/CaseCard.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faLightbulb, faEye, faEdit, faEllipsisV, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

type CaseCardProps = {
  caseData: CaseState;
};

const entityTagStyles: { [key: string]: string } = {
  person: 'bg-blue-100 text-blue-800',
  organization: 'bg-yellow-100 text-yellow-800',
  location: 'bg-green-100 text-green-800',
  date: 'bg-purple-100 text-purple-800',
  money: 'bg-red-100 text-red-800',
};

export function CaseCard({ caseData }: CaseCardProps) {
  const { title, caseNumber, caseType, status, statusColor, deadline, deadlineInDays, client, entities, iaSuggestion } = caseData;
  const isUrgent = status === 'Urgente' || deadlineInDays <= 3;

  return (
    // 1. El contenedor principal es una columna flexible que ocupa toda la altura disponible
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      
      {/* 2. Este div es el "cuerpo" que se expandirá para ocupar el espacio sobrante */}
      <div className="p-4 flex-1">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <FontAwesomeIcon icon={faFolder} className="text-blue-600 text-sm" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-secondary-900 leading-tight">{title}</h3>
            <p className="text-xs text-secondary-500">{caseType} • {caseNumber}</p>
          </div>
        </div>

        <div className="mb-3">
          <div className="flex items-center mb-2">
            {client.avatarUrl ? (
              <img src={client.avatarUrl} alt={`Avatar de ${client.name}`} className="h-6 w-6 rounded-full mr-2" />
            ) : (
              <div className="h-6 w-6 rounded-full bg-secondary-200 flex items-center justify-center mr-2">
                <span className="text-xs font-bold text-secondary-500">{client.name.charAt(0)}</span>
              </div>
            )}
            <span className="text-sm text-secondary-800">{client.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={clsx('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', statusColor)}>
              {status}
            </span>
            <span className={clsx('text-sm font-medium', { 'text-red-600': isUrgent })}>
              Plazo: {deadline} ({deadlineInDays} días)
            </span>
          </div>
        </div>

        <div className="mb-3">
          <p className="text-xs text-secondary-500 mb-1">Entidades detectadas:</p>
          <div className="flex flex-wrap gap-1">
            {entities.map(entity => (
              <span key={entity.value} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', entityTagStyles[entity.type] || 'bg-gray-100 text-gray-800')}>
                {entity.value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Este div es el "pie de página" que ahora está fuera del div que crece */}
      <div className="p-4 pt-0">
        <div className="border-t border-secondary-100 pt-3">
          <div className="flex justify-between items-center">
            <p className="text-xs text-secondary-500">Última act 7777.: {caseData.lastUpdated}</p>
            <div className="flex space-x-2">
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Ver"><FontAwesomeIcon icon={faEye} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Editar"><FontAwesomeIcon icon={faEdit} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Más opciones"><FontAwesomeIcon icon={faEllipsisV} /></button>
            </div>
          </div>
        </div>
      </div>
      
      {iaSuggestion && (
        <div className={clsx('p-3 border-t', { 'bg-red-50 border-red-100': isUrgent, 'bg-accent-50 border-accent-100': !isUrgent })}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-2">
              <FontAwesomeIcon icon={isUrgent ? faExclamationCircle : faLightbulb} className={clsx('text-sm', { 'text-red-600': isUrgent, 'text-accent-600': !isUrgent })} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-secondary-700">{iaSuggestion}</p>
              <button className="text-xs text-accent-600 hover:text-accent-800 font-medium mt-1">Ver detalles</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/cases/CaseFilters.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';

// Definimos el tipo para los filtros
export type Filters = {
  searchTerm: string;
  caseType: string;
  status: string;
};

// El componente ahora recibe los valores de los filtros y las funciones para actualizarlos
type CaseFiltersProps = {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
};

export function CaseFilters({ filters, onFilterChange }: CaseFiltersProps) {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-custom mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Búsqueda por texto */}
        <div>
          <label htmlFor="searchTerm" className="block text-xs font-medium text-secondary-700 mb-1">
            Buscar
          </label>
          <div className="relative">
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChange}
              placeholder="Buscar por nombre, número..."
              className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        {/* Filtro por Tipo de Caso */}
        <div>
          <label htmlFor="caseType" className="block text-xs font-medium text-secondary-700 mb-1">
            Tipo de Caso
          </label>
          <select
            id="caseType"
            name="caseType"
            value={filters.caseType}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los tipos</option>
            <option value="Civil">Civil</option>
            <option value="Comercial">Comercial</option>
            <option value="Laboral">Laboral</option>
            <option value="Familia">Familia</option>
            <option value="Penal">Penal</option>
          </select>
        </div>

        {/* Filtro por Estado */}
        <div>
          <label htmlFor="status" className="block text-xs font-medium text-secondary-700 mb-1">
            Estado
          </label>
          <select
            id="status"
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="En proceso">En proceso</option>
            <option value="Pendiente">Pendiente</option>
            <option value="Urgente">Urgente</option>
            <option value="Archivado">Archivado</option>
          </select>
        </div>
        
        {/* Podríamos añadir más filtros aquí, como el de fecha */}
        <div>
          <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">
            Resetear
          </label>
          <button 
            onClick={() => onFilterChange({ searchTerm: '', caseType: '', status: '' })}
            className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/cases/CaseTabs.tsx */}
{/*
  import { clsx } from 'clsx';

// Definimos los tipos para las pestañas
type Tab = {
  name: string;
  count: number;
};

type CaseTabsProps = {
  tabs: Tab[];
  activeTab: string;
  onTabClick: (tabName: string) => void;
};

export function CaseTabs({ tabs, activeTab, onTabClick }: CaseTabsProps) {
  return (
    <div className="mb-6 border-b border-secondary-200">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => onTabClick(tab.name)}
            className={clsx(
              'py-2 px-4 text-sm font-medium whitespace-nowrap',
              {
                'border-b-2 border-accent-600 text-accent-600': activeTab === tab.name,
                'border-b-2 border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300': activeTab !== tab.name,
              }
            )}
          >
            {tab.name} ({tab.count})
          </button>
        ))}
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/cases/NewCaseForm.tsx */}
{/*
  import { useState } from 'react';
import { Button } from '../../ui/Button';
import type { CaseState } from '../../../features/dashboard/dashboardSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

// El tipo de los datos que el formulario enviará. Omitimos las propiedades que se generan automáticamente.
type CaseFormData = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;

type NewCaseFormProps = {
  onCancel: () => void;
  onSubmit: (caseData: CaseFormData) => void;
};

export function NewCaseForm({ onCancel, onSubmit }: NewCaseFormProps) {
  const [formData, setFormData] = useState<Partial<CaseFormData>>({
    title: '',
    caseNumber: '',
    caseType: 'Civil',
    status: 'Activo',
    deadline: '',
    client: { name: '' },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'clientName') {
        setFormData(prev => ({ ...prev, client: { ...prev.client, name: value } }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.client?.name) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }
    onSubmit(formData as CaseFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-1 md:p-6 max-h-[80vh] overflow-y-auto">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">Título del Caso *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="caseType" className="block text-sm font-medium text-secondary-700 mb-1">Tipo de Caso *</label>
            <select id="caseType" name="caseType" value={formData.caseType} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
              <option>Civil</option>
              <option>Comercial</option>
              <option>Laboral</option>
              <option>Familia</option>
              <option>Penal</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="clientName" className="block text-sm font-medium text-secondary-700 mb-1">Cliente *</label>
          <input type="text" id="clientName" name="clientName" value={formData.client?.name} onChange={handleChange} placeholder="Buscar o crear cliente..." className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-secondary-700 mb-1">Descripción</label>
          <textarea id="description" name="description" rows={4} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500"></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="status" className="block text-sm font-medium text-secondary-700 mb-1">Estado *</label>
                <select id="status" name="status" value={formData.status} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
                    <option>Activo</option>
                    <option>En proceso</option>
                    <option>Pendiente</option>
                    <option>Urgente</option>
                    <option>Archivado</option>
                </select>
            </div>
            <div>
                <label htmlFor="deadline" className="block text-sm font-medium text-secondary-700 mb-1">Próximo Plazo</label>
                <input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" />
            </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-secondary-700 mb-1">Documentos Iniciales</label>
          <div className="border-2 border-dashed border-secondary-300 rounded-md p-6 text-center">
            <FontAwesomeIcon icon={faCloudUploadAlt} className="text-secondary-400 text-3xl mb-3" />
            <p className="text-sm text-secondary-500 mb-2">Arrastra y suelta archivos aquí</p>
            <Button type="button" variant="secondary">Seleccionar Archivos</Button>
            <p className="text-xs text-secondary-400 mt-2">PDF, DOCX, etc. (máx. 10MB)</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="primary">Crear Caso</Button>
      </div>
    </form>
  );
}

*/}

{/* RUTA: /src/components/features/documents/DocumentCard.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileContract, faFileAlt, faFileInvoice, faLightbulb, faEye, faDownload, faShareAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { DocumentState } from '../../../features/dashboard/dashboardSlice';

type DocumentCardProps = {
  document: DocumentState;
};

const iconMap = {
  'file-contract': faFileContract,
  'file-alt': faFileAlt,
  'file-invoice': faFileInvoice,
};

const entityTagStyles: { [key: string]: string } = {
  person: 'bg-blue-100 text-blue-800',
  organization: 'bg-yellow-100 text-yellow-800',
  location: 'bg-green-100 text-green-800',
  date: 'bg-purple-100 text-purple-800',
  money: 'bg-red-100 text-red-800',
};

export function DocumentCard({ document }: DocumentCardProps) {
  const { title, caseName, author, tags, contentPreview, entities, lastUpdated, iaSuggestion, icon, iconColor } = document;

  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full">
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center mb-3">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <FontAwesomeIcon icon={iconMap[icon]} className={clsx(iconColor, 'text-sm')} />
          </div>
          <div>
            <h3 className="text-base font-semibold text-secondary-900 leading-tight">{title}</h3>
            <p className="text-xs text-secondary-500">{caseName}</p>
          </div>
        </div>

        <div className="flex items-center mb-2">
          <img src={author.avatarUrl} alt={`Avatar de ${author.name}`} className="h-6 w-6 rounded-full mr-2" />
          <span className="text-sm text-secondary-800">{author.name}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map(tag => (
            <span key={tag.text} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}>
              {tag.text}
            </span>
          ))}
        </div>

        <div className="mb-3">
          <div className="bg-secondary-50 p-3 rounded text-xs text-secondary-600 h-24 overflow-hidden relative">
            <p className="whitespace-pre-wrap">{contentPreview}</p>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-secondary-50 to-transparent"></div>
          </div>
        </div>
        
        <div className="mb-3">
          <p className="text-xs text-secondary-500 mb-1">Entidades detectadas:</p>
          <div className="flex flex-wrap gap-1">
            {entities.map(entity => (
              <span key={entity.value} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', entityTagStyles[entity.type] || 'bg-gray-100 text-gray-800')}>
                {entity.value}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-100 pt-3 mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-xs text-secondary-500">Última act.: {lastUpdated}</p>
            <div className="flex space-x-2">
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Ver"><FontAwesomeIcon icon={faEye} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Descargar"><FontAwesomeIcon icon={faDownload} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Compartir"><FontAwesomeIcon icon={faShareAlt} /></button>
              <button className="text-secondary-500 hover:text-accent-600" aria-label="Más opciones"><FontAwesomeIcon icon={faEllipsisV} /></button>
            </div>
          </div>
        </div>
      </div>

      {iaSuggestion && (
        <div className="p-3 border-t bg-accent-50 border-accent-100">
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-2">
              <FontAwesomeIcon icon={faLightbulb} className="text-accent-600 text-sm" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-secondary-700">{iaSuggestion}</p>
              <button className="text-xs text-accent-600 hover:text-accent-800 font-medium mt-1">Ver sugerencia</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/documents/DocumentFilters.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useRedux';

// Definimos el tipo para los filtros de documentos
export type DocumentFiltersState = {
  searchTerm: string;
  documentType: string;
  caseId: string;
};

type DocumentFiltersProps = {
  filters: DocumentFiltersState;
  onFilterChange: (filters: DocumentFiltersState) => void;
};

export function DocumentFilters({ filters, onFilterChange }: DocumentFiltersProps) {
  const cases = useAppSelector((state) => state.dashboard.recentCases);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-custom mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Búsqueda por texto */}
        <div>
          <label htmlFor="searchTerm" className="block text-xs font-medium text-secondary-700 mb-1">
            Buscar
          </label>
          <div className="relative">
            <input
              type="text"
              id="searchTerm"
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleChange}
              placeholder="Buscar por título, contenido..."
              className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        {/* Filtro por Tipo de Documento */}
        <div>
          <label htmlFor="documentType" className="block text-xs font-medium text-secondary-700 mb-1">
            Tipo de Documento
          </label>
          <select
            id="documentType"
            name="documentType"
            value={filters.documentType}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los tipos</option>
            <option value="Contrato">Contrato</option>
            <option value="Escrito judicial">Escrito judicial</option>
            <option value="Informe">Informe</option>
            <option value="Demanda">Demanda</option>
          </select>
        </div>

        {/* Filtro por Caso Relacionado */}
        <div>
          <label htmlFor="caseId" className="block text-xs font-medium text-secondary-700 mb-1">
            Caso Relacionado
          </label>
          <select
            id="caseId"
            name="caseId"
            value={filters.caseId}
            onChange={handleChange}
            className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white"
          >
            <option value="">Todos los casos</option>
            {/* CORRECCIÓN: Usamos c.title en lugar de c.caseName */}
            {cases.map(c => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </select>
        </div>

        {/* Botón para limpiar filtros */}
        <div>
          <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">
            Acción
          </label>
          <button 
            onClick={() => onFilterChange({ searchTerm: '', documentType: '', caseId: '' })}
            className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium"
          >
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/agenda/AgendaCalendar.tsx */}
{/*
  import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faGavel, faUsers, faFileSignature, faBell } from '@fortawesome/free-solid-svg-icons'; // <-- Importamos los iconos
import { clsx } from 'clsx';
import type { CalendarEventState } from '../../../features/dashboard/dashboardSlice';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'; // <-- Importamos el tipo IconDefinition

type AgendaCalendarProps = {
  events: CalendarEventState[];
  onDayClick: (date: Date) => void;
};

// --- CORRECCIÓN: Definimos el iconMap aquí ---
const iconMap: { [key: string]: IconDefinition } = {
  audiencia: faGavel,
  reunion: faUsers,
  plazo: faFileSignature,
  recordatorio: faBell,
};
// ---------------------------------------------

const generateCalendarDays = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = [];
  const startDayOfWeek = (firstDayOfMonth.getDay() + 6) % 7; // Lunes = 0
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDayOfWeek; i > 0; i--) {
    daysInMonth.push({ day: prevMonthLastDay - i + 1, isCurrentMonth: false, date: new Date(year, month - 1, prevMonthLastDay - i + 1) });
  }

  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const isToday = i === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
    daysInMonth.push({ day: i, isCurrentMonth: true, isToday, date: new Date(year, month, i) });
  }

  const gridCells = 42; // 6 semanas * 7 días
  const daysToAdd = gridCells - daysInMonth.length;
  for (let i = 1; i <= daysToAdd; i++) {
    daysInMonth.push({ day: i, isCurrentMonth: false, date: new Date(year, month + 1, i) });
  }

  return daysInMonth;
};

export function AgendaCalendar({ events, onDayClick }: AgendaCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date('2025-07-15'));
  const monthName = currentDate.toLocaleString('es-ES', { month: 'long' });
  const year = currentDate.getFullYear();
  const days = generateCalendarDays(currentDate);

  const eventsByDate = events.reduce((acc, event) => {
    const dateKey = new Date(event.date).toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(event);
    return acc;
  }, {} as Record<string, CalendarEventState[]>);

  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-lg font-semibold capitalize">{monthName} {year}</h2>
        <div className="flex items-center space-x-2">
          <button className="text-secondary-500 hover:text-secondary-700 p-2" aria-label="Mes anterior"><FontAwesomeIcon icon={faChevronLeft} /></button>
          <button className="text-secondary-500 hover:text-secondary-700 p-2" aria-label="Mes siguiente"><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 text-center py-2 border-b border-t border-secondary-200">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(day => (
          <div key={day} className="text-sm font-medium text-secondary-500">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7">
        {days.map((dayInfo, index) => {
          const dayEvents = eventsByDate[dayInfo.date.toDateString()] || [];
          return (
            <div key={index} className={clsx("border-b border-r border-secondary-200 p-2 h-28", { 'text-secondary-400 bg-secondary-50': !dayInfo.isCurrentMonth })}>
              <div className={clsx('w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-secondary-100', { 'bg-accent-600 text-white': dayInfo.isToday })}>
                {dayInfo.day}
              </div>
              <div className="mt-1 space-y-1">
                {dayEvents.slice(0, 2).map(event => (
                  <div key={event.id} className={clsx('text-xs rounded p-1 truncate', event.typeColor)}>
                    <FontAwesomeIcon icon={iconMap[event.type]} className="mr-1" />
                    {event.title}
                  </div>
                ))}
                {dayEvents.length > 2 && (
                  <div className="text-xs text-secondary-500">+ {dayEvents.length - 2} más</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/agenda/UpcomingEventsPanel.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGavel, faUsers, faFileSignature, faBell, faEye, faEdit, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { CalendarEventState } from '../../../features/dashboard/dashboardSlice';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const iconMap: { [key: string]: IconDefinition } = {
  audiencia: faGavel,
  reunion: faUsers,
  plazo: faFileSignature,
  recordatorio: faBell,
};

const EventItem = ({ event }: { event: CalendarEventState }) => (
  <div className="bg-white rounded-lg shadow-custom overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-px">
    <div className="p-4">
      <div className="flex items-center mb-3">
        <div className={clsx('p-2 rounded-full mr-3', event.typeColor)}>
          <FontAwesomeIcon icon={iconMap[event.type]} className="text-sm" />
        </div>
        <div>
          <h4 className="text-base font-semibold text-secondary-900">{event.title}</h4>
          <p className="text-sm text-secondary-500">{event.caseName}</p>
        </div>
      </div>
      <div className="px-4 mb-3">
        <p className="text-xs text-secondary-500 mb-1">Fecha y hora</p>
        <p className="text-sm font-medium">{new Date(event.date).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</p>
      </div>
      <div className="border-t border-secondary-100 pt-3 px-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-secondary-500">Recordatorio: 30 min antes</p>
          <div className="flex space-x-2">
            <button className="text-secondary-500 hover:text-accent-600 p-1"><FontAwesomeIcon icon={faEye} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-1"><FontAwesomeIcon icon={faEdit} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-1"><FontAwesomeIcon icon={faEllipsisV} /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

type UpcomingEventsPanelProps = {
  events: CalendarEventState[];
  selectedDate: Date;
};

export function UpcomingEventsPanel({ events, selectedDate }: UpcomingEventsPanelProps) {
  const titleDate = selectedDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'long' });
  const isToday = selectedDate.toDateString() === new Date().toDateString();

  return (
    <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-secondary-200">
        <h3 className="text-lg font-semibold text-secondary-900">
          Eventos para {isToday ? 'hoy' : 'el'} {titleDate}
        </h3>
      </div>
      <div className="divide-y divide-secondary-200 flex-1 overflow-y-auto">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className="p-4">
              <EventItem event={event} />
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-secondary-500">
            <p>No hay eventos para este día.</p>
          </div>
        )}
      </div>
      <div className="p-3 bg-secondary-50 border-t border-secondary-200 text-center">
        <a href="#" className="text-sm text-accent-600 hover:text-accent-700 font-medium">
          Ver todos los eventos
        </a>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/agenda/NewEventForm.tsx */}
{/*
  import { useState } from 'react';
import { Button } from '../../ui/Button';
import { useAppSelector } from '../../../hooks/useRedux';
import type { CalendarEventState } from '../../../features/dashboard/dashboardSlice';

// El tipo de los datos que el formulario enviará
type EventFormData = Omit<CalendarEventState, 'id'>;

type NewEventFormProps = {
  onCancel: () => void;
  onSubmit: (eventData: EventFormData) => void;
};

export function NewEventForm({ onCancel, onSubmit }: NewEventFormProps) {
  const cases = useAppSelector((state) => state.dashboard.recentCases);
  
  const [formData, setFormData] = useState<Partial<EventFormData>>({
    title: '',
    type: 'reunion',
    caseName: '',
    date: '',
    duration: '',
    location: '',
    participants: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.type) {
      alert('Por favor, complete los campos obligatorios.');
      return;
    }
    // Casteamos a EventFormData asumiendo que los campos requeridos están presentes
    onSubmit(formData as EventFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-secondary-700 mb-1">Título del Evento *</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-secondary-700 mb-1">Tipo de Evento *</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
              <option value="reunion">Reunión</option>
              <option value="audiencia">Audiencia</option>
              <option value="plazo">Plazo</option>
              <option value="recordatorio">Recordatorio</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="caseName" className="block text-sm font-medium text-secondary-700 mb-1">Caso Relacionado</label>
          <select id="caseName" name="caseName" value={formData.caseName} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-accent-500">
            <option value="">Ninguno</option>
            {cases.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-secondary-700 mb-1">Fecha *</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
          </div>
          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-secondary-700 mb-1">Hora</label>
            <input type="text" id="duration" name="duration" value={formData.duration} onChange={handleChange} placeholder="ej: 10:00 a 11:30" className="w-full border border-secondary-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent-500" />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-3 mt-6">
        <Button type="button" variant="secondary" onClick={onCancel}>Cancelar</Button>
        <Button type="submit" variant="primary">Crear Evento</Button>
      </div>
    </form>
  );
}

*/}

{/* RUTA: /src/components/features/agenda/AgendaFilters.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from '../../../hooks/useRedux';

// Definimos el tipo para los filtros de la agenda
export type AgendaFiltersState = {
  eventType: string;
  caseName: string;
  searchTerm: string;
};

type AgendaFiltersProps = {
  filters: AgendaFiltersState;
  onFilterChange: (filters: AgendaFiltersState) => void;
};

export function AgendaFilters({ filters, onFilterChange }: AgendaFiltersProps) {
  const cases = useAppSelector((state) => state.dashboard.recentCases);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: value,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-custom mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label htmlFor="eventType" className="block text-xs font-medium text-secondary-700 mb-1">Tipo de Evento</label>
          <select id="eventType" name="eventType" value={filters.eventType} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="">Todos los tipos</option>
            <option value="audiencia">Audiencia</option>
            <option value="reunion">Reunión</option>
            <option value="plazo">Plazo</option>
            <option value="recordatorio">Recordatorio</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="caseName" className="block text-xs font-medium text-secondary-700 mb-1">Caso Relacionado</label>
          <select id="caseName" name="caseName" value={filters.caseName} onChange={handleChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="">Todos los casos</option>
            {cases.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
          </select>
        </div>
        
        <div>
          <label htmlFor="searchTerm" className="block text-xs font-medium text-secondary-700 mb-1">Buscar</label>
          <div className="relative">
            <input type="text" id="searchTerm" name="searchTerm" value={filters.searchTerm} onChange={handleChange} placeholder="Buscar evento..." className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500" />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
            </div>
          </div>
        </div>

        <div>
           <label className="block text-xs font-medium text-secondary-700 mb-1 opacity-0">Acción</label>
          <button onClick={() => onFilterChange({ eventType: '', caseName: '', searchTerm: ''})} className="w-full bg-white hover:bg-secondary-50 text-secondary-700 border border-secondary-300 px-4 py-2 rounded-md text-sm font-medium">
            Limpiar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/ai-assistant/ChatHistoryPanel.tsx */}
{/*
  import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

export function ChatHistoryPanel() {
  const conversations = useAppSelector((state) => state.dashboard.conversations);
  const activeConversationId = 'conv-1'; // Placeholder

  return (
    <div className="w-64 bg-white border-r border-secondary-200 flex-shrink-0 overflow-y-auto hidden md:block">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Conversaciones</h2>
          <button className="text-accent-600 hover:text-accent-700"><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <div className="relative mb-4">
          <input type="text" placeholder="Buscar..." className="w-full border border-secondary-300 rounded-md pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500" />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-secondary-400" />
          </div>
        </div>
        <div className="space-y-1">
          {conversations.map(conv => (
            <div key={conv.id} className={clsx('p-2 rounded-md cursor-pointer transition-colors', { 'bg-accent-100 border-l-4 border-accent-500': conv.id === activeConversationId, 'hover:bg-secondary-100': conv.id !== activeConversationId })}>
              <h3 className="text-sm font-medium truncate">{conv.title}</h3>
              <p className="text-xs text-secondary-500 truncate">{conv.preview}</p>
              <p className="text-xs text-secondary-400 mt-1">{conv.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/ai-assistant/ChatInterface.tsx */}
{/*
  import { useState, useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser, faPaperPlane, faPaperclip, faMicrophone, faCog, faShareAlt, faDownload, faEllipsisV, faGavel, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import { addChatMessage, setAiThinking, type ChatMessageState } from '../../../features/dashboard/dashboardSlice';

// Sub-componente para una única burbuja de chat
const ChatBubble = ({ message }: { message: ChatMessageState }) => {
  const isIA = message.sender === 'ia';
  
  const bubbleClasses = clsx('chat-message max-w-xl p-4 rounded-lg', {
    'bg-secondary-200 self-end': !isIA,
    'bg-white self-start shadow-sm': isIA,
  });

  const AuthorIcon = () => (
    <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', { 'bg-accent-100 text-accent-700': isIA, 'bg-secondary-200': !isIA })}>
      <FontAwesomeIcon icon={isIA ? faRobot : faUser} />
    </div>
  );

  if (message.type === 'thinking') {
    return (
      <div className="flex items-start gap-3">
        <AuthorIcon />
        <div className="p-4">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin text-secondary-500" />
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('flex items-start gap-3', { 'flex-row-reverse': !isIA })}>
      <AuthorIcon />
      <div className={bubbleClasses}>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }} />
        {message.type === 'citation' && message.citation && (
          <div className="mt-3 border-t border-secondary-200 pt-2">
            <a href="#" className="text-xs text-accent-600 hover:underline flex items-center">
              <FontAwesomeIcon icon={faGavel} className="mr-2" />
              <span>Fuente: {message.citation.title} ({message.citation.source})</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export function ChatInterface() {
  const chatHistory = useAppSelector((state) => state.dashboard.chatHistory);
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState('');
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  // Efecto para hacer scroll al final de la conversación
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // 1. Añade el mensaje del usuario
    dispatch(addChatMessage({ sender: 'user', type: 'standard', text: userInput }));
    
    // 2. Muestra el indicador de "pensando"
    dispatch(setAiThinking(true));
    
    // 3. Simula una respuesta de la IA después de un retraso
    setTimeout(() => {
      const aiResponse: Omit<ChatMessageState, 'id'> = {
        sender: 'ia',
        type: 'standard',
        text: `He recibido tu consulta sobre: "${userInput}". Estoy procesando la información para darte la mejor respuesta posible.`
      };
      dispatch(addChatMessage(aiResponse));
    }, 1500);

    setUserInput('');
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-secondary-50">
      <div className="bg-white border-b border-secondary-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-secondary-900">Asistente Legal IA</h1>
            <p className="text-sm text-secondary-500">Consulta sobre despido injustificado</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faShareAlt} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faDownload} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faEllipsisV} /></button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {chatHistory.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="bg-white border-t border-secondary-200 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="w-full border border-secondary-300 rounded-md px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
              placeholder="Escribe tu consulta legal..."
              rows={2}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faPaperclip} /></button>
              <button onClick={handleSendMessage} className="bg-accent-600 hover:bg-accent-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-secondary-500">Puedes usar <kbd className="px-1 py-0.5 bg-secondary-100 border border-secondary-300 rounded text-xs">@caso</kbd> para vincular a un caso.</p>
            <div className="flex items-center space-x-2">
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faMicrophone} /></button>
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faCog} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/ai-assistant/ReferencesPanel.tsx */}
{/*
  import { useState } from 'react';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faGavel, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { ReferenceItemState } from '../../../features/dashboard/dashboardSlice';

// Sub-componente para una tarjeta de referencia
const ReferenceCard = ({ item }: { item: ReferenceItemState }) => (
  <div className="bg-white border border-secondary-200 rounded-md p-3 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent-300">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-blue-100 p-1 rounded-full mr-2">
        <FontAwesomeIcon icon={faBook} className="text-blue-600 text-xs" />
      </div>
      <div>
        <p className="text-sm font-medium text-secondary-900">{item.title}</p>
        <p className="text-xs text-secondary-600 mb-1">{item.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-secondary-500">Relevancia: {item.relevance}</span>
          <button className="text-xs text-accent-600 hover:text-accent-700 font-medium">Ver</button>
        </div>
      </div>
    </div>
  </div>
);

export function ReferencesPanel() {
  const references = useAppSelector((state) => state.dashboard.references);
  const [activeTab, setActiveTab] = useState<'normativa' | 'jurisprudencia' | 'casos'>('normativa');

  const activeReferences = references[activeTab];

  return (
    <div className="w-72 bg-white border-l border-secondary-200 flex-shrink-0 overflow-y-auto hidden lg:block">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4 text-secondary-900">Referencias</h2>
        
        <div className="mb-4 border-b border-secondary-200">
          <div className="flex">
            <button onClick={() => setActiveTab('normativa')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'normativa', 'tab-inactive': activeTab !== 'normativa' })}>Normativa</button>
            <button onClick={() => setActiveTab('jurisprudencia')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'jurisprudencia', 'tab-inactive': activeTab !== 'jurisprudencia' })}>Jurisprudencia</button>
            <button onClick={() => setActiveTab('casos')} className={clsx('py-2 px-3 text-sm font-medium', { 'tab-active': activeTab === 'casos', 'tab-inactive': activeTab !== 'casos' })}>Casos</button>
          </div>
        </div>

        <div className="space-y-3">
          {activeReferences.length > 0 ? (
            activeReferences.map(item => <ReferenceCard key={item.id} item={item} />)
          ) : (
            <p className="text-sm text-secondary-500 text-center py-4">No hay referencias de este tipo.</p>
          )}
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/doc-generator/TemplateCard.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular, faClock, faCopy } from '@fortawesome/free-regular-svg-icons';
import { clsx } from 'clsx';
import type { TemplateState } from '../../../features/dashboard/dashboardSlice';
import { Button } from '../../ui/Button';

type TemplateCardProps = {
  template: TemplateState;
  onCreateClick: (template: TemplateState) => void; // <-- Nueva prop
};

export function TemplateCard({ template, onCreateClick }: TemplateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-px flex flex-col h-full">
      {template.isNew && (
        <div className="absolute top-2 right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full z-10">
          Nuevo
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-md font-semibold text-secondary-900">{template.title}</h3>
            <p className="text-xs text-secondary-500">{template.description}</p>
          </div>
          <button className="text-secondary-400 hover:text-yellow-500">
            <FontAwesomeIcon icon={template.isFavorite ? faStarSolid : faStarRegular} className={clsx({ 'text-yellow-400': template.isFavorite })} />
          </button>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {template.tags.map(tag => (
            <span key={tag.text} className={clsx('text-xs font-medium px-2 py-0.5 rounded-full', tag.color)}>
              {tag.text}
            </span>
          ))}
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center text-xs text-secondary-500 mb-3">
            <span><FontAwesomeIcon icon={faClock} className="mr-1" /> {template.timeToComplete}</span>
            <span><FontAwesomeIcon icon={faCopy} className="mr-1" /> {template.usageCount} usos</span>
          </div>
          
          {/* El botón ahora llama a la función que recibe por props */}
          <Button onClick={() => onCreateClick(template)} variant="primary" size="sm" className="w-full">
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> Crear
          </Button>
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/doc-generator/GeneratorControls.tsx */}
{/*
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';

// Definimos los tipos para los filtros y las pestañas
export type TemplateFilters = {
  searchTerm: string;
  category: string;
  type: string;
};

type GeneratorControlsProps = {
  filters: TemplateFilters;
  activeTab: string;
  onFilterChange: (filters: TemplateFilters) => void;
  onTabChange: (tabName: string) => void;
};

export function GeneratorControls({ filters, activeTab, onFilterChange, onTabChange }: GeneratorControlsProps) {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mb-4 md:mb-0">
          <div className="relative">
            <input 
              type="text" 
              name="searchTerm"
              value={filters.searchTerm}
              onChange={handleInputChange}
              placeholder="Buscar plantilla..." 
              className="w-full md:w-64 px-4 py-2 rounded-md border border-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-500 text-sm" 
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-400 hover:text-secondary-600">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <select name="category" value={filters.category} onChange={handleInputChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
              <option value="">Todas las categorías</option>
              <option value="Civil">Civil</option>
              <option value="Laboral">Laboral</option>
              <option value="Familia">Familia</option>
              <option value="Comercial">Comercial</option>
              <option value="Penal">Penal</option>
            </select>
            <select name="type" value={filters.type} onChange={handleInputChange} className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
              <option value="">Todos los tipos</option>
              <option value="Contrato">Contratos</option>
              <option value="Demanda">Demandas</option>
              <option value="Recurso">Recursos</option>
            </select>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {/* La lógica de ordenamiento se puede añadir aquí en el futuro */}
          <select className="w-full border border-secondary-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 bg-white">
            <option value="populares">Más populares</option>
            <option value="recientes">Más recientes</option>
            <option value="alfabetico">Alfabético</option>
          </select>
        </div>
      </div>
      <div className="border-b border-secondary-200">
        <div className="flex overflow-x-auto">
          {['Plantillas', 'Recientes', 'Guardados', 'Compartidos'].map(tab => (
            <button 
              key={tab} 
              onClick={() => onTabChange(tab)}
              className={clsx('py-2 px-4 text-sm font-medium', {
                'border-b-2 border-accent-600 text-accent-600': activeTab === tab,
                'border-b-2 border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300': activeTab !== tab
              })}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

*/}

{/* RUTA: /src/components/features/doc-generator/DocumentGeneratorModal.tsx */}
{/*
  import { Modal } from '../../ui/Modal';
import { Button } from '../../ui/Button';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faExclamationTriangle, faFileAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import type { TemplateState } from '../../../features/dashboard/dashboardSlice';

// --- Tipos ---
type DocumentGeneratorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  template: TemplateState | null;
};

// --- Sub-componentes para mantener el código organizado ---

// Panel Izquierdo: Parámetros del Documento
const DocumentParameters = () => {
  const cases = useAppSelector((state) => state.dashboard.recentCases);
  return (
    <div>
      <div className="form-group">
        <label className="form-label" htmlFor="document-title">Título del documento</label>
        <input type="text" id="document-title" className="form-input" placeholder="Contrato de Arrendamiento - [Nombre]" defaultValue="Contrato de Arrendamiento - Pérez" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="document-case">Caso relacionado</label>
        <select id="document-case" className="form-select">
          <option value="">Seleccionar caso</option>
          {cases.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Partes del contrato</label>
        <div className="mb-3">
          <label className="form-label text-sm" htmlFor="arrendador">Arrendador</label>
          <input type="text" id="arrendador" className="form-input" placeholder="Nombre completo" defaultValue="Juan Pérez Rodríguez" />
        </div>
        <div>
          <label className="form-label text-sm" htmlFor="arrendatario">Arrendatario</label>
          <input type="text" id="arrendatario" className="form-input" placeholder="Nombre completo" defaultValue="María González López" />
        </div>
      </div>
       <div className="bg-accent-50 p-3 rounded-md mb-4">
          <div className="flex items-start">
              <div className="flex-shrink-0 bg-accent-100 p-1 rounded-full mr-2">
                  <FontAwesomeIcon icon={faLightbulb} className="text-accent-600 text-xs" />
              </div>
              <div>
                  <p className="text-sm font-medium mb-1">Sugerencia proactiva:</p>
                  <p className="text-sm text-secondary-700">Se recomienda incluir cláusula sobre depósito de garantía.</p>
              </div>
          </div>
      </div>
    </div>
  );
};

// Panel Derecho: Vista Previa del Documento
const DocumentPreview = () => (
    <div className="document-preview relative bg-secondary-50 p-4 border border-secondary-200 rounded-md">
        <div className="watermark">BORRADOR</div>
        <div className="header text-right mb-4">
            <p>Montevideo, <span className="entity entity-date">15 de julio de 2025</span></p>
        </div>
        <h1 className="text-center font-bold text-lg mb-4">CONTRATO DE ARRENDAMIENTO</h1>
        <p>En la ciudad de <span className="entity entity-location">Montevideo</span>, a los <span className="entity entity-date">15 días del mes de julio de 2025</span>...</p>
        <p>Entre <span className="entity entity-person">Juan Pérez Rodríguez</span>... y <span className="entity entity-person">María González López</span>...</p>
    </div>
);


// --- Componente Principal del Modal ---
export function DocumentGeneratorModal({ isOpen, onClose, template }: DocumentGeneratorModalProps) {
  if (!isOpen || !template) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-secondary-900 bg-opacity-70 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-secondary-900">Crear: {template.title}</h2>
                <button onClick={onClose} className="text-secondary-500 hover:text-secondary-700">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <div className="p-6 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DocumentParameters />
                    <div>
                        <h3 className="text-md font-medium text-secondary-900 mb-3">Vista previa</h3>
                        <DocumentPreview />
                    </div>
                </div>
            </div>
            <div className="flex justify-end space-x-3 p-4 border-t bg-secondary-50">
                <Button variant="secondary" onClick={onClose}>Cancelar</Button>
                <Button variant="primary">Generar documento</Button>
            </div>
        </div>
    </div>
  );
}

*/}

6. PRÓXIMOS PASOSEl último paso solicitado fue implementar la funcionalidad del botón "Crear" en las tarjetas de la página del Generador de Escritos. Esto implica manejar el estado de apertura de un modal y pasarle la información de la plantilla seleccionada.7. INSTRUCCIONES PARA LA INTERACCIÓNRitmo: Procede estrictamente paso a paso. Espera la confirmación del usuario antes de avanzar.Claridad: Proporciona siempre los comandos exactos y los bloques de código completos y comentados.Enfoque en Funcionalidad: Recuerda que el objetivo final es la aplicación funcional. La creación de componentes es un paso necesario, pero la guía debe estar siempre orientada a completar la tarea o feature que el usuario plantee.