// Chat configuration constants
export const CHAT_CONFIG = {
  MAX_MESSAGE_LENGTH: 1000,
} as const;

// Response categories for better organization
export const RESPONSE_CATEGORIES = {
  GREETINGS: 'greetings',
  CONVERSATIONAL: 'conversational',
  TECHNICAL: 'technical',
  BUSINESS: 'business',
  SUPPORT: 'support',
  INDUSTRY: 'industry',
  COMPARISON: 'comparison',
  CUSTOMIZATION: 'customization',
  DATA: 'data',
  PARTNERSHIPS: 'partnerships'
} as const;

// Keyword mappings for agent identification
export const KEYWORD_MAPPINGS = {
  'eva': 'eligibility verification agent',
  'cam': 'claims processing agent', 
  'phil': 'payment posting agent',
  'eligibility': 'eligibility verification agent',
  'claims': 'claims processing agent',
  'payment': 'payment posting agent',
  'agent': 'Thoughtful AI agents',
  'benefits': 'benefits of using agents',
  'verification': 'eligibility verification agent',
  'processing': 'claims processing agent',
  'posting': 'payment posting agent'
} as const;

// Quick suggestions for user interface
export const QUICK_SUGGESTIONS = [
  'Tell me about EVA',
  'What does CAM do?',
  'How does PHIL work?',
  'Benefits of Thoughtful AI'
] as const;

// Default welcome message
export const DEFAULT_WELCOME_MESSAGE = "Hello! I'm your Thoughtful AI customer support assistant. How can I help you today?";

// Error messages
export const ERROR_MESSAGES = {
  INVALID_MESSAGE: 'Invalid message format',
  EMPTY_MESSAGE: 'Message cannot be empty',
  INTERNAL_ERROR: 'Internal server error',
  API_ERROR: 'I\'m sorry, I encountered an error. Please try again.',
} as const; 