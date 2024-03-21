import './Home.css';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import logo from './Screenshot_2024-03-20_202235.png'
function Home() {
  

  return (
    <div className='homePage'>

        <div className='search_bar'>
          <div className='page-logo'> 
            <img src={logo} alt='Page Logo' height={200} width={500} />
          </div>
          <Searchbar />
          <SearchResults />
        </div>
    </div>
    
  );
}

export default Home;
