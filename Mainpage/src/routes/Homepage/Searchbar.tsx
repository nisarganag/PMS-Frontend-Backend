import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import './Searchbar.css';

const Searchbar = () => {
    const [input, setInput] = useState("");
    type SearchResultItem = {
      title: string;
      // other properties...
  };
    const [searchResult, setSearchResult] = useState<Array<SearchResultItem>>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInput(newValue);
      fetchData(newValue);
  };
    const fetchData = async (query: string) => {
      if (!query.trim()) {
        setSearchResult([]);
        return;
    }
        const response = await fetch(`http://localhost:8080/api/v1/publications/search?query=${query}`);
        const data = await response.json();
        setSearchResult(data);
    };

    

    const handleSearchClick = () => {
        fetchData(input);
    };

    return (
        <div className='input-component'>
            <input placeholder='Type to Search... ' value={input} onChange={handleChange} />
            <FaSearch id='search-icon' onClick={handleSearchClick} />
            {searchResult && <div>{searchResult.map((item: SearchResultItem, index: number) => (
                    <div key={index}>
                        {item.title}
                    </div>
                ))}</div>}
        </div>
    );
}

export default Searchbar;