import React from 'react'

export default function Beranda() {
    return (
        <>
            <div className='container mx-auto'>
                <span className='font-extrabold'>Latest projext</span>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
                    <div className='body__ w-auto border border-gray-200 shadow-lg rounded-lg p-6 text-justify'>
                        <div className='Header__ font-bold mb-5'>Learn HTML</div>
                        <img className='mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa illum cupiditate totam illo minima officiis quis assumenda. Aliquid architecto error sapiente iure, laboriosam explicabo saepe voluptatem nesciunt eligendi deleniti.
                        <div className='Footer__ flex font-extralight'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-3'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            
                            &nbsp; Latest post
                        </div>
                    </div>
                    <div className='body__ w-auto border border-gray-200 shadow-lg rounded-lg p-2.5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi et cumque tempore, at pariatur deserunt soluta impedit vitae rerum molestias odio cupiditate perferendis praesentium aspernatur laborum asperiores. Repudiandae, suscipit laborum!
                    </div>
                </div>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
                    <div className='body__ w-auto border border-gray-200 shadow-lg rounded-lg p-6 text-justify'>
                        <div className='Header__ font-extrabold'>Learn HTML</div>
                        <img className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png" alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsa illum cupiditate totam illo minima officiis quis assumenda. Aliquid architecto error sapiente iure, laboriosam explicabo saepe voluptatem nesciunt eligendi deleniti.
                        <div className='Footer__ flex font-extralight'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-3'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                            </svg>
                            &nbsp; latest post
                        </div>
                    </div>
                    <div className='body__ w-auto border border-gray-200 shadow-lg rounded-lg p-2.5'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi et cumque tempore, at pariatur deserunt soluta impedit vitae rerum molestias odio cupiditate perferendis praesentium aspernatur laborum asperiores. Repudiandae, suscipit laborum!
                    </div>
                </div>
            </div>
        </>
    )
}
