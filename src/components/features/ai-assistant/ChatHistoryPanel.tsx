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
