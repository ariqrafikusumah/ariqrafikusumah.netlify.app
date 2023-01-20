import React from 'react'
import Footer from '../components/Footer'
import NotFound from './NotFound'

export default function Tentang() {
  return (
    <>
      <div className='container mx-auto'>
        <div className='lg:px-56'>
          <div className='border shadow-lg border-gray-200 p-8 rounded-2xl mt-5'>
            <div>
              <img src="" alt="" />
            </div>
            <div class="shadow-lg relative w-32 h-32 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <img className='absolute w-32 h-32' src="https://media.licdn.com/dms/image/C4D03AQG3pypzdKl_uA/profile-displayphoto-shrink_400_400/0/1633351808792?e=1679529600&v=beta&t=SLPxJ-yPVJzZupmEy1vtC2XzO3Xcz54NvCZxvCnOBCM" alt="" />
            </div>
            <div className='text-2xl font-bold'>
              Ariq Rafi Kusumah
            </div>
            <p>Sangat termotivasi untuk mengembangkan kemampuan secara profesional. Saya yakin dengan kemampuan saya untuk menghasilkan</p>
            <p className=' font-extralight text-gray-500'>Cikarang Barat, Jawa Barat, Indonesia</p>
          </div>

          <div className='border shadow-lg border-gray-200 p-8 rounded-2xl mt-5'>
            <div className='text-2xl font-bold'>Pendidikan</div>
            <div className='grid xl:grid-cols-2 xl:w-32 lg:grid-cols-2 lg:w-32 md:grid-cols-2 md:w-96 sm:grid-cols-2 xs:grid-cols-1 gap-2 mt-5'>
              <img className='w-32 h-12' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVvKDQM_6JqYmDf0jQMupEPMAy1u9kt2ngjjwLIvHA2YCoNWDVRBEFq7F9YI27Cv4aaXiQdN_pQGSUfow_92sujVOi-gsAVVSeTw8fGokdo1IxnFjJj3vC5cRNyGbKYq03n_y5JTxspng6_a22bL6D4pq1m8LyUUi29Yi7FtsIoV-t74QXPIdhQJ9h/s0/LOGO%20ULBI%20-%20WIDE%20DARK.png" alt="" />
              <div className='font-bold lg:w-96'>Universitas Logistik dan Bisnis Internasional
                <div className='font-thin'>Sarjana Terapan Komputer, Teknik Informatika</div>
                <div className='text-sm text-gray-500 '>Tahun 2023</div>
              </div>
            </div>
            <div className='grid xl:grid-cols-2 xl:w-32 lg:grid-cols-2 lg:w-32 md:grid-cols-2 md:w-96 sm:grid-cols-2 xs:grid-cols-1 gap-2 mt-5'>
              <img className='w-32' src="https://rekreartive.com/wp-content/uploads/2019/04/Logo-SMA-PNG-Terbaru-Warna.png" alt="" />
              <div className='font-bold lg:w-96'>SMA Negeri 1 Cikarang Barat
                <div className='font-thin'>IPA</div>
                <div className='text-sm text-gray-500 '>Tahun 2015</div>
              </div>
            </div>
          </div>
          <div className='border shadow-lg border-gray-200 p-8 rounded-2xl mt-5'>
            <div className='text-2xl font-bold'>Keahlian</div>

            <div>
              HTML
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              CSS
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              Javascript
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              PHP
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }} />
              </div>
            </div>
            <div>
              MySQL
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
            <div>
              React JS
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              Python
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
