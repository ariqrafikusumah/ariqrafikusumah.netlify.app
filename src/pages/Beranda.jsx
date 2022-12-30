import React from 'react'
import Footer from '../components/Footer'
import { ArrowSmallUpIcon, ClockIcon, EyeIcon, MapIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid"
import undrawProfile from "../../public/img/undraw-profile.svg"
import ScrollToTop from 'react-scroll-up'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

export default function Beranda() {
    return (
        <>
            <ScrollToTop showUnder={160}>
                <div className='border border-gray-200 shadow-lg bg-white rounded-lg'>
                    <ArrowSmallUpIcon className='text-black w-10' />
                </div>
            </ScrollToTop>

            <div className='h-screen container mx-auto items-center grid md:grid-cols-2 lg:px-52 md:px-32 sm:px-12'>
                <div className='container mx-auto text-left font-bold text-4xl'>
                    <TypeAnimation
                        sequence={['Ariq', 1000, 'Ariq Rafi', 1000, 'Ariq Rafi Kusumah',
                            1000, 'Ariq Rafi', 1000, 'Ariq', 1000, '', 500]}
                        //  Continuing previous Text
                        style={{ fontSize: '1em' }}
                        wrapper="div"
                        repeat={Infinity}
                    />
                    <p className='flex font-extralight text-sm gap-1'><MapPinIcon className='w-3' /> Location, Indonesia <StarIcon className='w-3' /> Rating : 4,7/5</p>
                    <p className=' font-thin text-xl'>i'm developer indonesian, frontend website</p>
                </div>
                <div className='container mx-auto xl:ml-52 lg:ml-32 md:ml-24 lg:bottom-0 md:bottom-0 sm:bottom-32 xs:bottom-32 xss:bottom-32 relative'>
                    <Link to='/NotFound' className='sm:w-auto font-bold text-black hover:text-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-200 duration-500 bg-white p-3 rounded-full border-4 border-blue-300'>
                        Baca Selengkapnya
                    </Link>
                </div>
            </div>
            <div className='h-screen bg-gradient-to-r from-green-400 via-blue-500 to-cyan-500'>
                <div className='container mx-auto'>
                    <div className='conatiner mx-auto grid lg:grid-cols-2 md:grid-cols-1'>
                        <div className=''>
                            <div className='xl:px-32 xl:py-52 lg:px-12 lg:py-52 md:px-32 md:py-12 xs:py-12 xs:px-2 xss:py-12'>
                                <span className='font-bold text-6xl text-white'>Tentang</span>
                                <p className='text-white mt-5 text-justify'>Hi Perkenalkan Nama Saya Ariq Rafi Kusumah, Saya adalah seorang developer front-end dari indonesia, saya ... </p>
                                <div className='mt-5'>
                                    <Link to='/NotFound' className='outline-double shadow-lg rounded-lg px-3 py-3 text-black font-mono bg-white hover:bg-blue-900 hover:text-white cursor-pointer duration-500'>
                                        Info selengkapnya
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='xl:py-52 xl:px-4 lg:px-12 lg:py-52 md:px-32 sm:px-0 sm:py-12 xs:py-12 xs:px-2 xss:py-12'>
                                <img className='w-92 h-92' src={undrawProfile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-3xl font-bold mt-5 mb-5'>
                <div className='lg:ml-12'>
                <h1 className=' font-mono'>Postingan Terbaru </h1>
                </div>
            </div>
            <div className='container mx-auto grid  xl:grid-cols-4 lg:grid-cols-3 mt-5 gap-4 xl:px-12'>
                <div className='w-full border border-gray-200 p-2.5 shadow-lg rounded-lg'>
                    <div className='Header__ w-auto font-semibold p-2.5'>
                        Project
                    </div>
                    <div className='Body___ w-auto'>
                        <img className='w-52 mx-auto' src="https://i.pinimg.com/564x/fc/66/fd/fc66fd8a2d3e4bc8c72f4cadb7bf3b62.jpg" alt="" />
                        <p className='text-justify px-3 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ex, labore sit officiis ut ipsam consectetur eum quia explicabo cum ratione, magni nemo quae temporibus unde! Consequatur illo quis sit?</p>
                        <div className='px-3 mb-3'>
                            <a className='border bg-blue-500 text-white border-blue-500 rounded-lg px-12 py-1'>
                                Lihat
                            </a>
                        </div>
                    </div>
                    <div className=' gap-2 Footer__ w-auto font-extralight italic text-sm'>
                        <p className='flex gap-2 p-2.5'><EyeIcon className='w-3 text-gray-500' />Terbaru</p>
                    </div>
                </div>
                <div className='w-full border border-gray-200 p-2.5 shadow-lg rounded-lg'>
                    <div className='Header__ w-auto font-semibold p-2.5'>
                        Project
                    </div>
                    <div className='Body___ w-auto'>
                        <img className='w-52 mx-auto' src="https://i.pinimg.com/564x/fc/66/fd/fc66fd8a2d3e4bc8c72f4cadb7bf3b62.jpg" alt="" />
                        <p className='text-justify px-3 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ex, labore sit officiis ut ipsam consectetur eum quia explicabo cum ratione, magni nemo quae temporibus unde! Consequatur illo quis sit?</p>
                        <div className='px-3 mb-3'>
                            <a className='border bg-blue-500 text-white border-blue-500 rounded-lg px-12 py-1'>
                                Lihat
                            </a>
                        </div>
                    </div>
                    <div className=' gap-2 Footer__ w-auto font-extralight italic text-sm'>
                        <p className='flex gap-2 p-2.5'><EyeIcon className='w-3 text-gray-500' />Terbaru</p>
                    </div>
                </div>
                <div className='w-full border border-gray-200 p-2.5 shadow-lg rounded-lg'>
                    <div className='Header__ w-auto font-semibold p-2.5'>
                        Project
                    </div>
                    <div className='Body___ w-auto'>
                        <img className='w-52 mx-auto' src="https://i.pinimg.com/564x/fc/66/fd/fc66fd8a2d3e4bc8c72f4cadb7bf3b62.jpg" alt="" />
                        <p className='text-justify px-3 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ex, labore sit officiis ut ipsam consectetur eum quia explicabo cum ratione, magni nemo quae temporibus unde! Consequatur illo quis sit?</p>
                        <div className='px-3 mb-3'>
                            <a className='border bg-blue-500 text-white border-blue-500 rounded-lg px-12 py-1'>
                                Lihat
                            </a>
                        </div>
                    </div>
                    <div className=' gap-2 Footer__ w-auto font-extralight italic text-sm'>
                        <p className='flex gap-2 p-2.5'><EyeIcon className='w-3 text-gray-500' />Terbaru</p>
                    </div>
                </div>
                <div className='w-full border border-gray-200 p-2.5 shadow-lg rounded-lg'>
                    <div className='Header__ w-auto font-semibold p-2.5'>
                        Project
                    </div>
                    <div className='Body___ w-auto'>
                        <img className='w-52 mx-auto' src="https://i.pinimg.com/564x/fc/66/fd/fc66fd8a2d3e4bc8c72f4cadb7bf3b62.jpg" alt="" />
                        <p className='text-justify px-3 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ex, labore sit officiis ut ipsam consectetur eum quia explicabo cum ratione, magni nemo quae temporibus unde! Consequatur illo quis sit?</p>
                        <div className='px-3 mb-3'>
                            <a className='border bg-blue-500 text-white border-blue-500 rounded-lg px-12 py-1'>
                                Lihat
                            </a>
                        </div>
                    </div>
                    <div className=' gap-2 Footer__ w-auto font-extralight italic text-sm'>
                        <p className='flex gap-2 p-2.5'><EyeIcon className='w-3 text-gray-500' />Terbaru</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
