import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Id/Id.module.css';

class Id extends React.Component {

    getId() {

        let element = document.querySelector("#idInput");

        fetch("/api/pokemon/id/" + element.value)

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
            
            <div className = {styles.bg}>
                <Head>ID Search</Head>
                <p className = {styles.namestyle}>ID No. Search</p>
                 <input type="text" id="idInput" />
                 <button className = {styles.button} onClick={() => { this.getId() } }>Throw a Pokeball!</button>
                 <div id="results"></div>

                 <p>
                <img src="https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849__340.png" alt="Pokeball"></img>
                </p>

                 <Link href="/index">
                    <a className = {styles.link}> Return to Home</a>
                </Link>
            </div>
        );
    }
}

export default Id;
