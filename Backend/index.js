import express from "express";
import cors from "cors";

const app = express();
cors();

app.get("/", (req,res) => {
    res.send("Hello at window...");
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening at port ${PORT}`);
})