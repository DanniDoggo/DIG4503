const Express = require("express");
const App = Express();
const port = 80;

const cors = require("cors");
App.use(cors());

const pokemons = require('json-pokemon');

const chalk = require("chalk");

App.use("/", Express.static("client/build"));

App.get("/id/:id", (req, res) => {

let result = {"error": "Error! It's not very effective!"};

  pokemons.forEach((value)=>{
    if(value.id == req.params.id){
      result = value;
    }
  });

if(result.error){
console.log(chalk.red(req.path));

}
 else {
  console.log(chalk.green(req.path));
 }

  //res.send(result);
  res.json(result);

});

App.get("/name/:name", (req, res) => {

let result = {"error": "Error! It's not very effective!"};

  pokemons.forEach((value)=>{
    if(value.name == req.params.name){
      result = value;
    }
  });

if(result.error){
console.log(chalk.red(req.path));

}
 else {
  console.log(chalk.green(req.path));
 }

  //res.send(result);
  res.json(result);

});

App.listen(port,() => {
  console.log("Server used running! It's super effective!");
});
