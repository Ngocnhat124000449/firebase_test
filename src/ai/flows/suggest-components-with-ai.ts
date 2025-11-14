'use server';

/**
 * @fileOverview An AI agent that suggests electronic components based on project requirements.
 *
 * - suggestComponentsWithAI - A function that handles the component suggestion process.
 * - SuggestComponentsWithAIInput - The input type for the suggestComponentsWithAI function.
 * - SuggestComponentsWithAIOutput - The return type for the suggestComponentsWithAI function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestComponentsWithAIInputSchema = z.object({
  projectRequirements: z
    .string()
    .describe('A detailed description of the project requirements.'),
});
export type SuggestComponentsWithAIInput = z.infer<typeof SuggestComponentsWithAIInputSchema>;

const SuggestComponentsWithAIOutputSchema = z.object({
  suggestedComponents: z
    .string()
    .describe('A list of suggested electronic components based on the project requirements.'),
});
export type SuggestComponentsWithAIOutput = z.infer<typeof SuggestComponentsWithAIOutputSchema>;

export async function suggestComponentsWithAI(
  input: SuggestComponentsWithAIInput
): Promise<SuggestComponentsWithAIOutput> {
  return suggestComponentsWithAIFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestComponentsWithAIPrompt',
  input: {schema: SuggestComponentsWithAIInputSchema},
  output: {schema: SuggestComponentsWithAIOutputSchema},
  prompt: `You are an AI assistant that suggests electronic components based on project requirements.

  Based on the following project requirements:
  {{projectRequirements}}

  Suggest a list of electronic components that would be suitable for this project. Be as detailed as possible and explain why the selected components are suitable for the project.
  `,
});

const suggestComponentsWithAIFlow = ai.defineFlow(
  {
    name: 'suggestComponentsWithAIFlow',
    inputSchema: SuggestComponentsWithAIInputSchema,
    outputSchema: SuggestComponentsWithAIOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
