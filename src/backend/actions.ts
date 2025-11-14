"use server";

import { suggestComponentsWithAI, type SuggestComponentsWithAIInput } from "@/backend/ai/flows/suggest-components-with-ai";

export async function getAiSuggestions(input: SuggestComponentsWithAIInput) {
    try {
        const result = await suggestComponentsWithAI(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred.";
        return { success: false, error: errorMessage };
    }
}
