const Express = require('express');
const App = Express();
const port = 80;
const Database = require("./database.js");

let database = new Database();

App.get("/movies/name/:name", (req, res) => {

})

App.get("/movies/score/:score", (req, res) => {
    
})

App.listen(port, () => {

});