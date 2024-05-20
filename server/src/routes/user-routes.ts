import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

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

        const emailExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(emailExists) {
            return res.status(403).json({
                error: "Email already exists"
            })
        };


        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: hashedPassword
            }
        });

        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET as string, {expiresIn: "24h"});
        res.cookie("token", token, {maxAge: 60*60*24});
        return res.status(200).json({
            message: "User added succefully"
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