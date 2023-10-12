import express from "express";
import bodyParser from "body-parser";
import moment from "moment";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    const date = moment().format('MMMM Do YYYY');
    res.render("index.ejs", {toDoItems: toDoItems, today: date});
  });

let toDoItems = [];
let workItems = [];

app.get("/work", (req, res) => {
  const date = moment().format('MMMM Do YYYY');
  res.render("work.ejs", {workItems: workItems, today: date});
  });

  app.post("/", (req, res) =>{
    const nextItem = req.body["newItem"];
    console.log(nextItem);
    toDoItems.push(nextItem);
    console.log(toDoItems);
    res.redirect("/");
  });

  app.post("/work", (req, res) => {
    const nextItem = req.body["newItem"];
    workItems.push(nextItem);
    console.log(workItems);
    res.redirect("/work");
    });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


