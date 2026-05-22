import { Message } from '@/hooks/useChat';
import { cn } from '@/lib/utils';
import { User, Bot } from 'lucide-react';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn("flex w-full items-end gap-2 mb-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
          <Bot size={18} className="text-slate-600" />
        </div>
      )}
      
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-slate-100 text-slate-900 rounded-bl-none border border-slate-200"
        )}
      >
        {message.content}
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 border border-blue-200">
          <User size={18} className="text-blue-600" />
        </div>
      )}
    </div>
  );
}
