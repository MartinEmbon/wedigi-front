const express = require("express")
const app = express()
const path = require("path")

let indexRouter = require('./routes/indexRoute');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",indexRouter)

app.listen(3000,()=>console.log("server running"))

