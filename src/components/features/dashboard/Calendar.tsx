import { useState } from 'react';
import { Card } from '../../ui/Card';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { CalendarEventState } from '../../../features/dashboard/dashboardSlice';

const eventTypeStyles: { [key: string]: string } = {
  audiencia: 'bg-red-500',
  reunion: 'bg-blue-500',
  vencimiento: 'bg-green-500',
};

const EventItem = ({ event }: { event: CalendarEventState }) => (
  <div className="flex items-start">
    <div className={clsx('w-2 h-2 rounded-full mt-1.5 mr-3 flex-shrink-0', eventTypeStyles[event.type])}></div>
    <div>
      <p className="text-sm font-medium text-secondary-800">{event.title}</p>
      <p className="text-xs text-secondary-500">{new Date(event.date).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  </div>
);

export function Calendar() {
  const events = useAppSelector((state) => state.dashboard.calendarEvents);
  const [currentDate, setCurrentDate] = useState(new Date('2025-05-30')); // Fijamos la fecha para que coincida con el diseño

  const monthName = currentDate.toLocaleString('es-ES', { month: 'long' });
  const year = currentDate.getFullYear();

  // Lógica simple para renderizar una cuadrícula de calendario (no funcional, solo visual)
  const days = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
  const dates = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2;
    if (day > 0 && day <= 31) return day;
    return null;
  });

  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-secondary-900">Calendario</h2>
        <div className="flex items-center space-x-2">
          <button className="text-secondary-500 hover:text-secondary-700" aria-label="Mes anterior">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <span className="text-sm font-medium capitalize">{monthName} {year}</span>
          <button className="text-secondary-500 hover:text-secondary-700" aria-label="Mes siguiente">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-secondary-500 mb-4">
        {days.map(day => <div key={day}>{day}</div>)}
        {dates.map((date, i) => (
          <div key={i} className={clsx('py-1', { 'text-secondary-400': i < 3 || i > 33 })}>
            {date}
          </div>
        ))}
      </div>

      <h3 className="font-medium text-sm mb-3 text-secondary-800">Próximos eventos</h3>
      <div className="space-y-3">
        {events.map(event => <EventItem key={event.id} event={event} />)}
      </div>
    </Card>
  );
}
