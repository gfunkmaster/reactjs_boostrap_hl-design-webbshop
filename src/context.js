import React, { useContext, useEffect, useState } from "react";
export const url = "https://webshop.wm3.se/api/v1/shop/products";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //setting up state values
  const [products, setProducts] = useState([]);
  const [slide, setSlide] = useState();
  const [query, setQuery] = useState(""); //oru searchstring
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //fetch Products
    const fetchProduct = async (url) => {
      try {

          const resp = await fetch(url);
          const data = await resp.json();
          console.log(data);

          setProducts(data);

      } catch (error) {
          console.log(error);
      }
  }

  //functions
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  //useEffect
  useEffect(() => {
    fetchProduct(`${url}?q=${query}`); //searinch for query 
}, [query]) //fethc products every time i type


  return <AppContext.Provider value={{products, query, setQuery, slide, isSidebarOpen, setIsSidebarOpen, openSidebar, closeSidebar}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
