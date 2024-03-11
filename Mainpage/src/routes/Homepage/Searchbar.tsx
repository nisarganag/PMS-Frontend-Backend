import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'

const searchbar = () => {

  // const [input, setInput] = useState("")

  // const fetchData = (value) => {
  //   fetch("").then(Response) => Response.json();//api

        // return(
        //   value &&
        //   user &&
        //   User.data.toLowercase().includes(value)
        // )
  // };

  // const handleChange= (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };



  return (
    <div className='input-component'>
        <input placeholder='Type to Search... ' />
        <FaSearch id='search-icon'/>

    </div>
  )
}

export default searchbar
