import './Home.css';
import Searchbar from './Searchbar';
import SearchResults from './SearchResults';
import logo from './Screenshot_2024-03-20_202235.png';
import darkLogo from './Screenshot_2024-03-20_202252 (1).png'; // Replace with the path to your dark mode logo
interface HomeProps {
  isDarkMode: boolean;
}
function Home({ isDarkMode }: HomeProps) {
  const currentLogo = isDarkMode ? darkLogo : logo;

  return (
    <div className='homePage'>
      <div className='search_bar'>
        <div className='page-logo'> 
          <img src={currentLogo} alt='Page Logo' height={78} width={621} />
        </div>
        <Searchbar />
        <SearchResults />
      </div>
    </div>
  );
}

export default Home;