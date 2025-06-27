import { QuestionAnswer } from '../types/chat';
import { KEYWORD_MAPPINGS } from '../constants/chat';

/**
 * Find exact match between user question and predefined questions
 */
export function findExactMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  const normalizedUserQuestion = userQuestion.toLowerCase().trim();
  
  for (const qa of questions) {
    const normalizedQuestion = qa.question.toLowerCase().trim();
    if (normalizedUserQuestion === normalizedQuestion) {
      return qa.answer;
    }
  }
  
  return null;
}

/**
 * Find partial match using similarity scoring
 */
export function findPartialMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  const normalizedUserQuestion = userQuestion.toLowerCase().trim();
  let bestMatch: { question: QuestionAnswer; score: number } | null = null;
  
  for (const qa of questions) {
    const normalizedQuestion = qa.question.toLowerCase().trim();
    
    // Check if user question contains key parts of the predefined question
    const questionWords = normalizedQuestion.split(/\s+/);
    const userWords = normalizedUserQuestion.split(/\s+/);
    
    let score = 0;
    for (const word of questionWords) {
      if (word.length > 3 && userWords.some(userWord => userWord.includes(word) || word.includes(userWord))) {
        score += 1;
      }
    }
    
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { question: qa, score };
    }
  }
  
  return bestMatch && bestMatch.score >= 2 ? bestMatch.question.answer : null;
}

/**
 * Find match based on keyword mappings
 */
export function findKeywordMatch(userQuestion: string, questions: QuestionAnswer[]): string | null {
  const normalizedUserQuestion = userQuestion.toLowerCase().trim();
  
  for (const [keyword, mappedTerm] of Object.entries(KEYWORD_MAPPINGS)) {
    if (normalizedUserQuestion.includes(keyword)) {
      // Find question that contains the mapped term
      for (const qa of questions) {
        const normalizedQuestion = qa.question.toLowerCase();
        if (normalizedQuestion.includes(mappedTerm.toLowerCase())) {
          return qa.answer;
        }
      }
    }
  }
  
  return null;
} 