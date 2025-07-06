import { Card } from '../../ui/Card';
import { useAppSelector } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser, faPaperPlane, faExpandAlt, faLock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import type { ChatMessageState } from '../../../features/dashboard/dashboardSlice';

// Sub-componente para una burbuja de chat
const ChatBubble = ({ message }: { message: ChatMessageState }) => {
  const isIA = message.sender === 'ia';
  
  const bubbleStyles = isIA
    ? 'bg-accent-100'
    : 'bg-secondary-100 ml-10';
  
  const icon = isIA ? faRobot : faUser;
  const senderName = isIA ? 'Asistente IA' : 'Usted';
  const iconContainerStyles = isIA
    ? 'bg-primary-100 text-primary-700'
    : 'bg-secondary-200 text-secondary-700';

  return (
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center mr-2', iconContainerStyles)}>
          <FontAwesomeIcon icon={icon} />
        </div>
        <p className="text-xs text-secondary-500 font-medium">{senderName}</p>
      </div>
      <div className={clsx('rounded-lg p-3 text-sm', bubbleStyles)}>
        <p dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br/>') }} />
        {message.actions && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.actions.map(action => (
              <button key={action} className="bg-primary-100 hover:bg-primary-200 text-primary-800 text-xs py-1 px-3 rounded-md transition duration-300">
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export function AIAssistant() {
  const chatHistory = useAppSelector((state) => state.dashboard.chatHistory);

  return (
    // CORRECIÓN: Se eliminó la clase 'h-full' para permitir que la altura se ajuste al contenido.
    <Card className="p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-secondary-900">Asistente IA</h2>
        <button className="text-secondary-500 hover:text-secondary-700" aria-label="Expandir chat">
          <FontAwesomeIcon icon={faExpandAlt} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto pr-2">
        {chatHistory.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
      </div>

      <div className="mt-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Escribe tu consulta aquí..."
            className="w-full border border-secondary-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-accent-600 hover:text-accent-800" aria-label="Enviar mensaje">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
        <div className="flex items-center justify-between mt-3 text-xs text-secondary-500">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faLock} className="mr-1" />
            <span>Datos cifrados</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
            <span>Ley 18.331 compliant</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
