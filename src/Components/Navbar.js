import React,{useState} from 'react';
import { useAuth } from "../contexts/AuthContext"
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom";
import {SidebarData} from "./SidebarData";
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar(){
    const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
   const[sidebar,setSidebar]=useState(false)
   const showSidebar=()=>setSidebar(!sidebar)
        return (
            <>
             <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item,index)=>{
                            if(currentUser.email==="admin@gmail.com" && item.owner==="admin")
                            {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                            }else if(currentUser.email!=="admin@gmail.com" && item.owner==='student')
                            {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                </nav>
                </IconContext.Provider>
            </>
        );
    
}



export default Navbar;