import * as z from "zod";

export const ThreadValidation = z.object({
  accountId: z.string(),
  thread: z.string().nonempty().min(3, { message: "Minimum 3 Charachters" }),
});

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(3, { message: "Minimum 3 Charachters" }),
  });