import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const featuredPost = {
    title: "Mastering the Basics: A Beginner's Guide to Crochet",
    content: "In this guide, we'll cover the fundamental techniques and stitches you need to know to get started on your crochet adventure..."
  };
  

  
app.get('/', (req, res) => {
    res.render('home.ejs', { featuredPost });
  });
  
app.get('/featuredPost', (req, res) => {
    res.render('fullFeaturedPost', { featuredPost });
  });

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });