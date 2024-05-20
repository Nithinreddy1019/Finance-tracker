import { Router } from "express";
import bcrypt from "bcryptjs";

import { signupSchema } from "../schema";
import { prisma } from "../lib/db";

export const userRouter = Router()


//user signup with credentials
userRouter.post("/signup",  async (req, res) => {

    const validatedFields = signupSchema.safeParse(req.body);

    if(!validatedFields.success) {
        res.status(401);
        return res.json({
            error: 'invalid credentials'
        });
    };

    const { email, username, password } = validatedFields.data;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        });

        res.status(200);
        return res.json({
            message: "User created successfully",
            user: {
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        res.status(500);
        return res.json({
            error: "Internal server error"
        })
    }

});

userRouter.get("/route", async (req, res) => {
    res.json({msg: "In side the router"})
})