import React, { useState } from 'react';
import './Home.css';
import Searchbar from './Searchbar'
import SearchResults from './SearchResults';

function Home() {
  

  return (
    <div className='homePage'>
        <div className='search_bar'>
            <Searchbar />
            <SearchResults />
        </div>
    </div>
    
  );
}

export default Home;
