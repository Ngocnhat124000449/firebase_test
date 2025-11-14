import { AiSuggester } from "@/components/ai-suggester";

export default function AiSuggesterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">AI Component Suggester</h1>
        <p className="mt-2 text-muted-foreground">
            Leverage AI to get intelligent component recommendations based on your project needs.
        </p>
      </div>
      <AiSuggester />
    </div>
  );
}
