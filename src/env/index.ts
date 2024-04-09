import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  MOVIES_API_URL: z.string().url(),
  MOVIES_API_TOKEN: z.string(),
});

const firebaseEnvSchema = z.object({
  NEXT_PUBLIC_FIREBASE_API_KEY: z.string(),
  NEXT_PUBLIC_FIREBASE_APP_ID: z.string(),
  NEXT_PUBLIC_FIRABASE_AUTH_DOMAIN: z.string(),
  NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: z.string(),
  NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
  NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
  NEXT_PUBLIC_FIREBASE_STORAGE: z.string(),
});

export const env = envSchema.parse(process.env);
export const firebaseEnv = firebaseEnvSchema.parse(process.env);
