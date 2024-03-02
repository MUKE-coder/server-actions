import { z } from "zod";

export const registerFormSchema = z.object({
  //Validation rules for each form Field
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "Username must be atleast 3 characters",
    })
    .max(8, {
      message: "Username cannot exceed 8 characters",
    }),
  email: z.string().email(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password too short - should be 6 chars minimum",
    }),
});

export const ProjectSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(3, {
      message: "Project title must be atleast 3 characters",
    }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(3, {
      message: "Description  must be atleast 3 characters",
    }),
});
