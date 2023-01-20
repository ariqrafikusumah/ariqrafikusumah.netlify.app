import React from 'react'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
export default function DocsHTML() {
    const codeString =
        `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`;
    const codeJudul =
        `<h1> Heading 1</h1>
<h2> Heading 2</h2>
<h3> Heading 3</h3>
<h4> Heading 4</h4>
<h5> Heading 5</h5>
<h6> Heading 6</h6>
`;
    const codeParagraf =
        `<p> paragraf satu </p>
<p> paragraf dua </p>
`;
    const codeGambar =
        `<img src="filename.jpg" alt="logo" width="104" height="142">
`;
    const codeTautan =
        `<a href="google.com">Ini adalah link tautan</a>
`;
    <a href=""></a>
    return (
        <>
            <div className='container mx-auto mt-5'>
                <div className='lg:px-52'>
                    <div className=' text-lg font-bold'>
                        Documentation - HTML
                    </div>
                    <div className='flex flex-wrap gap-5 '>
                        <div className='block cursor-pointer font-bold text-white bg-blue-300 p-2.5 rounded-lg bg-gradient-to-r form-blue-400 hover:bg-blue-400'>
                            <Link to="/DocsHTMLNavbar"> Navbar</Link>
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
                    <div className='text-4xl mt-5'>
                        Apa itu HTML?
                    </div>
                    <div className='mt-5'>
                        <ul>
                            <li>HTML adalah singkatan dari Hyper Text Markup Language</li>
                            <li>HTML adalah bahasa markup standar untuk membuat halaman Web</li>
                            <li>HTML menggambarkan struktur halaman Web</li>
                            <li>HTML terdiri dari serangkaian elemen</li>
                            <li>Elemen HTML memberi tahu browser cara menampilkan konten</li>
                            <li>Elemen HTML memberi label potongan konten seperti "ini adalah judul", "ini adalah paragraf", "ini adalah tautan", dll.</li>
                        </ul>
                    </div>

                    <div className='text-3xl mt-5 mb-5'>Dokumen HTML Sederhana</div>
                    <div className='border shadow-lg rounded-lg'>
                        <SyntaxHighlighter language='html' style={dark}>
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                    <div className='text-3xl mt-5 mb-5'>Judul HTML</div>
                    <div>Heading HTML didefinisikan dengan tag:</div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeJudul}
                    </SyntaxHighlighter>
                    <div className='text-3xl mt-5 mb-5'>Paragraf HTML</div>
                    <div>Heading HTML didefinisikan dengan tag:</div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeParagraf}
                    </SyntaxHighlighter>
                    <div className='text-3xl mt-5 mb-5'>Gambar HTML</div>
                    <div>Gambar HTML ditentukan dengan img tag.</div>
                    <div>
                        File sumber ( <span className='text-red-500'>
                            src</span> ), teks alternatif ( <span className='text-red-500'>alt</span> ), width, dan height disediakan sebagai atribut:
                    </div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeGambar}
                    </SyntaxHighlighter>
                    <div className='text-3xl mt-5 mb-5'>Tautan HTML</div>
                    <div>Tujuan tautan ditentukan dalam <span className='text-red-500'> href</span> atribut.
                        Atribut digunakan untuk memberikan informasi tambahan tentang elemen HTML.
                        Anda akan belajar lebih banyak tentang atribut di bab selanjutnya</div>
                    <SyntaxHighlighter language='html' style={dark}>
                        {codeTautan}
                    </SyntaxHighlighter>
                </div>
            </div>
            <Footer />
        </>
    )
}
