import { useState, useRef, useEffect } from 'react';
import { Message } from '../types/chat';
import { findBestMatch, getFallbackResponse } from '../utils/questionMatcher';
import { THOUGHTFUL_AI_DATA } from '../data/thoughtfulAI';
import { ChatInputRef } from '../components/ChatInput';

const QUICK_SUGGESTIONS = [
  'Tell me about EVA',
  'What does CAM do?',
  'How does PHIL work?',
  'Benefits of Thoughtful AI'
] as const;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your Thoughtful AI customer support assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<ChatInputRef>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateResponse = async (userQuestion: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const bestMatch = findBestMatch(userQuestion, THOUGHTFUL_AI_DATA.questions);
    return bestMatch || getFallbackResponse(userQuestion);
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateResponse(inputValue);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I encountered an error. Please try again.",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  return {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    sendMessage,
    messagesEndRef,
    inputRef,
    quickSuggestions: QUICK_SUGGESTIONS
  };
} 