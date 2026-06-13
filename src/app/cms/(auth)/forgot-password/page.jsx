"use client";

import { useState } from "react";
import Link from "next/link";
import { authService } from "@/services/dashboard.service";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    await authService.requestPasswordReset({ email });
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Check your inbox</h1>
        <p className="mb-6 mt-1 text-sm text-muted-foreground">
          If an account exists for {email || "that address"}, a reset link is on its way.
        </p>
        <Button asChild variant="outline" className="w-full">
          <Link href="/login">Back to sign in</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Reset your password</h1>
      <p className="mb-6 mt-1 text-sm text-muted-foreground">
        Enter your email and we&apos;ll send you a link to set a new one.
      </p>
      <form className="space-y-4" onSubmit={submit}>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@austelix.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending…" : "Send reset link"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          <Link href="/login" className="text-primary hover:underline">
            Back to sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
