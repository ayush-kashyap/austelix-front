"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setUser } from "@/store/slices/authSlice";
import { selectAllUsers } from "@/store/slices/usersSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const [email, setEmail] = useState("ava@austelix.com");
  const [password, setPassword] = useState("password");
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setServerError("");
    setIsSubmitting(true);

    const user = users.find((u) => u.email === email);
    if (!user || password.length < 6) {
      setServerError("We couldn't sign you in. Check your details and try again.");
      setIsSubmitting(false);
      return;
    }

    document.cookie = "austelix_session=1; path=/; max-age=86400";
    dispatch(setUser(user));
    router.push("/cms/dashboard");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
      <p className="mb-6 mt-1 text-sm text-muted-foreground">
        Sign in to your account to continue.
      </p>

      <form className="space-y-4" onSubmit={onSubmit} noValidate>
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

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <Label htmlFor="password" className="mb-0">Password</Label>
            <Link href="/cms/forgot-password" className="text-xs text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {serverError && <p className="text-sm text-destructive">{serverError}</p>}

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : "Sign in"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <span className="text-primary">Contact admin</span>
        </p>
      </form>
    </div>
  );
}
