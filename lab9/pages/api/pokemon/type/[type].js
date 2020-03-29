import pokemon from 'json-pokemon';

function response(req, res) {

    let result = {"error": "Could not find type."};

    for(let i=0; i < pokemon.length; i++){

        for(let k = 0; k < pokemon[i].typelist.length; k++){
        
            let pokemon = getPokemon.getPokemonByType(req.query.type);
        }
    }
    
    if(pokemon !== null) {
        result = pokemon;
    }
}
export default response;