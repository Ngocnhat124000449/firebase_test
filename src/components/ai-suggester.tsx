"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAiSuggestions } from "@/app/actions";
import { Lightbulb, Loader2 } from "lucide-react";

const formSchema = z.object({
  projectRequirements: z.string().min(20, "Please provide more details about your project."),
});

type FormValues = z.infer<typeof formSchema>;

export function AiSuggester() {
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectRequirements: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setSuggestion(null);
    setError(null);
    
    const result = await getAiSuggestions(values);

    if (result.success && result.data?.suggestedComponents) {
      setSuggestion(result.data.suggestedComponents);
    } else {
      setError(result.error || "Failed to get suggestions.");
    }
    
    setIsLoading(false);
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe Your Project</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., I'm building a weather station that measures temperature, humidity, and pressure, and sends data to a web server via Wi-Fi."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Suggestions...
                  </>
                ) : (
                  <>
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Get Suggestions
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Suggested Components</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin mb-4" />
                <p>Analyzing your requirements...</p>
            </div>
          )}
          {error && <p className="text-destructive">{error}</p>}
          {suggestion && (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <p>{suggestion}</p>
            </div>
          )}
          {!isLoading && !suggestion && !error && (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground border-2 border-dashed rounded-lg p-8">
              <Lightbulb className="h-10 w-10 mb-4" />
              <p>Your component suggestions will appear here once you describe your project.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
