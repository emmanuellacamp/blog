import express from "express";
import bodyParser from "body-parser";
import lodash from "lodash";

const app = express();
const port = 3000;
const _ = lodash();

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine', 'ejs');


app.get("/", (req, res) => {
    res.render("home.ejs", {posts: posts});

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


app.post("/compose", (req, res)=>{
    const post = {
        title: req.body.postTitle,
        content: req.body.postBody,
    }
    posts.push(post);
    res.redirect("/")
})


app.get("/posts/:postName", (req, res)=>{
    const requestedTitle = _.lowerCase(req.params.postName);
    posts.forEach((post) => {
        const storedTitle = _.lowerCase(post.title);
        if (requestedTitle === storedTitle){
            res.render("post", {
                title: post.title,
                content: post.content
            })
        }
    })
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });