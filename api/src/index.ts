import express from 'express';
import router from './routes/index';
var morgan = require('morgan')
const cors = require('cors');
import exphbs from "express-handlebars";
import path from 'path';



// initialization
const app = express()
import './database'


// cors
app.use(cors())

// settings

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");

// midelwares
app.use(morgan('tiny'));
app.use(express.json());

// Routes
app.use('/', router);



// // static files
// app.use(express.static(path.join(__dirname, "public")));


// starting the service
app.listen(3001,()=>console.log('listen on port 3001'))