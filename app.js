const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")

let indexRouter = require('./routes/indexRoute');

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/",indexRouter)

app.listen(PORT,()=>console.log("server running"))

