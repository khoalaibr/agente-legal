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
