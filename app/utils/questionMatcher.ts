import { QuestionAnswer } from '../types/chat';

const KEYWORD_MAPPINGS = {
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

export function findBestMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  const normalizedQuestion = userQuestion.toLowerCase().trim();
  
  // Try exact matches first
  const exactMatch = findExactMatch(normalizedQuestion, questions);
  if (exactMatch) return exactMatch;

  // Try partial matches
  const partialMatch = findPartialMatch(normalizedQuestion, questions);
  if (partialMatch) return partialMatch;

  // Try keyword matches
  const keywordMatch = findKeywordMatch(normalizedQuestion, questions);
  if (keywordMatch) return keywordMatch;

  return null;
}

function findExactMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  for (const qa of questions) {
    const qaQuestion = qa.question.toLowerCase();
    if (userQuestion === qaQuestion) {
      return qa.answer;
    }
    
    // Only do partial matching for words longer than 3 characters
    if (userQuestion.length > 3) {
      if (qaQuestion.includes(userQuestion) || userQuestion.includes(qaQuestion)) {
        return qa.answer;
      }
    }
  }
  return null;
}

function findPartialMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  for (const qa of questions) {
    const qaQuestion = qa.question.toLowerCase();
    const keyPhrases = qaQuestion.split(' ')
      .filter(word => word.length > 3)
      .map(word => word.replace(/[^\w]/g, ''));
    
    const hasKeyPhrases = keyPhrases.some(phrase => 
      userQuestion.includes(phrase)
    );
    
    if (hasKeyPhrases) {
      return qa.answer;
    }
  }
  return null;
}

function findKeywordMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  for (const [keyword, topic] of Object.entries(KEYWORD_MAPPINGS)) {
    if (userQuestion.includes(keyword)) {
      const relevantQA = questions.find(qa => 
        qa.question.toLowerCase().includes(topic.toLowerCase()) ||
        qa.answer.toLowerCase().includes(topic.toLowerCase())
      );
      if (relevantQA) return relevantQA.answer;
    }
  }
  return null;
}

export function getFallbackResponse(userQuestion: string): string {
  const question = userQuestion.toLowerCase();
  
  // Handle common conversational responses
  if (question.includes('okay') || question.includes('ok') || question.includes('k')) {
    return "Great! Is there anything specific about Thoughtful AI's automation agents you'd like to know?";
  }
  
  if (question.includes('yes') || question === 'y') {
    return "Perfect! What would you like to learn about? I can help with information about EVA, CAM, PHIL, or any other aspects of our healthcare automation solutions.";
  }
  
  if (question.includes('no') || question === 'n') {
    return "No problem! Feel free to ask if you have any questions about Thoughtful AI's automation agents later.";
  }
  
  if (question.includes('thanks') || question.includes('thank you') || question.includes('thx')) {
    return "You're welcome! Let me know if you need any other information about Thoughtful AI's solutions.";
  }
  
  if (question.includes('bye') || question.includes('goodbye') || question.includes('see you')) {
    return "Goodbye! Feel free to return if you have more questions about Thoughtful AI's healthcare automation solutions.";
  }
  
  // Contextual responses based on question content
  if (question.includes('hello') || question.includes('hi') || question.includes('hey')) {
    return "Hello! I'm here to help you with questions about Thoughtful AI's healthcare automation solutions. What would you like to know about our agents?";
  }
  
  if (question.includes('help') || question.includes('support')) {
    return "I'm here to help! I can answer questions about Thoughtful AI's automation agents like EVA (eligibility verification), CAM (claims processing), and PHIL (payment posting). What specific information are you looking for?";
  }
  
  if (question.includes('healthcare') || question.includes('medical')) {
    return "Great question about healthcare! Thoughtful AI specializes in healthcare automation solutions. Our agents help streamline processes like eligibility verification, claims processing, and payment posting. Which area interests you most?";
  }
  
  if (question.includes('automation') || question.includes('ai') || question.includes('artificial intelligence')) {
    return "Thoughtful AI focuses on intelligent automation for healthcare processes. Our AI agents can handle complex tasks like verifying patient eligibility, processing claims, and managing payments. Would you like to learn more about any specific agent?";
  }
  
  if (question.includes('cost') || question.includes('price') || question.includes('pricing')) {
    return "I understand you're asking about costs, but I don't have specific pricing information in my knowledge base. I'd recommend reaching out to our sales team for detailed pricing information about our automation solutions.";
  }
  
  if (question.includes('contact') || question.includes('email') || question.includes('phone')) {
    return "For contact information or to speak with our team, I'd recommend visiting our website or reaching out through our official channels. I'm here to help with questions about our automation agents and their capabilities.";
  }
  
  if (question.includes('demo') || question.includes('trial') || question.includes('test')) {
    return "I'd be happy to help you understand how our automation agents work! While I can't arrange demos directly, I can explain how EVA, CAM, and PHIL can benefit your healthcare processes. What would you like to know?";
  }
  
  // Generic helpful response for actual questions
  return "That's an interesting question! While I don't have specific information about that topic in my knowledge base, I'm here to help you with questions about Thoughtful AI's healthcare automation agents. Our solutions include EVA for eligibility verification, CAM for claims processing, and PHIL for payment posting. Is there anything specific about these agents you'd like to learn more about?";
} 