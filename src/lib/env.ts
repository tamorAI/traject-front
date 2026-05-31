import * as z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  NEXT_PUBLIC_SUPABASE_URL: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
});

/**
 * ENVIRONMENT OBJECT PASSED OVER MODULES AND FILES
 */
export const ENV = envSchema.parse(process.env);
export const hasEnvVars = envSchema.safeParse(process.env);
