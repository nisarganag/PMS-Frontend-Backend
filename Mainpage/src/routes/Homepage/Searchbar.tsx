import React from 'react'
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'

const searchbar = () => {
  return (
    <div className='input-component'>
        <input placeholder='Type to Search... '/>
        <FaSearch id='search-icon'/>

    </div>
  )
}

export default searchbar
