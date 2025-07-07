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
