import { Router } from "express";

export const userRouter = Router()


userRouter.post("/signup",  async (req, res) => {

    

});

userRouter.get("/route", async (req, res) => {
    res.json({msg: "In side the router"})
})