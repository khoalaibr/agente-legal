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
