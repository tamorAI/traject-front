"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@tamor/ui/components/button";
import { Input } from "@tamor/ui/components/input";
import { Label } from "@tamor/ui/components/label";
import { Card, CardContent, CardFooter } from "@tamor/ui/components/card";
import { forgotPassword } from "@/app/auth/actions";
import Link from "next/link";
import { AuthPageLayout } from "@/components/auth-layout";

export default function ForgotPasswordPage() {
  const [state, formAction, pending] = useActionState(forgotPassword, undefined);

  return (
    <AuthPageLayout
      title="Reset your password"
      description="Enter your email and we&apos;ll send you a reset link"
    >
      <Card className="bg-transparent rounded-none ring-0 w-full border-0">
        <CardContent>
          <form action={formAction} className="flex flex-col gap-8">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <AnimatePresence>
                {state?.error?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="text-sm text-destructive overflow-hidden"
                  >
                    {state.error.email[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <AnimatePresence>
              {state?.error?.form && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-sm text-destructive text-center"
                >
                  {state.error.form[0]}
                </motion.p>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {state?.success && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  className="text-sm text-success text-center"
                >
                  {state.success}
                </motion.p>
              )}
            </AnimatePresence>
            <Button type="submit" loading={pending} className="w-full">
              Send reset link
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-none bg-transparent">
          <p className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </AuthPageLayout>
  );
}
