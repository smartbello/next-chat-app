export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  response: string;
  source: 'predefined' | 'rule-based';
}

export interface ChatError {
  error: string;
}

export interface HealthCheckResponse {
  status: string;
  message: string;
  availableQuestions: number;
} 