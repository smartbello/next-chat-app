export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuestionAnswer {
  question: string;
  answer: string;
} 