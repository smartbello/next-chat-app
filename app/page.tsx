'use client';

import ChatHeader from './components/ChatHeader';
import ChatMessage from './components/ChatMessage';
import LoadingIndicator from './components/LoadingIndicator';
import ChatInput from './components/ChatInput';
import { useChat } from './hooks/useChat';

export default function Home() {
  const {
    messages,
    inputValue,
    setInputValue,
    isLoading,
    sendMessage,
    messagesEndRef,
    inputRef,
    quickSuggestions
  } = useChat();

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col overflow-hidden">
      <ChatHeader />

      {/* Main chat area */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-4 flex flex-col min-h-0">
        <div className="bg-white rounded-lg shadow-lg flex-1 flex flex-col min-h-0">
          {/* Scrollable messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 min-h-0">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            
            {isLoading && <LoadingIndicator />}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <ChatInput
            ref={inputRef}
            inputValue={inputValue}
            onInputChange={setInputValue}
            onSendMessage={sendMessage}
            isLoading={isLoading}
            suggestions={quickSuggestions}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 flex-shrink-0">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Powered by Thoughtful AI • Built with Next.js
          </p>
        </div>
      </footer>
    </div>
  );
}
