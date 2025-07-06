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
