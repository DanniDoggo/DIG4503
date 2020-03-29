import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/Index/Index.module.css';

const Home = () => {
  return (
    <div className = {styles.bg}>
      <Head>
        <title>Home: Welcome to the Pokedex!</title>
        <link href="https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <p className = {styles.namestyle}>
         Welcome to the Pokedex! Search for a Pokemon!
        </p>

        <p>
          <Link href="/id">
            <a className = {styles.link}>Search by ID</a>
          </Link>
        </p>

        <p>
          <Link href="/name">
            <a className = {styles.link}>Search by name</a>
          </Link>
        </p>
        <p>
          
          <Link href="/type">
            <a a className = {styles.link}>Search by type</a>
          </Link>
        </p>
        <p>
        <img className = {styles.img} src="https://cdn.bulbagarden.net/upload/thumb/b/b1/151Mew.png/1200px-151Mew.png" alt="Mew"></img>
        </p>
      </div>
    </div>
  );
}

export default Home;