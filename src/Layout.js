import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // Add Outlet from react-router-dom to render child components of a parent route
import useWindowSize from './hooks/useWindowSize';


const Layout = ({search, setSearch}) => {
  const { width } = useWindowSize();
  return (
    <div className="App">
        <Header title="React JS Blog"/>
        <Nav />
        <Outlet /> {/* Add Outlet to render child components of a parent route */}
        <Footer/>
      
    </div>
  )
}

export default Layout
