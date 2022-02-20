import React from 'react'
import ProductList from '../components/ProductList'
import SearchForm from '../components/SearchForm'
import Footer from './Footer'
import Header from './Header'
const Home = () => {
  return (
    
    <main className='wrapper mt-3'>
    <div className="content container">
      <SearchForm />
      <ProductList />
      <Footer />
    </div>
   </main>
)

  
}

export default Home