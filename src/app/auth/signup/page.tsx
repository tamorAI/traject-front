"use client";

import { useEffect, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@tamor/ui/components/button";
import { Input } from "@tamor/ui/components/input";
import { Label } from "@tamor/ui/components/label";
import { Card, CardContent, CardFooter } from "@tamor/ui/components/card";
import { signup } from "@/app/auth/actions";
import Link from "next/link";
import { AuthPageLayout } from "@/components/auth-layout";
import { toastManager } from "@tamor/ui/components/toast";

export default function SignupPage() {
  const [state, formAction, pending] = useActionState(signup, undefined);

  useEffect(() => {
    if (state?.error?.form) {
      toastManager.add({
        title: "Error",
        description: state.error.form[0],
        type: "error",
      });
    }
    if (state?.success) {
      toastManager.add({
        title: "Success",
        description: state.success,
        type: "success",
      });
    }
  }, [state]);

  return (
    <AuthPageLayout
      title="Create an account"
      description="Enter your details to get started"
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
                    className="text-xs text-destructive overflow-hidden"
                  >
                    {state.error.email[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
              />
              <AnimatePresence>
                {state?.error?.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -4, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -4, height: 0 }}
                    className="text-xs text-destructive overflow-hidden"
                  >
                    {state.error.password[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <Button
              type="submit"
              size="lg"
              loading={pending}
              className="w-full"
            >
              Create account
            </Button>
          </form>
        </CardContent>
        <CardFooter className="border-none bg-transparent">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
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
