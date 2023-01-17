import React from 'react'
import logoARK from '../../public/img/logo-ark.png'
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <div className='container mx-auto mt-12'>
        <div className='xl:grid grid-cols-3 mb-12 lg:px-12'>
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
              <span className='font-bold'>PETA SITUS</span>
              <div className=' py-4'>
                <div className=' py-3 font-mono cursor-pointer hover:text-gray-500'><Link to='/'>- Beranda</Link></div>
                <div className=' py-3 font-mono cursor-pointer hover:text-gray-500'><Link to='/NotFound'>- Tentang</Link></div>
                <div className=' py-3 font-mono cursor-pointer hover:text-gray-500'><Link to='/Produk'>- Produk</Link></div>
              </div>
            </div>
            <div>
              <span className='font-bold'> KONTAK</span>
              <div className=' py-4 grid grid-col-1'>
                <div className='flex gap-2 py-3 font-mono cursor-pointer hover:text-green-500'><FaWhatsapp className='w-6' />
                  <a href="https://wa.me/6281281444295?text=Hi%2C%20my%20name%20is%20Ariq%20Rafi%20Kusumah%0Ahow%20can%20I%20help%20%3F%F0%9F%91%8B%0A%0A*-%20Ask%20about%20website%20creation%20%3F*%0A_it's%20okay%20I'll%20accept%20it_%0A%0A*-%20How%20much%20to%20create%20%3F*%0A_Depends%20on%20the%20features%20used._%0A%0A*-%20How%20long%20to%20make%20it%20%3F*%0A_Depends%20on%20the%20features%20used._%0A%0Ahttps%3A%2F%2Fariqrafikusumah.netlify.app" target="_blank" rel="noopener noreferrer">
                    Whatsapp
                  </a>
                </div>
                <div className='flex gap-2 py-3 font-mono cursor-pointer hover:text-pink-500'><FaInstagram className='w-6' />
                  <a href="https://www.instagram.com/ariqrafi13/" target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </div>
                <div className='flex gap-2 py-3 font-mono cursor-pointer hover:text-blue-500'><FaLinkedin className='w-6' />
                  <a href="https://www.linkedin.com/in/ariq-rafi-kusumah-ab5413222/" target="_blank" rel="noopener noreferrer">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className=' border border-gray-200 shadow-lg' />
        <div className='mb-3 mt-3 lg:px-12'>
          <p>&#169; 2022  Copyright <Link to="/">Ariq Rafi Kusumah</Link> </p>
        </div>
      </div>
    </>
  )
}
