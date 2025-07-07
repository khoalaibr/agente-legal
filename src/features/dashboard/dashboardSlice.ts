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
    actions?: string[];
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
    { id: 'chat-1', sender: 'ia', text: 'Buenos días Dr. Martínez. Tiene 3 tareas urgentes para hoy y una audiencia programada para mañana a las 10:30 AM. ¿En qué puedo ayudarle?' },
    { id: 'chat-2', sender: 'user', text: 'Necesito buscar jurisprudencia reciente sobre responsabilidad civil por daños en accidentes de tránsito para el caso Rodríguez.' },
    { id: 'chat-3', sender: 'ia', text: 'Encontré 5 sentencias recientes relevantes. La más significativa es SCJ 123/2023 que establece nuevos criterios para determinar la responsabilidad objetiva en estos casos. Según el artículo 1324 del Código Civil uruguayo...', actions: ['Ver sentencias', 'Generar informe', 'Aplicar al caso'] },
  ],
  recentDocuments: [
    { id: 'doc-1', title: 'Contrato de Arrendamiento', caseName: 'Caso Pérez - Sucesión', author: { name: 'Dra. Ana García', avatarUrl: 'https://randomuser.me/api/portraits/women/33.jpg' }, tags: [{ text: 'Contrato', color: 'bg-blue-100 text-blue-800' }, { text: 'Arrendamiento', color: 'bg-sky-100 text-sky-800' }], contentPreview: 'En la ciudad de Montevideo, a los 10 días del mes de julio de 2025, entre: Por una parte, MARÍA PÉREZ... y por otra parte, JUAN GÓMEZ...', entities: [ { type: 'person', value: 'María Pérez' }, { type: 'person', value: 'Juan Gómez' }, { type: 'date', value: '10/07/2025' }, ], lastUpdated: 'Hace 10 minutos', iaSuggestion: 'Se ha detectado que falta la cláusula de actualización de alquiler según IPC.', icon: 'file-contract', iconColor: 'text-blue-600' },
    { id: 'doc-2', title: 'Escrito de Contestación', caseName: 'Constructora Horizonte - Contrato', author: { name: 'Dr. Carlos Rodríguez', avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg' }, tags: [{ text: 'Escrito judicial', color: 'bg-red-100 text-red-800' }, { text: 'Contestación', color: 'bg-rose-100 text-rose-800' }], contentPreview: 'JUZGADO LETRADO DE PRIMERA INSTANCIA EN LO CIVIL DE 5º TURNO. CONSTRUCTORA HORIZONTE S.A. c/ MUNICIPALIDAD DE CIUDAD DEL ESTE...', entities: [ { type: 'organization', value: 'Constructora Horizonte S.A.' }, { type: 'person', value: 'Juan Martínez' }, ], lastUpdated: 'Ahora mismo', iaSuggestion: 'Se ha encontrado jurisprudencia reciente que podría fortalecer sus argumentos.', icon: 'file-alt', iconColor: 'text-red-600' },
    { id: 'doc-3', title: 'Demanda por Despido Injustificado', caseName: 'Fernández - Despido', author: { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' }, tags: [{ text: 'Escrito judicial', color: 'bg-red-100 text-red-800' }, { text: 'Demanda', color: 'bg-orange-100 text-orange-800' }, { text: 'Laboral', color: 'bg-pink-100 text-pink-800' }], contentPreview: 'JUZGADO LETRADO DEL TRABAJO DE 3º TURNO. FERNÁNDEZ, LUCÍA c/ TEXTILES DEL SUR S.A. DEMANDA LABORAL POR DESPIDO INJUSTIFICADO...', entities: [ { type: 'person', value: 'Lucía Fernández' }, { type: 'organization', value: 'Textiles del Sur S.A.' }, { type: 'money', value: '$85,000' }, ], lastUpdated: 'Hace 2 días', icon: 'file-invoice', iconColor: 'text-green-600' },
  ],
  // Datos de eventos actualizados con typeColor
  calendarEvents: [
    { id: 'event-1', title: 'Audiencia Preliminar', caseName: 'Constructora Horizonte - Contrato', date: '2025-07-15T10:00:00', duration: '10:00 a 11:30', type: 'audiencia', typeColor: 'bg-red-100 text-red-800', icon: 'gavel', location: 'Juzgado Civil 5º Turno - Sala 302', participants: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' }, { name: 'Dr. Rodríguez', avatarUrl: 'https://randomuser.me/api/portraits/men/45.jpg' } ], iaSuggestion: '¡Evento crítico hoy! Se recomienda revisar la documentación necesaria.' },
    { id: 'event-2', title: 'Reunión con Cliente', caseName: 'González - Divorcio', date: '2025-07-15T15:00:00', duration: '15:00 a 16:00', type: 'reunion', typeColor: 'bg-blue-100 text-blue-800', icon: 'users', location: 'Oficina - Sala de Reuniones 2', participants: [ { name: 'Dr. Martínez', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' }, { name: 'Carlos González', avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg' } ], iaSuggestion: 'Se ha encontrado nueva jurisprudencia relevante para discutir en la reunión.' },
    { id: 'event-3', title: 'Vencimiento Plazo', caseName: 'Pérez - Sucesión', date: '2025-07-16T23:59:59', duration: 'Todo el día', type: 'plazo', typeColor: 'bg-green-100 text-green-800', icon: 'file-signature' },
    { id: 'event-4', title: 'Audiencia de Prueba', caseName: 'Rodríguez c/ Seguros Confianza', date: '2025-07-18T09:30:00', duration: '09:30 a 12:00', type: 'audiencia', typeColor: 'bg-red-100 text-red-800', icon: 'gavel', location: 'Juzgado Civil 5º Turno - Sala 301' },
  ]
};

// --- Tipos de Payload para las Acciones ---
type AddTaskPayload = Omit<TaskState, 'id' | 'completed'>;
type AddCasePayload = Omit<CaseState, 'id' | 'deadlineInDays' | 'lastUpdated' | 'entities' | 'iaSuggestion' | 'activeCollaborators' | 'statusColor'>;
type AddEventPayload = Omit<CalendarEventState, 'id'>;

// Mapeo de estados a colores para los badges
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
            entities: [], // La IA los generaría después
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
    }
  },
});

export const { toggleTaskCompletion, addTask, addCase, addCalendarEvent } = dashboardSlice.actions;

export default dashboardSlice.reducer;