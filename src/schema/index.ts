import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email().min(5),
  phone: z.string().min(10).max(20),
  message: z.string().min(10).max(200),
});
