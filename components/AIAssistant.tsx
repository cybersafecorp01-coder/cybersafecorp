import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, Sparkles, Shield, AlertTriangle, History, Copy, ThumbsUp, ThumbsDown } from 'lucide-react';
import { getSecurityRecommendation } from '../services/gemini';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  rating?: 'positive' | 'negative' | null;
}

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      content: 'Olá! Sou o assistente virtual da CyberSafeCorp. Posso ajudar com dúvidas sobre segurança digital, LGPD, proteção de dados e muito mais. Como posso ajudar você hoje? 😊',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [loading, setLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen, isMinimized]);

  const handleAsk = async () => {
    if (!prompt.trim() || loading) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: prompt,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setPrompt('');
    setLoading(true);

    try {
      const result = await getSecurityRecommendation(prompt);
      
      // Processa a resposta para torná-la mais humanizada
      const humanizedResponse = humanizeAIResponse(result || 'Desculpe, não entendi sua pergunta. Poderia reformular?');
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: humanizedResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Houve um problema técnico no momento. Por favor, tente novamente em alguns instantes. Se preferir, nossos especialistas estão disponíveis para ajudar!',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Função para humanizar respostas da IA
  const humanizeAIResponse = (response: string): string => {
    let humanized = response;
    
    // Remove linguagem excessivamente técnica para saudações simples
    if (response.toLowerCase().includes('olá') || 
        response.toLowerCase().includes('oi') ||
        response.toLowerCase().includes('bom dia') ||
        response.toLowerCase().includes('boa tarde') ||
        response.toLowerCase().includes('boa noite')) {
      
      humanized = 'Olá! É um prazer conversar com você! 😊\n\n' +
                  'Na CyberSafeCorp, valorizamos muito cada interação. Sou aqui para esclarecer suas dúvidas sobre segurança digital de forma clara e prática.\n\n' +
                  'Como posso ajudar especificamente hoje? Você tem alguma preocupação sobre segurança da informação, LGPD, proteção de dados ou outra questão relacionada?';
    }
    
    // Adiciona emojis e torna o texto mais amigável
    humanized = humanized
      .replace(/\.\s/g, '. ') // Garante espaçamento correto
      .replace(/CyberSafeCorp/g, '**CyberSafeCorp**') // Destaca nome da empresa
      .replace(/riscos\s+(?:potenciais|associados)/gi, 'possíveis riscos')
      .replace(/vetor de risco potencial/gi, 'possível risco')
      .replace(/engenharia social/gi, 'tentativa de manipulação')
      .replace(/Zero Trust/gi, 'modelo de Confiança Zero')
      .replace(/reconnaissance/gi, 'monitoramento')
      .replace(/Pentest/gi, 'Teste de Penetração')
      .replace(/Forense Computacional/gi, 'Análise Forense Digital');
    
    return humanized;
  };

  const handleRateMessage = (messageId: string, rating: 'positive' | 'negative') => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === messageId ? { ...msg, rating } : msg
      )
    );
  };

  const handleCopyMessage = (content: string) => {
    navigator.clipboard.writeText(content.replace(/\*\*/g, ''));
  };

  const handleClearHistory = () => {
    if (window.confirm('Tem certeza que deseja limpar o histórico da conversa?')) {
      setMessages([
        {
          id: 'welcome',
          content: 'Olá! Sou o assistente virtual da CyberSafeCorp. Como posso ajudar você hoje? 😊',
          isUser: false,
          timestamp: new Date(),
        }
      ]);
    }
  };

  const suggestedQuestions = [
    "Como proteger meu site contra ataques DDoS?",
    "Quais medidas tomar após um vazamento de dados?",
    "Como implementar LGPD na minha empresa?",
    "Qual firewall é mais seguro para e-commerce?",
    "Como treinar minha equipe em segurança digital?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-br from-[#1565c0] to-[#1e88e5] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group relative animate-pulse"
        >
          <div className="relative">
            <Bot size={32} />
            <Sparkles className="absolute -top-1 -right-1 text-yellow-400" size={12} />
          </div>
          <span className="absolute right-full mr-4 px-3 py-1 bg-slate-900 text-xs text-[#1e88e5] rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-[#1e88e5]/30 shadow-lg">
            Assistente Virtual
          </span>
        </button>
      ) : (
        <div className={`w-[380px] md:w-[450px] bg-[#0A1A2F] border-2 border-[#1e88e5]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          isMinimized ? 'h-16' : 'max-h-[600px]'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1565c0] to-[#1e88e5] p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot size={24} className="text-white" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#1565c0]"></div>
              </div>
              <div>
                <span className="text-white font-bold text-sm">Assistente CyberSafeCorp</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-[#bbdefb] text-xs">Online • Disponível para ajudar</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/10 p-1 rounded"
              >
                {isMinimized ? '🗖' : '🗕'}
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/10 p-1 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              {/* Messages Area */}
              <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900/50 to-[#0A1A2F] max-h-[400px]">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!message.isUser && (
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1e88e5]/20 rounded-full flex items-center justify-center">
                        <Shield size={16} className="text-[#1e88e5]" />
                      </div>
                    )}
                    <div className={`max-w-[80%] rounded-xl p-3 whitespace-pre-line ${
                      message.isUser 
                        ? 'bg-[#1e88e5] text-white' 
                        : 'bg-slate-800 border border-slate-700'
                    }`}>
                      <p className="text-sm leading-relaxed">
                        {message.content.split('**').map((part, index) => 
                          index % 2 === 1 ? (
                            <strong key={index} className="text-[#1e88e5]">{part}</strong>
                          ) : (
                            part
                          )
                        )}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        {!message.isUser && (
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleCopyMessage(message.content)}
                              className="text-xs opacity-50 hover:opacity-100 transition-opacity flex items-center gap-1"
                            >
                              <Copy size={12} /> Copiar
                            </button>
                            <button 
                              onClick={() => handleRateMessage(message.id, 'positive')}
                              className={`p-1 rounded ${message.rating === 'positive' ? 'text-emerald-400' : 'opacity-50 hover:opacity-100'}`}
                            >
                              <ThumbsUp size={14} />
                            </button>
                            <button 
                              onClick={() => handleRateMessage(message.id, 'negative')}
                              className={`p-1 rounded ${message.rating === 'negative' ? 'text-red-400' : 'opacity-50 hover:opacity-100'}`}
                            >
                              <ThumbsDown size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#1e88e5]/20 rounded-full flex items-center justify-center">
                      <Shield size={16} className="text-[#1e88e5]" />
                    </div>
                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="animate-spin text-[#1e88e5]" size={16} />
                        <span className="text-sm text-slate-300">Pensando na melhor resposta para você...</span>
                      </div>
                      <div className="mt-2 flex gap-1">
                        <div className="w-2 h-2 bg-[#1e88e5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-[#1e88e5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-[#1e88e5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested Questions */}
              {messages.length <= 1 && !loading && (
                <div className="px-4 pb-3 border-b border-slate-800">
                  <p className="text-xs text-slate-400 mb-2 font-mono uppercase tracking-wider">Perguntas comuns:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setPrompt(question)}
                        className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors border border-slate-700 hover:border-[#1e88e5]/30"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-slate-800 bg-slate-900/50">
                <div className={`flex gap-2 transition-all ${
                  inputFocused ? 'ring-2 ring-[#1e88e5]/50 rounded-lg p-1' : ''
                }`}>
                  <input 
                    ref={inputRef}
                    type="text"
                    placeholder="Digite sua pergunta sobre segurança..."
                    className="flex-grow bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAsk()}
                    onFocus={() => setInputFocused(true)}
                    onBlur={() => setInputFocused(false)}
                    disabled={loading}
                  />
                  <button 
                    onClick={handleAsk}
                    disabled={loading || !prompt.trim()}
                    className="bg-gradient-to-r from-[#1565c0] to-[#1e88e5] p-3 rounded-lg text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {loading ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>
                
                {/* Footer Controls */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={handleClearHistory}
                      className="text-xs text-slate-500 hover:text-[#1e88e5] transition-colors flex items-center gap-1"
                    >
                      <History size={12} /> Limpar
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertTriangle size={12} className="text-amber-500" />
                    <span className="text-[10px] text-slate-500">
                      Sou um assistente virtual e posso cometer erros
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
          
          {/* Footer Badge */}
          <div className="p-2 bg-slate-900 border-t border-slate-800">
            <div className="text-[10px] text-center text-slate-600 font-mono uppercase flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                <span>Assistente Virtual</span>
              </div>
              <span className="text-slate-700">•</span>
              <span>CyberSafeCorp • Sempre aqui para ajudar</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};