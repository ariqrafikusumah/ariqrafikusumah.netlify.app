import React from 'react'
import { Link } from 'react-router-dom'
import logoARK from '../../public/img/logo-ark.png'


export default function Navbar() {
    return (
        <>
            <nav className='bg-white px-2 sm:px-4 py-2.5 border border-gray-200 shadow-lg'>
                <div className='container mx-auto flex flex-wrap justify-around '>
                    <div className='flex'>
                        <Link className='flex items-center' to="/">
                            <img
                                className='xl:w-32 lg:w-24 md:w-24 sm:w-24 xs:w-24 xss:w-24 text-gray-900'
                                src={logoARK}
                                alt="image-logo"
                            />
                        </Link>
                    </div>
                    <div className='nav__Toggle flex'>
                        <div>
                            <ul className='nav__menu flex xl:p-4xl lg:p-4xl md:p-3xl sm:p-3xl xs: xss:'>
                                <li className='xl:text-lg  lg:px-6 md:px-3 lg:py-8 md:py-3 sm:px-2 sm:py-6 xs:px-3 xs:py-2 xss:px-3 xss:py-2  text-gray-900 cursor-pointer hover:text-gray-500 duration-500'><Link to="/">Beranda</Link></li>
                                <li className='xl:text-lg  lg:px-6 md:px-3 lg:py-8 md:py-3 sm:px-2 sm:py-6 xs:px-3 xs:py-2 xss:px-3 xss:py-2  text-gray-900 cursor-pointer hover:text-gray-500 duration-500'><Link to="/Tentang">Tentang</Link></li>
                                <li className='xl:text-lg  lg:px-6 md:px-3 lg:py-8 md:py-3 sm:px-2 sm:py-6 xs:px-3 xs:py-2 xss:px-3 xss:py-2  text-gray-900 cursor-pointer hover:text-gray-500 duration-500'><Link to="/Produk">Produk</Link></li>
                                <li className='xl:text-lg  lg:px-6 md:px-3 lg:py-8 md:py-3 sm:px-2 sm:py-6 xs:px-3 xs:py-2 xss:px-3 xss:py-2  text-gray-900 cursor-pointer hover:text-gray-500 duration-500'><Link to="/WhatsappOrder">Order</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
