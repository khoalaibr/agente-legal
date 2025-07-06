import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid'; // Necesitaremos una librería para generar IDs únicos

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
  title:string;
  description: string;
  status: 'Activo' | 'En proceso' | 'Pendiente';
  lastUpdated: string;
  nextDeadline: string;
  assignedUsers: { name: string; avatarUrl: string }[];
}

export interface TaskState {
  id: string;
  text: string;
  priority: 'Urgente' | 'Media' | 'Normal';
  completed: boolean;
}

export interface ChatMessageState {
    id: string;
    sender: 'ia' | 'user';
    text: string;
    actions?: string[];
}

export interface DocumentState {
  id: string;
  name: string;
  icon: 'file-alt' | 'file-pdf' | 'file-excel';
  case: string;
  date: string;
  type: 'Escrito' | 'Informe' | 'Planilla' | 'Contrato';
  typeColor: string;
}

export interface CalendarEventState {
    id: string;
    title: string;
    date: string;
    type: 'audiencia' | 'reunion' | 'vencimiento';
}

interface DashboardState {
  stats: StatCardState[];
  recentCases: CaseState[];
  pendingTasks: TaskState[];
  chatHistory: ChatMessageState[];
  recentDocuments: DocumentState[];
  calendarEvents: CalendarEventState[];
}

// --- Estado Inicial ---
const initialState: DashboardState = {
  // ... (el resto del estado inicial no cambia)
  stats: [
    { title: 'Casos Activos', value: '12', iconName: 'briefcase', iconBg: 'bg-primary-100', iconColor: 'text-primary-700', change: '+2 desde el mes pasado', changeColor: 'text-green-500' },
    { title: 'Plazos Próximos', value: '5', iconName: 'calendarDay', iconBg: 'bg-red-100', iconColor: 'text-red-700', change: 'En los próximos 7 días' },
    { title: 'Documentos Pendientes', value: '8', iconName: 'fileAlt', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-700', change: '+3 desde la semana pasada', changeColor: 'text-red-500' },
    { title: 'Horas Facturables', value: '32.5', iconName: 'clock', iconBg: 'bg-green-100', iconColor: 'text-green-700', change: 'Este mes' },
  ],
  recentCases: [
    { id: 'case-1', title: 'Rodríguez c/ Seguros Confianza', description: 'Responsabilidad Civil - Accidente de Tránsito', status: 'Activo', lastUpdated: '28/05/2025', nextDeadline: '15/06/2025', assignedUsers: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' }, { name: 'Dra. Gomez', avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg' } ] },
    { id: 'case-2', title: 'Pérez - Sucesión', description: 'Derecho Sucesorio', status: 'En proceso', lastUpdated: '25/05/2025', nextDeadline: '10/06/2025', assignedUsers: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' } ] },
    { id: 'case-3', title: 'Constructora Horizonte - Contrato', description: 'Derecho Contractual', status: 'Pendiente', lastUpdated: '20/05/2025', nextDeadline: '05/06/2025', assignedUsers: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' }, { name: 'Dr. Suarez', avatarUrl: 'https://randomuser.me/api/portraits/women/28.jpg' } ] },
  ],
  pendingTasks: [
    { id: 'task-1', text: 'Preparar escrito para caso Rodríguez', priority: 'Urgente', completed: false },
    { id: 'task-2', text: 'Revisar contrato Constructora Horizonte', priority: 'Media', completed: false },
    { id: 'task-3', text: 'Contactar testigos caso Rodríguez', priority: 'Normal', completed: true },
    { id: 'task-4', text: 'Preparar documentación sucesión Pérez', priority: 'Media', completed: false },
    { id: 'task-5', text: 'Actualizar registro de horas facturables', priority: 'Normal', completed: false },
  ],
  chatHistory: [
    { id: 'chat-1', sender: 'ia', text: 'Buenos días Dr. Martínez. Tiene 3 tareas urgentes para hoy y una audiencia programada para mañana a las 10:30 AM. ¿En qué puedo ayudarle?' },
    { id: 'chat-2', sender: 'user', text: 'Necesito buscar jurisprudencia reciente sobre responsabilidad civil por daños en accidentes de tránsito para el caso Rodríguez.' },
    { id: 'chat-3', sender: 'ia', text: 'Encontré 5 sentencias recientes relevantes. La más significativa es SCJ 123/2023 que establece nuevos criterios para determinar la responsabilidad objetiva en estos casos. Según el artículo 1324 del Código Civil uruguayo...', actions: ['Ver sentencias', 'Generar informe', 'Aplicar al caso'] },
  ],
  recentDocuments: [
    { id: 'doc-1', name: 'Escrito_Contestacion_Demanda.docx', icon: 'file-alt', case: 'Rodríguez c/ Seguros Confianza', date: '28/05/2025', type: 'Escrito', typeColor: 'bg-blue-100 text-blue-800' },
    { id: 'doc-2', name: 'Informe_Pericial.pdf', icon: 'file-pdf', case: 'Rodríguez c/ Seguros Confianza', date: '26/05/2025', type: 'Informe', typeColor: 'bg-red-100 text-red-800' },
    { id: 'doc-3', name: 'Inventario_Bienes_Sucesion.xlsx', icon: 'file-excel', case: 'Pérez - Sucesión', date: '25/05/2025', type: 'Planilla', typeColor: 'bg-green-100 text-green-800' },
    { id: 'doc-4', name: 'Contrato_Servicios_Revisado.docx', icon: 'file-alt', case: 'Constructora Horizonte - Contrato', date: '22/05/2025', type: 'Contrato', typeColor: 'bg-purple-100 text-purple-800' },
  ],
  calendarEvents: [
      { id: 'event-1', title: 'Audiencia - Rodríguez c/ Seguros Confianza', date: '2025-06-01T10:30:00', type: 'audiencia' },
      { id: 'event-2', title: 'Reunión con cliente - Pérez', date: '2025-06-03T15:00:00', type: 'reunion' },
      { id: 'event-3', title: 'Vencimiento plazo - Constructora Horizonte', date: '2025-06-05T23:59:59', type: 'vencimiento' },
  ]
};

// --- Creación del Slice ---
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
    // Nueva acción para añadir una tarea
    addTask: (state, action: PayloadAction<{ text: string; priority: 'Urgente' | 'Media' | 'Normal' }>) => {
      const newTask: TaskState = {
        id: uuidv4(), // Genera un ID único
        text: action.payload.text,
        priority: action.payload.priority,
        completed: false,
      };
      state.pendingTasks.unshift(newTask); // Añade la nueva tarea al principio de la lista
    },
  },
});

export const { toggleTaskCompletion, addTask } = dashboardSlice.actions; // Exportamos la nueva acción

export default dashboardSlice.reducer;
