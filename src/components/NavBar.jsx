import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assest/img/logo.png";
import { mainContext } from '../context/MainContext';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {logout,user} = useContext(mainContext)
    return (
        <header aria-label="Site Header relative" className="bg-white relative">
            <div  className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <Link className="flex items-center text-teal-600 h-[100px]" to="/">
                    <img className='w-full h-[50px]' src={logo} alt="" />
                </Link>
                <div className="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Site Nav" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-sm">
                    { user?.uid &&
                      <>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/services/add">
                            Add services
                            </Link>
                        </li>
                        <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" to="/my-reviews">
                            My Reviews
                            </Link>
                        </li>
                      </>  
                    }
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Careers
                        </a>
                    </li>
                    <li>
                        <Link className="text-gray-500 transition hover:text-gray-500/75" to="/services">
                        Services
                        </Link>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Projects
                        </a>
                    </li>
                    <li>
                        <a className="text-gray-500 transition hover:text-gray-500/75" href="/">
                        Blog
                        </a>
                    </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        {   user ? 
                                <button onClick={()=>logout()} className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" to="/login">
                                Logout
                            </button>
                            :
                            <>
                                <Link className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700" to="/login">
                                    Login
                                </Link>
                                <Link className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block" to="/register">
                                    Register
                                </Link>
                            </>
                        }
                    </div>
                    <button onClick={()=>setIsOpen(!isOpen)} className="block rounded bg-gray-100 p-2.5 text-gray-600 transition  hover:text-gray-600/75 md:hidden">
                    <span className="sr-only">Toggle menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                    <nav aria-label="Main Nav" className={`${isOpen ? "top-[64px]" : 'top-[-500px]'} transition flex flex-col space-y-1 absolute md:hidden  p-2 bg-gray-800 w-screen right-0 z-50`}>
                        <a href className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700">
                            Teams
                        </a>
                        <a href className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700">
                            Billing
                        </a>
                        <a href className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700">
                            Invoices
                        </a>
                        <a href className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-400 hover:text-gray-700">
                            Account
                        </a>
                    </nav>
                </div>
                </div>
                
            </div>
            
        </header>

    );
};

export default NavBar;