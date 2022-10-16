const path = require("path");
const express = require("express");
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const routes = require("./controllers");
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// handlebars = expressHandlebars.create({ helpers });

const sess = {
   secret: "Super secret secret",
   cookie: {},
   resave: false,
   saveUninitialized: true,
   store: new SequelizeStore({
     db: process.env.DB_NAME,
   }),
};

app.use(session(sess));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log("Now listening"));
});
