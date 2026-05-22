import { useEffect, useRef } from 'react';
import { Message } from '@/hooks/useChat';
import { MessageBubble } from './MessageBubble';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isLoading]);

  return (
    <div 
      ref={scrollRef}
      className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
    >
      {messages.length === 0 ? (
        <div className="flex h-full items-center justify-center text-slate-400 text-sm">
          Mulai percakapan dengan AI...
        </div>
      ) : (
        messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))
      )}
      
      {isLoading && (
        <div className="flex w-full items-center gap-2 mb-4 justify-start">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 border border-slate-200">
            <span className="animate-pulse text-slate-500 text-xs">...</span>
          </div>
          <div className="bg-slate-100 rounded-2xl rounded-bl-none px-4 py-2 text-sm text-slate-500 animate-pulse">
            Mengetik...
          </div>
        </div>
      )}
    </div>
  );
}
