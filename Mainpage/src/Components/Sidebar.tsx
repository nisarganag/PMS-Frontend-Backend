import {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { ImStatsBars2 } from "react-icons/im";
import { GrSearchAdvanced } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import './Sidebar.css'; 

const DropDownProfile = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };

    return(
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <div>
                <div>
                    
                </div>   
            </div>
            <button className="dropbtn">
                <Link to="Login" className="userLogo">
                    <FaRegUser />
                </Link>
            </button>
            {showDropdown && (
                <div className="dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Help & Info</a>
                    <a href="#">Logout</a>
                </div>
            )}
        </div>
    )
}


const Sidebar = () => {

    const[show, setShow] = useState(false)

    

    return (
    <main className = {show? 'space-toggle' : ''}>
        <header className= {`header ${show ? 'space-toggle' : null }`}>
            <div className="header-toggle " onClick={() => setShow(!show)}>
                <FaBars />
            </div>

            

            <DropDownProfile/>
            

        </header>

        

        <aside className={`sidebar ${show ? 'show' : null}`}>
            <nav className="nav">
                <div>
                    <Link to="Home" className="nav-logo active">
                        <FaHome className='nav-logo-icon' />
                            <span className="nav-logo-name">
                                Home
                            </span>
                    </Link>

                    <div className="nav-list">

                        <Link to="My_profile" className="nav-link">
                            <FaGraduationCap className='nav-logo-icon' />
                                <span className="nav-logo-name">
                                    My Profile
                                </span>
                        </Link>

                        <Link to="My_library" className="nav-link ">
                            <IoIosStar className='nav-logo-icon' />
                            <span className="nav-logo-name">
                                My Library
                            </span>
                        </Link>

                        <Link to="Alerts" className="nav-link">
                            <IoMail className='nav-logo-icon'/>
                            <span className="nav-logo-name">
                            Alerts
                            </span>
                        </Link>

                        <Link to="Metrices" className="nav-link">
                            <ImStatsBars2 className='nav-logo-icon'/>
                            <span className="nav-logo-name">
                                Metrices
                            </span>
                        </Link>

                    </div>

                
                    <div className="advanced-search">
                        <Link to="Advanced_search" className="nav-link">
                            <GrSearchAdvanced className='nav-logo-icon'/>
                            <span className="nav-logo-name">
                                Advanced Search
                            </span>
                        </Link> 
                    </div>  
                

                    <div className="settings">
                        <Link to="/Settings" className="nav-link">
                            <IoMdSettings className='nav-logo-icon'/>
                            <span className="nav-logo-name">
                                Settings
                            </span>
                        </Link>
                    </div>
                </div> 
            </nav>
        </aside>
    </main>
  )
}

export default Sidebar
