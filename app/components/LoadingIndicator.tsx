import { UI_CONSTANTS } from '../constants/chat';

export default function LoadingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-3">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          <div 
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div 
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>
      </div>
    </div>
  );
} 