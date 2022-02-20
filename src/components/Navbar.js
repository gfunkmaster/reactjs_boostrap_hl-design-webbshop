import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { links } from "../utils/constans";

const Navbar = () => {
  const { openSidebar } = useGlobalContext();

  return (
    <>
      <div
        className="container m-4 "
       
        style={{
          position: "absolute",
          overflow: "hidden",
        }}
      >
        <div
        
          style={{
            position: "relative",
            top: "-20%",
            width: "100%",
            zIndex: 2,
            
          }}
        >
          <nav className="navbar transparent">
            <div className="container-fluid">
              <Link
                to="/"
                className="navbar-brand text-light text-decoration-none nav-menu-items text-uppercase"
              >
                SportWear.com
              </Link>
              
              <form className="d-flex justify-content-between">
                
              
                <Link to="/men" className="m-2 text-light text-decoration-none nav-menu-items ">
                  <span>Men</span>
                </Link>
                <Link
                  to="/women"
                  className="m-2 text-light text-decoration-none nav-menu-items"
                >
                  <span>Women</span>
                </Link>

                <button
                  className="nav-toggle text-light text-decoration-none mb-3 float-sm-end"
                  type="button"
                  onClick={openSidebar}
                >
                  <FaBars  className="button-right"/>
                </button>
               
              </form>
            </div>
          </nav>

          {/*    <nav className="navbar navbar-dark navbar-expand-sm mt-3 w-100 ">

            <div className="d-flex justify-content-between w-100">
              <div>
                <Link className="navbar-brand" to="/">
                  SportShoes.com
                </Link>
              </div>
              <div className="pt-1">
                  <Link to="/men">
                    <span className="navbar-text m-2">Men</span>
                  </Link>
                  <Link to='/women'>
                    <span className="navbar-text m-2">Women</span>
                  </Link>


                   
              </div>
            
            </div>
          </nav> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

/* 

 <div className="nav-center">
          <div className="nav-header d-flex flex-row nav-links">
            <Link to="/">
              <h2>Sport|War</h2>
            </Link> 
            
          </div>
          <ul className="nav-links d-flex">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} >
                  <Link to={url} className="">
                  <span className="navbar-text m-2">{text}</span>
                </Link>
                </li>
              );
            })}
          </ul>
          <button className="nav-toggle text-light" type="button" onClick={openSidebar}>
              <FaBars />
            </button>
        </div>


*/
