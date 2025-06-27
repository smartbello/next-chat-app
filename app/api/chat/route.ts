import { NextRequest, NextResponse } from 'next/server';
import { findBestMatch, getFallbackResponse } from '../../utils/questionMatcher';
import { PREDEFINED_QUESTIONS } from '../../data/questions';
import { ChatRequest, ChatResponse, ChatError, HealthCheckResponse } from '../../types/api';
import { ERROR_MESSAGES } from '../../constants/chat';
import { validateAndSanitizeInput, containsHarmfulContent } from '../../utils/validation';

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponse | ChatError>> {
  try {
    const body = await request.json() as ChatRequest;
    const { message } = body;

    // Validate and sanitize input
    const validation = validateAndSanitizeInput(message);
    if (!validation.isValid) {
      return NextResponse.json(
        { error: validation.error || ERROR_MESSAGES.INVALID_MESSAGE } as ChatError,
        { status: 400 }
      );
    }

    const sanitizedMessage = validation.sanitized!;

    // Check for harmful content
    if (containsHarmfulContent(sanitizedMessage)) {
      return NextResponse.json(
        { error: 'Input contains potentially harmful content' } as ChatError,
        { status: 400 }
      );
    }

    // Find the best matching response
    const bestMatch = findBestMatch(sanitizedMessage, PREDEFINED_QUESTIONS);
    
    if (bestMatch) {
      return NextResponse.json({ 
        response: bestMatch,
        source: 'predefined'
      } as ChatResponse);
    }

    // Fallback to rule-based response
    const fallbackResponse = getFallbackResponse(sanitizedMessage);
    
    return NextResponse.json({ 
      response: fallbackResponse,
      source: 'rule-based'
    } as ChatResponse);

  } catch (error) {
    return NextResponse.json(
      { error: ERROR_MESSAGES.INTERNAL_ERROR } as ChatError,
      { status: 500 }
    );
  }
}

// Optional: Add GET method for health check
export async function GET(): Promise<NextResponse<HealthCheckResponse>> {
  return NextResponse.json({ 
    status: 'healthy',
    message: 'Chat API is running',
    availableQuestions: PREDEFINED_QUESTIONS.length
  } as HealthCheckResponse);
} 