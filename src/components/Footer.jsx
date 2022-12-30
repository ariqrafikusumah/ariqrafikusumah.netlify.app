import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logoARK from '../../public/img/logo-ark.png'

export default function Footer() {
  return (
    <>
      <div className='container mx-auto mt-12 px-12'>
        <div className='xl:grid grid-cols-3 mb-12'>
          <div className='grid grid-rows-1 lg:mb-12 sm:mb-12 xs:mb-12'>
            <img className='w-32' src={logoARK} alt="logo-ark" />
            <div className=''>
              <span className='font-bold'>Ariq Rafi Kusumah</span>
              <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo velit sunt veniam cum quod, quam maxime tenetur voluptas molestias. Molestias, nostrum ab velit corporis explicabo id. Sequi, hic aliquid. Distinctio!</h1>
            </div>
          </div>
          <div className='flex flex-wrap justify-between'></div>

          <div className='grid grid-cols-2'>
            <div>
              <span className='font-bold'>SITE MAP</span>
              <ul className=' py-4'>
                <li className=' py-3'>Beranda</li>
                <li className=' py-3'>Tentang</li>
                <li className=' py-3'>Produk</li>
              </ul>
            </div>
            <div>
              <span className='font-bold'> CONTACT US</span>
              <ul className=' py-4'>
                <li className=' py-3'><FontAwesomeIcon icon="fa-brands fa-instagram" /> Whatsapp</li>
                <li className=' py-3'>Instagram</li>
                <li className=' py-3'>GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className=' border border-gray-200 shadow-lg'/>
        <div>
          copyright
        </div>
      </div>
    </>
  )
}
