import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('')

    const { keyword } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => { setSearchQuery(e.target.value) };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${searchQuery}`);
    };

    useEffect(() => {
        setSearchQuery(keyword || '')
    }, [keyword]);

    return (
        <nav className="px-2 sm:px-4 py-2.5 rounded white:bg-white">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <div className="flex items-center">
                    {/* side-bar hambuger */}
                    <button data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center text-sm text-stone-100 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>

                    {/* logo */}
                    <Link to='/'>
                    <div className="flex">
                        <img src="Youtube-full-color-icon.svg" className="h-6 ml-5 mr-2 mt-1 sm:h-5.5" alt="Youtube Logo" />
                        <span className="self-center text-xl text-stone-100 font-semibold whitespace-nowrap dark:text-dark">Youtube</span>
                    </div>
                    </Link>
                </div>


                {/* user-menu */}
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="user photo"/>
                    </button>

                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* search-menu */}
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="search-menu">
                    {/* search-menu : hidden */}
                    <button type="button" data-collapse-toggle="search-menu" aria-controls="search-menu" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>    
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </button>

                    {/* search-menu : not hidden*/}
                    <div className="relative hidden md:block">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={searchQuery}
                                id="search-navbar"
                                className="block w-96 p-1 pl-3 text-sm text-gray-50 border border-neutral-500 rounded-2xl bg-neutral-600 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="search..."
                                onChange={handleChange}
                            />
                            <button type="submit" className="absolute top-0 right-0 p-1 px-4 text-sm font-medium text-gray-50 bg-neutral-800 rounded-r-2xl border border-neutral-500">
                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span className="sr-only">Search</span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </nav>
    );
}

