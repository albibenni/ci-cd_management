import { z } from "zod/v4";

export const buildJSONSchema = z.object({
  name: z.string(),
  serviceType: z.string(),
});

export type BuildJSON = z.infer<typeof buildJSONSchema>;
