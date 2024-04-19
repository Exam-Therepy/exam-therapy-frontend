'use client'
import { use, useEffect, useState } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import SearchBox from './SearchBox'
import Link from 'next/link';


export default function UserHeader() {
    const { user } = useUser();

    const pathname = usePathname();
    const newPath = pathname.split('/')[1];


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    if (newPath === 'exam') {
        return
    }

    if (newPath === 'admin') {
        return <header>Admin Header</header>
    }

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">

                <div>
                    <Link href="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">Mock Test</span>
                    </Link>
                </div>

                <div className='w-3/5'>
                    <SearchBox />
                </div>

                <div className="flex space-x-4">
                    <nav className="hidden md:flex space-x-4 py-1">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Categories</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                    </nav>

                
                    {!user ? <a href="/api/auth/login" ><button className="hidden md:block bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">Login</button></a> :
                        <a href="/api/auth/logout"><button className="hidden md:block bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-sm">Logout</button> </a>}

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600 focus:outline-none">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M19 5.41L17.59 4 12 9.59 6.41 4 5 5.41 10.59 11 5 16.59 6.41 18 12 12.41 17.59 18 19 16.59 13.41 11 19 5.41z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
                        {user ? <a href='/api/auth/logout'>Logout</a> : <a href='/api/auth/login'>Login</a>}
                    </nav>
                </div>
            )}
        </header>
    )
}
