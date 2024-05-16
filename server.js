import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

app.use(express.static("public"));

app.get("/", async (req, res) => {
    let response = await axios.get(url);
    console.log("Get req: ", response.data.joke);
    res.render("index.ejs", {
        joke: response.data.joke,
    });
});

app.post("/", async (req, res) => {
    const response = await axios.get(url);
    console.log("Post req: ", response.data.joke);
    res.render("index.ejs", {
        joke: response.data.joke,
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});