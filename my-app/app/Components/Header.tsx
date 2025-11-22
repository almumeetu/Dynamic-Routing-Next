import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className=' bg-white shadow-md sticky top-0 z-50'>
            <div className="header-top-area max-w-[1440px] mx-auto flex justify-between items-center p-4">
                <div className="logo">
                    <h2 className='text-purple-700 text-3xl'>SHOKH</h2>
                </div>

                <nav>
                    <ul className='flex items-center gap-6'>
                        <li>
                            <Link href='/' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Blog</Link>
                        </li>
                        <li>
                            <Link href='/about' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>About</Link>
                        </li>
                        <li>
                            <Link href='/service' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Services</Link>
                        </li>
                        <li>
                            <Link href='/contact' className='text-lg font-medium text-black py-3 active:text-purple-700 hover:text-purple-700 transition-all delay-100'>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
