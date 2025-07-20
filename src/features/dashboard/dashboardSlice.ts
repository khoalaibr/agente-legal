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
