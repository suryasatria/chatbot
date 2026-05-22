import { useState } from 'react';

export type Role = 'user' | 'assistant';

export interface Message {
  id: string;
  role: Role;
  content: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (content: string) => {
    if (!content.trim()) return;

    // Tambahkan pesan user ke state
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Simulasi pemanggilan API ke route lokal kita
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: content }),
      });

      const data = await response.json();

      // Simulasi efek delay/typing agar terasa lebih natural
      setTimeout(() => {
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.reply || 'Maaf, terjadi kesalahan.',
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);

    } catch (error) {
      console.error('Error sending message:', error);
      setIsLoading(false);
    }
  };

  return {
    messages,
    isLoading,
    sendMessage,
  };
};
