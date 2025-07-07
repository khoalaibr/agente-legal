import { useState, useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/useRedux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faUser, faPaperPlane, faPaperclip, faMicrophone, faCog, faShareAlt, faDownload, faEllipsisV, faGavel, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { clsx } from 'clsx';
import { addChatMessage, setAiThinking, type ChatMessageState } from '../../../features/dashboard/dashboardSlice';

// Sub-componente para una única burbuja de chat
const ChatBubble = ({ message }: { message: ChatMessageState }) => {
  const isIA = message.sender === 'ia';
  
  const bubbleClasses = clsx('chat-message max-w-xl p-4 rounded-lg', {
    'bg-secondary-200 self-end': !isIA,
    'bg-white self-start shadow-sm': isIA,
  });

  const AuthorIcon = () => (
    <div className={clsx('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', { 'bg-accent-100 text-accent-700': isIA, 'bg-secondary-200': !isIA })}>
      <FontAwesomeIcon icon={isIA ? faRobot : faUser} />
    </div>
  );

  if (message.type === 'thinking') {
    return (
      <div className="flex items-start gap-3">
        <AuthorIcon />
        <div className="p-4">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin text-secondary-500" />
        </div>
      </div>
    );
  }

  return (
    <div className={clsx('flex items-start gap-3', { 'flex-row-reverse': !isIA })}>
      <AuthorIcon />
      <div className={bubbleClasses}>
        <p className="text-sm" dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br />') }} />
        {message.type === 'citation' && message.citation && (
          <div className="mt-3 border-t border-secondary-200 pt-2">
            <a href="#" className="text-xs text-accent-600 hover:underline flex items-center">
              <FontAwesomeIcon icon={faGavel} className="mr-2" />
              <span>Fuente: {message.citation.title} ({message.citation.source})</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export function ChatInterface() {
  const chatHistory = useAppSelector((state) => state.dashboard.chatHistory);
  const dispatch = useAppDispatch();
  const [userInput, setUserInput] = useState('');
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  // Efecto para hacer scroll al final de la conversación
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // 1. Añade el mensaje del usuario
    dispatch(addChatMessage({ sender: 'user', type: 'standard', text: userInput }));
    
    // 2. Muestra el indicador de "pensando"
    dispatch(setAiThinking(true));
    
    // 3. Simula una respuesta de la IA después de un retraso
    setTimeout(() => {
      const aiResponse: Omit<ChatMessageState, 'id'> = {
        sender: 'ia',
        type: 'standard',
        text: `He recibido tu consulta sobre: "${userInput}". Estoy procesando la información para darte la mejor respuesta posible.`
      };
      dispatch(addChatMessage(aiResponse));
    }, 1500);

    setUserInput('');
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-secondary-50">
      <div className="bg-white border-b border-secondary-200 p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-secondary-900">Asistente Legal IA</h1>
            <p className="text-sm text-secondary-500">Consulta sobre despido injustificado</p>
          </div>
          <div className="flex space-x-2">
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faShareAlt} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faDownload} /></button>
            <button className="text-secondary-500 hover:text-accent-600 p-2"><FontAwesomeIcon icon={faEllipsisV} /></button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        {chatHistory.map(message => (
          <ChatBubble key={message.id} message={message} />
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="bg-white border-t border-secondary-200 p-4">
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <textarea
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              className="w-full border border-secondary-300 rounded-md px-4 py-3 pr-24 focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
              placeholder="Escribe tu consulta legal..."
              rows={2}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faPaperclip} /></button>
              <button onClick={handleSendMessage} className="bg-accent-600 hover:bg-accent-700 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-secondary-500">Puedes usar <kbd className="px-1 py-0.5 bg-secondary-100 border border-secondary-300 rounded text-xs">@caso</kbd> para vincular a un caso.</p>
            <div className="flex items-center space-x-2">
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faMicrophone} /></button>
              <button className="text-secondary-500 hover:text-accent-600"><FontAwesomeIcon icon={faCog} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
