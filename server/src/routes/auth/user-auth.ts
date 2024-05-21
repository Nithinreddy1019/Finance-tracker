import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";
import axios from "axios";

import { loginSchema, signupSchema } from "../../schema";
import { prisma } from "../../lib/db";

export const userRouter = Router()


//user signup with credentials
userRouter.post("/auth/signup",  async (req, res) => {

    const validatedFields = signupSchema.safeParse(req.body);

    if(!validatedFields.success) {
        return res.status(401).json({
            error: 'Invalid credentials'
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
        return res.status(500).json({
            error: "Internal server error"
        })
    }

});


//user login with credentials
userRouter.post("/auth/login", async (req,res) => {
    const validatedFields = loginSchema.safeParse(req.body);

    if(!validatedFields.success) {
        return res.status(401).json({
            error: "Invalid credentials"
        });
    };

    const { email, password } = validatedFields.data;

    try {
        
        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(!userExists) {
            return res.status(403).json({
                error: "Emaiol not found"
            });
        };

        const passwordMatches = bcrypt.compare(password, userExists.password as string);

        if(!passwordMatches) {
            return res.status(401).json({
                error: "Invalid password"
            });
        };

        const token = jwt.sign({email: userExists.email}, process.env.JWT_SECRET as string, { expiresIn: "24h" });

        res.cookie("token", token, { maxAge: 60 * 60 * 24 });
        return res.status(200).json({
            message: "Login successfull"
        });
        

    } catch (error) {
        
        return res.status(500).json({
            error: "Internal server error"
        });

    };

});

//login and register with google
userRouter.post("/auth/google", async (req, res) => {
    const access_token = req.body.access_token;

    try {
        const response = await axios.post(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);

        const userDetails = response.data;

        if(!userDetails.email_verified) {
            return res.status(401).json({
                error: "Email not verified"
            });
        };

        const userExists = await prisma.user.findUnique({
            where: {
                email: userDetails.email
            }
        });

        if(userExists) {
            const token = jwt.sign({ email: userExists.email}, process.env.JWT_SECRET as string, { expiresIn: "24h" });
            res.cookie("token", token, { maxAge: 60 * 60 * 24 });

            return res.status(200).json({
                message: "Login successfull"
            });
        }

        const user = await prisma.user.create({
            data: {
                username: userDetails.name,
                email: userDetails.email
            }
        });

        const token = jwt.sign({ email: user.email}, process.env.JWT_SECRET as string, { expiresIn: "24h" });
        res.cookie("token", token, { maxAge: 60 * 60 * 24 });

        return res.status(200).json({
            message: "Login successfull"
        });

    } catch (error) {
        return res.status(500).json({
            error: "Internal server error"
        });
    };

});



userRouter.get("/route", async (req, res) => {
    res.json({msg: "In side the router"})
});