import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Type/Type.module.css';

class Type extends React.Component {

    getType() {

        let element = document.querySelector("#typeInput");

        fetch("/api/pokemon/type/" + element.value)

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
            <Head>Type Search</Head>
            <p className = {styles.namestyle}>Type Search</p>
             <input type="text" id="typeInput" />
             <button className = {styles.button} onClick={() => { this.getType() } }>Throw a Pokeball!</button>
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

export default Type;
