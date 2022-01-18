const express = require("express");
require("./db/conn");
const UserMessage = require("./models/usermessage");
const hbs = require("hbs");
const path =  require("path");

const app = express();
const port  = process.env.PORT || 3002;

const staticpath = path.join(__dirname, "../public")
const templatePath = path.join(__dirname, "../templates/views");
const partialpath = path.join(__dirname, "../templates/partials");
console.log(partialpath);

app.set('view engine', 'hbs');
app.set('views', templatePath);
app.use(express.urlencoded({extended:false}));
app.use(express.static(staticpath))
hbs.registerPartials(partialpath)

app.get("/", (req, res)=>{
    res.render("index");
})

app.post("/contact", async(req, res)=>{
    try {
            // res.send(req.body);
            const newUserMessage = new UserMessage(req.body);
            await newUserMessage.save();
            res.status(201).render("index");
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(port, ()=>{console.log(`Server is listening on port ${port}`);})