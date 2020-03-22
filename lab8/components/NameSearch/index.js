import React from "react";

class NameSearch extends React.Component {

    getName() {

        let element = document.querySelector("#nameInput");

        fetch("/api/pokemon/name/" + name.value)

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
                 <input type="text" id="nameInput" />
                 <button onClick={() => { this.getName() } }>Throw a Pokeball!</button>
                 <div id="results"></div>
            </div>
        );
    }
}

export default NameSearch;
