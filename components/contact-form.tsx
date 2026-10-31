"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent");
      }

      form.reset();

      toast.success("Message sent", {
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    } catch {
      toast.error("Message not sent", {
        description: "Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="What are you building, and where do you need help?"
          maxLength={5000}
          required
          className="min-h-32"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-10 w-full rounded-full text-xs">
        {isSubmitting ? "Sending..." : "Send message"}
        <ArrowUpRight className="size-3.5" />
      </Button>

      <p className="text-center text-[10px] text-muted-foreground">
        Your message will be sent directly to my inbox.
      </p>
    </form>
  );
}
