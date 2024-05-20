import * as z from "zod";

export const signupSchema = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    username: z.string({
        message: "Invalid username"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters requied"
    })
});


export const loginSchema = z.object({
    email: z.string().email({
        message: "Invalid email"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required"
    })
});