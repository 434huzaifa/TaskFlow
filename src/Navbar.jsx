import {Navbar } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
const NavbarComponent = () => {
  const location=useLocation()
  return (
    <Navbar fluid rounded className='my-3 rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800'>
      <Navbar.Brand href="/">
        <img src="/taskflow.png" className="mr-3 h-6 sm:h-9" alt="TaskFlow Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">TaskFlow</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname=="/"}>
          <Link className='font-bold' to="/" >Home</Link>
        </Navbar.Link>
        <Navbar.Link active={location.pathname=="/task"}><Link className='font-bold' to="/task" >Task Dashboard</Link></Navbar.Link>
        <Navbar.Link active={location.pathname=="/registration"}><Link className='font-bold' to="/registration" >Registration</Link></Navbar.Link>
        <Navbar.Link active={location.pathname=="/login"}><Link className='font-bold' to="/login" >Login</Link></Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;