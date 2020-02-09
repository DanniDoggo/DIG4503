const Express = require("express");
const App = Express();
const port = 80;

const pokemons = require('json-pokemon');
const pokemon = pokemons[];

const chalk = require("chalk");

App.get("/id/:id", (req, res) => {
  pokemon.forEach((value)=>{
    if(value.id == req.params.id){
      res.send(value);
      console.log(chalk.green(value));
    }
  });
  res.send("Error, it's not very effective...");
  console.log(chalk.red("Error, it's not very effective..."));
});

App.get("/name/:name", (req, res) => {
  pokemon.forEach((value)=> {
     if(value.name == req.params.name) {
         res.send(value);
         console.log(chalk.green(value));
     }
 });
 res.send("Error, it's not very effective...");
 console.log(chalk.red("Error, it's not very effective..."));
});


App.listen(port,() => {
  console.log("Server is running the very best, like no one ever was");
});
