
import { GoogleGenAI } from "@google/genai";

// Fix: Initializing GoogleGenAI with process.env.API_KEY directly as per SDK guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSecurityRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um consultor sênior de cibersegurança e programação da CyberSafeCorp. O usuário enviou a seguinte preocupação: "${userPrompt}". 
      Forneça uma análise técnica concisa (máximo 2 parágrafos), em tom profissional e autoritário. 
      Sugira como os serviços da CyberSafeCorp (Pentest, Automação, IA, Forense, Programação) podem ajudar especificamente nesse caso. 
      Responda em Português do Brasil.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Desculpe, nosso assistente de IA está em manutenção. Por favor, entre em contato direto com nossos consultores.";
  }
};