import { CHAT_CONFIG } from '../constants/chat';

/**
 * Validate and sanitize user input
 */
export function validateAndSanitizeInput(input: unknown): { isValid: boolean; sanitized?: string; error?: string } {
  // Check if input exists and is a string
  if (!input || typeof input !== 'string') {
    return { isValid: false, error: 'Input must be a non-empty string' };
  }

  // Trim whitespace
  const trimmed = input.trim();
  
  // Check if empty after trimming
  if (trimmed.length === 0) {
    return { isValid: false, error: 'Input cannot be empty' };
  }

  // Check length limit
  if (trimmed.length > CHAT_CONFIG.MAX_MESSAGE_LENGTH) {
    return { 
      isValid: false, 
      error: `Input too long. Maximum ${CHAT_CONFIG.MAX_MESSAGE_LENGTH} characters allowed` 
    };
  }

  return { isValid: true, sanitized: trimmed };
}

/**
 * Check if a string contains potentially harmful content
 */
export function containsHarmfulContent(input: string): boolean {
  const harmfulPatterns = [
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,
  ];

  return harmfulPatterns.some(pattern => pattern.test(input));
} 