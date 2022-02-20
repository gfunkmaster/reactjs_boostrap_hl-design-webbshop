import React from 'react'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import {links} from '../utils/constans'
import './Sidebar.css';

const Sidebar = () => {
    //getting our values, methods from globalContenxt
  const  {isSidebarOpen, closeSidebar, openSidebar} = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <div className="sidebar-container">
      <aside
        className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}
      >
        <div className="sidebar-header">
          <h2></h2>
          <button className="close-btn" type="button" onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li>
                <Link to={url} onClick={closeSidebar} className=" text-uppercase text-dark text-decoration-none">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar