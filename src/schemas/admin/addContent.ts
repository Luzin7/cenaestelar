import { z } from "zod";

export const addContent = z.object({
  shortDescription: z.string().min(1, "Lança uma desc ai, meu peixe"),
  description: z.string().min(1, "Lança uma desc ai, meu peixe"),
  rating: z.string().min(1, "Lança uma nota ai, meu peixe"),
});

export type addContentProps = z.infer<typeof addContent>;
