import { RESPONSE_CATEGORIES } from '../constants/chat';

// Rule-based response system
export const RESPONSE_RULES = [
  // Time-based greetings
  {
    category: RESPONSE_CATEGORIES.GREETINGS,
    patterns: ['good morning'],
    response: "Good morning! I'm here to help you with questions about Thoughtful AI's healthcare automation solutions. What would you like to know about our agents today?"
  },
  {
    category: RESPONSE_CATEGORIES.GREETINGS,
    patterns: ['good afternoon'],
    response: "Good afternoon! I'm here to help you with questions about Thoughtful AI's healthcare automation solutions. What would you like to know about our agents today?"
  },
  {
    category: RESPONSE_CATEGORIES.GREETINGS,
    patterns: ['good evening'],
    response: "Good evening! I'm here to help you with questions about Thoughtful AI's healthcare automation solutions. What would you like to know about our agents today?"
  },
  {
    category: RESPONSE_CATEGORIES.GREETINGS,
    patterns: ['good night'],
    response: "Good night! Feel free to return tomorrow if you have questions about Thoughtful AI's healthcare automation solutions. Have a great evening!"
  },
  {
    category: RESPONSE_CATEGORIES.GREETINGS,
    patterns: ['hello', 'hi', 'hey'],
    response: "Hello! I'm here to help you with questions about Thoughtful AI's healthcare automation solutions. What would you like to know about our agents?"
  },

  // Conversational responses
  {
    category: RESPONSE_CATEGORIES.CONVERSATIONAL,
    patterns: ['okay', 'ok', 'k'],
    response: "Great! Is there anything specific about Thoughtful AI's automation agents you'd like to know?"
  },
  {
    category: RESPONSE_CATEGORIES.CONVERSATIONAL,
    patterns: ['yes'],
    response: "Perfect! What would you like to learn about? I can help with information about EVA, CAM, PHIL, or any other aspects of our healthcare automation solutions."
  },
  {
    category: RESPONSE_CATEGORIES.CONVERSATIONAL,
    patterns: ['no'],
    response: "No problem! Feel free to ask if you have any questions about Thoughtful AI's automation agents later."
  },
  {
    category: RESPONSE_CATEGORIES.CONVERSATIONAL,
    patterns: ['thanks', 'thank you', 'thx'],
    response: "You're welcome! Let me know if you need any other information about Thoughtful AI's solutions."
  },
  {
    category: RESPONSE_CATEGORIES.CONVERSATIONAL,
    patterns: ['bye', 'goodbye', 'see you'],
    response: "Goodbye! Feel free to return if you have more questions about Thoughtful AI's healthcare automation solutions."
  },

  // Chatbot self-questions
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['who are you', 'what are you'],
    response: "I'm a customer support assistant for Thoughtful AI, designed to help you learn about our healthcare automation solutions. I can answer questions about our agents like EVA, CAM, and PHIL."
  },
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['can you help', 'what can you do'],
    response: "I can help you learn about Thoughtful AI's healthcare automation agents! I know about EVA (eligibility verification), CAM (claims processing), and PHIL (payment posting). What would you like to know?"
  },
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['how does this work', 'how do you work'],
    response: "I'm an AI assistant trained to help with questions about Thoughtful AI's solutions. I can provide information about our healthcare automation agents and their capabilities. Just ask me anything about EVA, CAM, or PHIL!"
  },

  // Company information
  {
    category: RESPONSE_CATEGORIES.BUSINESS,
    patterns: ['what is thoughtful ai', 'tell me about thoughtful ai'],
    response: "Thoughtful AI specializes in healthcare automation solutions. We provide AI-powered agents that streamline critical healthcare processes like eligibility verification, claims processing, and payment posting to improve efficiency and reduce errors."
  },
  {
    category: RESPONSE_CATEGORIES.BUSINESS,
    patterns: ['where are you located', 'where is thoughtful ai'],
    response: "I don't have specific location information in my knowledge base, but I'd recommend visiting our website or contacting our team directly for detailed company information."
  },

  // Technical questions
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['how does ai', 'how does artificial intelligence'],
    response: "Our AI agents use advanced machine learning to automate healthcare processes. They can understand complex workflows, make intelligent decisions, and handle tasks that traditionally required manual intervention. Would you like to learn about a specific agent?"
  },
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['integration', 'api', 'connect'],
    response: "Our automation agents are designed to integrate with existing healthcare systems and workflows. For specific integration details and technical requirements, I'd recommend contacting our technical team."
  },
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['security', 'compliance', 'hipaa'],
    response: "Security and compliance are top priorities for our healthcare automation solutions. Our agents are designed to meet healthcare industry standards and regulations. For detailed security information, please contact our compliance team."
  },

  // Implementation and deployment
  {
    category: RESPONSE_CATEGORIES.BUSINESS,
    patterns: ['how long to implement', 'implementation time', 'setup time'],
    response: "Implementation timelines can vary depending on your specific requirements and existing systems. I'd recommend speaking with our implementation team for a detailed timeline based on your needs."
  },
  {
    category: RESPONSE_CATEGORIES.BUSINESS,
    patterns: ['training', 'learning curve', 'difficult'],
    response: "Our automation agents are designed to be user-friendly and require minimal training. They integrate seamlessly with existing workflows to reduce the learning curve for your team."
  },

  // Industry-specific terms
  {
    category: RESPONSE_CATEGORIES.INDUSTRY,
    patterns: ['eligibility', 'benefits verification'],
    response: "Eligibility verification is a critical healthcare process that our EVA agent automates. It helps verify patient coverage and benefits in real-time, reducing claim rejections and improving accuracy."
  },
  {
    category: RESPONSE_CATEGORIES.INDUSTRY,
    patterns: ['claims', 'claim processing'],
    response: "Claims processing involves submitting and managing healthcare claims. Our CAM agent streamlines this process, improving accuracy and accelerating reimbursements."
  },
  {
    category: RESPONSE_CATEGORIES.INDUSTRY,
    patterns: ['payment posting', 'reconciliation'],
    response: "Payment posting involves reconciling payments to patient accounts. Our PHIL agent automates this process, ensuring fast and accurate payment reconciliation."
  },
  {
    category: RESPONSE_CATEGORIES.INDUSTRY,
    patterns: ['revenue cycle', 'revenue cycle management'],
    response: "Revenue cycle management encompasses the entire financial process from patient registration to final payment. Our agents help optimize this cycle through automation of key processes."
  },

  // Comparison questions
  {
    category: RESPONSE_CATEGORIES.COMPARISON,
    patterns: ['difference between', 'compare', 'vs', 'versus'],
    response: "Each of our agents specializes in different aspects of healthcare automation: EVA handles eligibility verification, CAM manages claims processing, and PHIL handles payment posting. They work together to create a comprehensive automation solution."
  },
  {
    category: RESPONSE_CATEGORIES.COMPARISON,
    patterns: ['which one', 'which agent', 'choose'],
    response: "The choice depends on your specific needs: EVA for eligibility verification, CAM for claims processing, or PHIL for payment posting. Many organizations use all three for complete automation. What's your primary focus area?"
  },

  // Customization and flexibility
  {
    category: RESPONSE_CATEGORIES.CUSTOMIZATION,
    patterns: ['customize', 'customization', 'tailor'],
    response: "Our automation agents can be customized to fit your specific workflows and requirements. We work with you to ensure the solution meets your organization's unique needs."
  },
  {
    category: RESPONSE_CATEGORIES.CUSTOMIZATION,
    patterns: ['scalable', 'scalability', 'grow'],
    response: "Our automation solutions are designed to scale with your organization. They can handle increasing volumes and adapt to your growing needs over time."
  },

  // Customer service phrases
  {
    category: RESPONSE_CATEGORIES.SUPPORT,
    patterns: ['i don\'t understand', 'confused', 'unclear'],
    response: "I'm here to help clarify things! Let me explain our automation agents simply: EVA checks patient coverage, CAM processes claims, and PHIL handles payments. Which area would you like me to explain further?"
  },
  {
    category: RESPONSE_CATEGORIES.SUPPORT,
    patterns: ['can you explain', 'tell me more', 'elaborate'],
    response: "Of course! I'd be happy to explain more about any aspect of our automation solutions. What specific topic would you like me to elaborate on?"
  },
  {
    category: RESPONSE_CATEGORIES.SUPPORT,
    patterns: ['i have a question', 'i want to ask'],
    response: "I'm here to answer your questions! Please go ahead and ask about our healthcare automation solutions, and I'll do my best to help."
  },

  // Data and reporting
  {
    category: RESPONSE_CATEGORIES.DATA,
    patterns: ['data', 'reporting', 'analytics'],
    response: "Our automation agents provide comprehensive data and reporting capabilities. They track performance metrics, identify trends, and help you make data-driven decisions about your healthcare processes."
  },
  {
    category: RESPONSE_CATEGORIES.DATA,
    patterns: ['metrics', 'kpi', 'performance'],
    response: "We provide detailed metrics and KPIs to measure the performance of our automation solutions. This helps you track improvements in efficiency, accuracy, and cost savings."
  },

  // Partnerships and integrations
  {
    category: RESPONSE_CATEGORIES.PARTNERSHIPS,
    patterns: ['partners', 'partnership', 'ecosystem'],
    response: "We work with various healthcare technology partners to ensure our automation solutions integrate seamlessly with your existing systems and workflows."
  },
  {
    category: RESPONSE_CATEGORIES.PARTNERSHIPS,
    patterns: ['vendor', 'supplier', 'provider'],
    response: "As a healthcare automation provider, we work closely with healthcare organizations to deliver solutions that meet their specific needs and requirements."
  },

  // Help and support
  {
    category: RESPONSE_CATEGORIES.SUPPORT,
    patterns: ['help', 'support'],
    response: "I'm here to help! I can answer questions about Thoughtful AI's automation agents like EVA (eligibility verification), CAM (claims processing), and PHIL (payment posting). What specific information are you looking for?"
  },

  // Healthcare and medical
  {
    category: RESPONSE_CATEGORIES.INDUSTRY,
    patterns: ['healthcare', 'medical'],
    response: "Great question about healthcare! Thoughtful AI specializes in healthcare automation solutions. Our agents help streamline processes like eligibility verification, claims processing, and payment posting. Which area interests you most?"
  },

  // Automation and AI
  {
    category: RESPONSE_CATEGORIES.TECHNICAL,
    patterns: ['automation', 'ai', 'artificial intelligence'],
    response: "Thoughtful AI focuses on intelligent automation for healthcare processes. Our AI agents can handle complex tasks like verifying patient eligibility, processing claims, and managing payments. Would you like to learn more about any specific agent?"
  }
]; 