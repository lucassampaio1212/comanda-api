import express from "express";



const app = express();

app.use(express.json());

app.listen(3339,() => {
    console.log("Server is Running on Port 3339");
})