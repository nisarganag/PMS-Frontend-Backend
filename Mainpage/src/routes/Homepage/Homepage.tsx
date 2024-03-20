import './Home.css';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';

function Home() {
  

  return (
    <div className='homePage'>

        <div className='search_bar'>
          <h1 className='homepage-main-text'> Scholar Hub</h1>
          <Searchbar />
          <SearchResults />
        </div>
    </div>
    
  );
}

export default Home;
