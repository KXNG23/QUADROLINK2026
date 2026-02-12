
import { GoogleGenAI, Type } from "@google/genai";
import { BusinessNeed, AIRecommendation } from '../types';

/**
 * Generates ICT recommendations using Gemini.
 * Initializes the AI client per-request to ensure the most current environment configuration.
 */
export async function getITRecommendations(needs: BusinessNeed): Promise<AIRecommendation> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const prompt = `As a senior ICT strategist at Quadrolink, analyze the following business needs and provide a professional IT recommendation.
  
  Company Size: ${needs.companySize}
  Industry: ${needs.industry}
  Primary Concern: ${needs.primaryConcern}
  
  Focus on services like Managed Support, Cloud Migrations (Microsoft 365/Azure), Connectivity (Fibre/LTE), Cyber Security, and VOIP.`;

  try {
    // Using gemini-3-pro-preview for advanced reasoning required for ICT strategy recommendations
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            recommendedServices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of Quadrolink service names"
            },
            rationale: {
              type: Type.STRING,
              description: "Professional justification for these recommendations"
            },
            suggestedRoadmap: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Step-by-step implementation plan"
            }
          },
          required: ["recommendedServices", "rationale", "suggestedRoadmap"]
        }
      }
    });

    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      recommendedServices: ["Managed IT Support", "Cyber Security"],
      rationale: "Based on standard industry requirements for businesses of your size.",
      suggestedRoadmap: ["Initial audit", "Infrastructure setup", "Ongoing monitoring"]
    };
  }
}
