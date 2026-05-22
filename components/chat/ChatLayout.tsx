'use client';

import { useChat } from '@/hooks/useChat';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { BotMessageSquare } from 'lucide-react';

export function ChatLayout() {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto h-[600px] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-4 bg-white border-b border-slate-100">
        <div className="flex items-center justify-center h-10 w-10 bg-blue-100 rounded-full">
          <BotMessageSquare className="text-blue-600" size={20} />
        </div>
        <div>
          <h2 className="font-semibold text-slate-800">AI Assistant</h2>
          <p className="text-xs text-slate-500">Selalu siap membantu Anda</p>
        </div>
      </div>

      {/* Body */}
      <MessageList messages={messages} isLoading={isLoading} />

      {/* Footer */}
      <ChatInput onSend={sendMessage} isLoading={isLoading} />
    </div>
  );
}
