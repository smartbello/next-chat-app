import { forwardRef, useImperativeHandle, useRef } from 'react';

interface ChatInputProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onSendMessageDirect?: (message: string) => void;
  isLoading: boolean;
  suggestions: readonly string[];
  autoSendSuggestions?: boolean;
}

export interface ChatInputRef {
  focus: () => void;
}

const ChatInput = forwardRef<ChatInputRef, ChatInputProps>(({ 
  inputValue, 
  onInputChange, 
  onSendMessage, 
  onSendMessageDirect,
  isLoading, 
  suggestions,
  autoSendSuggestions = false
}, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus()
  }));

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (autoSendSuggestions && onSendMessageDirect) {
      onSendMessageDirect(suggestion);
    } else {
      onInputChange(suggestion);
      setTimeout(() => textareaRef.current?.focus(), 0);
    }
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white flex-shrink-0">
      {autoSendSuggestions && (
        <div className="mb-3 flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={isLoading}
              className={`px-3 py-1 text-xs rounded-full transition-colors bg-blue-100 text-blue-700 hover:bg-blue-200 border border-blue-300 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <div className="flex space-x-3">
        <div className="flex-1 relative">
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Or type your own question and press Enter..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            rows={1}
            disabled={isLoading}
          />
        </div>
        <button
          onClick={onSendMessage}
          disabled={!inputValue.trim() || isLoading}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        >
          Send
        </button>
      </div>
      
      {!autoSendSuggestions && (
        <div className="mt-3 flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              disabled={isLoading}
              className={`px-3 py-1 text-xs rounded-full transition-colors bg-gray-100 text-gray-700 hover:bg-gray-200 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

ChatInput.displayName = 'ChatInput';

export default ChatInput; 