import { z } from "zod/v4";

export const configSchema = z
  .string({
    error: "Config file path is required",
  })
  .min(1, "Config file path cannot be empty");
export const buildJSONSchema = z.object({
  name: z.string(),
  serviceType: z.string(),
});

export type BuildJSON = z.infer<typeof buildJSONSchema>;

export type ObjectValues<T> = T[keyof T];

export const OPTIONS = {
  CONFIG: "config",
} as const;
export type TOptions = ObjectValues<typeof OPTIONS>;
