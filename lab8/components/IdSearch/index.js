import React from "react";

class IdSearch extends React.Component {

    getId() {

        let element = document.querySelector("#idInput");

        fetch("/api/pokemon/id/" + id.value)

                .then((res) => {
                      return res.json();
                })

                .then((processed) => {
                      let reporting = document.querySelector("#results");

                      if(processed.error) {
                        resultElement.innerHTML = "It's not very effective! Could not find Pokemon!"
                        }

                      else {
                        resultElement.innerHTML = "It's super effective! The Pokedex ID is " + processed.id;
                        }
                    });
                  element.value = "";
                  }

    render() {
        return(
            <div>
                 <input type="text" id="idInput" />
                 <button onClick={() => { this.getId() } }>Throw a Pokeball!</button>
                 <div id="results"></div>
            </div>
        );
    }
}

export default IdSearch;
