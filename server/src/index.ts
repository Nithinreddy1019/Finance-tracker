import express from "express";
import { userRouter } from "./routes/user-routes";

const port = 3000;
const app = express()

app.use(express.json())
app.use("/user", userRouter)


app.get("/eg", async (req, res) => {
    res.json({
        msg: "hello mate"
    })
});


app.listen(port, () => {
    console.log(`Listening on port - ${port}`)
});