import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about", (req, res)=>{
    res.render("about")
})
app.get("/contact", (req, res)=>{
    res.render("contact")
})

app.get("/compose", (req, res)=>{
    res.render("compose")
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });