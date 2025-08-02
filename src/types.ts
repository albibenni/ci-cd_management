import { z } from "zod/v4";

export const ConfigSchema = z
  .string({
    error: "Config file path is required",
  })
  .min(1, "Config file path cannot be empty");

export const BuildJSONDockerfileSchema = z.object({
  preInstallCommands: z.array(z.string()),
});

export const BuildJSONSchema = z.object({
  name: z.string(),
  serviceType: z.string(),
  dockerfile: BuildJSONDockerfileSchema,
});

export type BuildJSON = z.infer<typeof BuildJSONSchema>;
export type BuildJSONDockerfile = z.infer<typeof BuildJSONDockerfileSchema>;

export type ObjectValues<T> = T[keyof T];

export const OPTIONS = {
  CONFIG: "config",
} as const;
export type TOptions = ObjectValues<typeof OPTIONS>;
