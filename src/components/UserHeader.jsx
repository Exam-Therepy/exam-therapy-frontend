'use client'
import { useUser } from "@auth0/nextjs-auth0/client";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { Avatar } from "@nextui-org/react";

export default function UserHeader() {
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    return (
        <header className="bg-[#FCFCFC] shadow-md">
            <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                <div>
                    <Link href="/" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden md:block">Mock Test</span>
                    </Link>
                </div>

                <div className='w-4/5'>
                    <SearchBox />
                </div>

                <div className="flex justify-center space-x-4 mt-2">
                    <nav className="hidden md:flex space-x-4 py-1">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Categories</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                    </nav>

                    {user ? (
                        <div className="relative space-x-4">
                            <button onClick={toggleProfile}>
                                <Avatar isBordered src={user.picture} size="sm" />
                            </button>
                            {isProfileOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
                                    <Link href="/studentdashboard" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dashboard</Link>
                                    <a href="/api/auth/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                                </div>
                            )}
                        </div>
                    ) : (
                        <a href="/api/auth/login">
                            <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm hidden md:block">Login</button>
                        </a>
                    )}

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="block text-gray-800 hover:text-gray-600 focus:outline-none mb-3">
                            <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
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
                <div className="md:hidden absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
                        {user ? <a href='#' onClick={toggleProfile}>Profile</a> : <a href='/api/auth/login'>Login</a>}
                    </nav>
                </div>
            )}
        </header>
    )
}
