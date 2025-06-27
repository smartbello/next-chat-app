import { QuestionAnswer } from '../types/chat';
import { findExactMatch, findPartialMatch, findKeywordMatch } from './matchers';
import { findRuleBasedResponse, getFallbackResponse as getRuleFallbackResponse } from './ruleHandler';

/**
 * Find the best matching response for a user question
 * Uses a hierarchical approach: exact match -> partial match -> keyword match -> rule-based -> fallback
 */
export function findBestMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  // 1. Try exact match first
  const exactMatch = findExactMatch(userQuestion, questions);
  if (exactMatch) return exactMatch;
  
  // 2. Try partial match
  const partialMatch = findPartialMatch(userQuestion, questions);
  if (partialMatch) return partialMatch;
  
  // 3. Try keyword match
  const keywordMatch = findKeywordMatch(userQuestion, questions);
  if (keywordMatch) return keywordMatch;
  
  // 4. Try rule-based response
  const ruleMatch = findRuleBasedResponse(userQuestion);
  if (ruleMatch) return ruleMatch;
  
  // 5. Return null to trigger fallback
  return null;
}

/**
 * Get fallback response when no specific match is found
 */
export function getFallbackResponse(userQuestion: string): string {
  return getRuleFallbackResponse(userQuestion);
} 