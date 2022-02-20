import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Men from './pages/Men'
import Women from './pages/Women'
import './App.css';

import Sidebar from "./components/Sidebar";
import SingelProduct from "./pages/SingelProduct";
import Home from "./pages/Home";
import Header from "./pages/Header";


function App() {
  return (
    <>
      
<BrowserRouter>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      <Route path="products/:id" element={<SingelProduct/>} /> 
      </Routes>
    </BrowserRouter>
   
   
      
      
   </>
  );
}

export default App;
