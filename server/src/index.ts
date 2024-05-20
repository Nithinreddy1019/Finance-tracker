import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { userRouter } from "./routes/auth/user-auth";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use("/user", userRouter);


app.get("/eg", async (req, res) => {
    res.json({
        msg: "hello mate"
    })
});


app.listen(port, () => {
    console.log(`Listening on port - ${port}`)
});