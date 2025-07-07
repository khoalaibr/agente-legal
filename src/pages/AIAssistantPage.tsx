import { ChatHistoryPanel } from '../components/features/ai-assistant/ChatHistoryPanel';
import { ChatInterface } from '../components/features/ai-assistant/ChatInterface';
import { ReferencesPanel } from '../components/features/ai-assistant/ReferencesPanel'; // <-- Importamos el nuevo componente

export function AIAssistantPage() {
  return (
    <div className="flex flex-1 overflow-hidden h-full">
      <ChatHistoryPanel />
      <ChatInterface />
      <ReferencesPanel />
    </div>
  );
}
