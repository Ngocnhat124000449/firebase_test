import { AiSuggester } from "@/components/ai-suggester";

export default function AiSuggesterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Người đề xuất thành phần AI</h1>
        <p className="mt-2 text-muted-foreground">
            Tận dụng AI để nhận các đề xuất thành phần thông minh dựa trên nhu cầu dự án của bạn.
        </p>
      </div>
      <AiSuggester />
    </div>
  );
}
