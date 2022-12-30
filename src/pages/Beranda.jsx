import React from 'react'
import Footer from '../components/Footer'
import { ArrowSmallUpIcon, MapIcon, MapPinIcon, StarIcon } from "@heroicons/react/24/solid"
import undrawProfile from "../../public/img/undraw-profile.svg"
import ScrollToTop from 'react-scroll-up'
import { LiveChatWidget } from '@livechat/widget-react'

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
                    <span>Ariq Rafi Kusumah</span>
                    <p className='flex font-extralight text-sm gap-1'><MapPinIcon className='w-3' /> Location, Indonesia <StarIcon className='w-3' /> Rating : 4,7/5</p>
                    <p className=' font-thin text-xl'>i'm developer indonesian, frontend website</p>
                </div>
                <div className='container mx-auto xl:ml-52 lg:ml-32 md:ml-24 sm:'>
                    <button className='sm:w-auto font-bold text-black hover:text-white hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-200 duration-500 bg-white p-3 rounded-full border-4 border-blue-300'>
                        Baca Selengkapnya
                    </button>
                </div>
            </div>
            <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
                <div className='container mx-auto'>
                    <div className='conatiner mx-auto grid lg:grid-cols-2 md:grid-cols-1'>
                        <div className=''>
                            <div className='xl:px-32 xl:py-52 lg:px-12 lg:py-52 md:px-32 md:py-12 xs:py-12 xs:px-2'>
                                <span className='font-bold text-6xl text-white'>Tentang</span>
                                <p className='text-white mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus quos, officia ad molestias voluptatibus porro vel eveniet vero similique rem recusandae. Totam ipsa soluta quos repudiandae doloribus laboriosam ad.</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='xl:py-52 xl:px-4 lg:px-12 lg:py-52 md:px-32 sm:px-32 sm:py-12 xs:py-12 xs:px-2'>
                                <img className='w-92 h-92' src={undrawProfile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
