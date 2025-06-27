import { RESPONSE_RULES } from '../data/responses';

/**
 * Find matching rule-based response for user input
 */
export function findRuleBasedResponse(userInput: string): string | null {
  const normalizedInput = userInput.toLowerCase().trim();
  
  for (const rule of RESPONSE_RULES) {
    for (const pattern of rule.patterns) {
      if (normalizedInput.includes(pattern.toLowerCase())) {
        return rule.response;
      }
    }
  }
  
  return null;
}

/**
 * Get fallback response when no specific match is found
 */
export function getFallbackResponse(userInput: string): string {
  const normalizedInput = userInput.toLowerCase().trim();
  
  // Check for general healthcare terms
  if (normalizedInput.includes('healthcare') || normalizedInput.includes('medical')) {
    return "Great question about healthcare! Thoughtful AI specializes in healthcare automation solutions. Our agents help streamline processes like eligibility verification, claims processing, and payment posting. Which area interests you most?";
  }
  
  // Check for automation/AI terms
  if (normalizedInput.includes('automation') || normalizedInput.includes('ai') || normalizedInput.includes('artificial intelligence')) {
    return "Thoughtful AI focuses on intelligent automation for healthcare processes. Our AI agents can handle complex tasks like verifying patient eligibility, processing claims, and managing payments. Would you like to learn more about any specific agent?";
  }
  
  // Default fallback
  return "I'm here to help you learn about Thoughtful AI's healthcare automation solutions! I can answer questions about our agents like EVA (eligibility verification), CAM (claims processing), and PHIL (payment posting). What would you like to know?";
} 