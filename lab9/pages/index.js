import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Head>
        <title>This is the homepage!</title>
      </Head>
      <div>
        <p>
          Search for a Pokemon!
        </p>
        <Link href="/id">
          <a>Search by ID</a>
        </Link>
        <Link href="/name">
          <a>Search by name</a>
        </Link>
        <Link href="/type">
          <a>Search by type</a>
        </Link>
      </div>
    </div>
  );
}

export default Home;