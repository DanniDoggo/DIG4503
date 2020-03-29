import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';

function Home() {
    return(
    <div>
        <NameSearch />
        <IdSearch />
        <div id="results"></div>
    </div>
    )
}

export default Home;