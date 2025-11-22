import React from 'react';

export default function Header() {
    return (
        <header className=' bg-white shadow-md sticky top-0 z-50'>
            <div className="header-top-area max-w-[1440px] mx-auto flex justify-between items-center p-4">
                <div className="logo">
                    <h2 className='text-purple-700 text-3xl'>SHOKH</h2>
                </div>

                <nav>
                    <ul className='flex gap-12'>
                        <li><a href='/' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Home</a></li>
                        <li><a href='/about' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>About</a></li>
                        <li><a href='/service' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Services</a></li>
                        <li><a href='/contact' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
