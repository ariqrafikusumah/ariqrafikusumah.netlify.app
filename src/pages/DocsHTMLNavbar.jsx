import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'

export default function DocsHTMLNavbar() {
    const codeMenu =
        `<ul>
    <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
</ul>`;
    const codeCSS =
        `<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
}
</style>`;
    const codeNavbar =
        `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tutorial Navbar Link</title>
  </head>
  <style>
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
    }

    li {
      float: left;
    }

    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li a:hover {
      background-color: #111;
    }
  </style>
  <body>
    <ul>
      <li><a class="active" href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </body>
</html>`;
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className='lg:px-2'>
                    <div className=' text-lg font-bold'>
                        Documentation - HTML
                    </div>
                    <div className='flex flex-wrap gap-5 '>
                        <div className='block cursor-pointer font-bold text-white bg-blue-300 p-2.5 rounded-lg'>
                            <Link className='flex gap-2' to="/DocsHTML"><ArrowLeftCircleIcon className='w-6' />Docs</Link>
                        </div>
                        <div className='block font-bold text-white bg-blue-300 p-2.5 rounded-lg'>
                            Form Input
                        </div>
                        <div className='block font-bold text-white bg-blue-300 p-2.5 rounded-lg'>
                            Footer
                        </div>
                        <div className='block font-bold text-white bg-blue-300 p-2.5 rounded-lg'>
                            Table
                        </div>
                        <div className='block font-bold text-white bg-blue-300 p-2.5 rounded-lg'>
                            Button
                        </div>
                    </div>
                    <div className='text-4xl mt-5'>Navbar</div>
                    <p>Memiliki navigasi yang mudah digunakan penting untuk situs web apa pun.
                        Dengan CSS, Anda dapat mengubah menu HTML yang membosankan menjadi bilah navigasi yang menarik.
                    </p>
                    <div className='text-4xl mt-5 mb-5'>Buatkan menu link pada <span className='text-lg text-gray-500 italic border rounded-lg p-2.5'>index.html</span></div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeMenu}
                    </SyntaxHighlighter>
                    <div className='text-4xl mt-5 mb-5'>Style Navbar Sebagai Tampilan dengan CSS</div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeCSS}
                    </SyntaxHighlighter>
                    <div className='text-4xl mt-5 mb-5'>Full Code Navbar</div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeNavbar}
                    </SyntaxHighlighter>
                </div>
            </div>
            <Footer />
        </>
    )
}
