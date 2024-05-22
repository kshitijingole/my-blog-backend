import express from "express";

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log("Server is listening on Port 8000")
});