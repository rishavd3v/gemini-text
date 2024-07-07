const express = require("express");
const app = express();
const generateContent = require("./routes/gemini.js");

app.get("/",(req,res)=>{
    res.send("Hello world");
});

app.get("/gemini", generateContent);

app.listen(3000,()=>{
    console.log("App is running on port 3000");
});