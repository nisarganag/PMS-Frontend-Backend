import React, { useState } from 'react';
import './Home.css';
import Searchbar from './Searchbar'

function Home() {
  

  return (
    <div className='homePage'>
        <div className='search_bar'>
            <Searchbar />
            <div> Search here</div>
        </div>
    </div>
    
  );
}

export default Home;
