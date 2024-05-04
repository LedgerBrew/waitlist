import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image className="mr-2" src="/Logo-1a.png" width={48} height={48} alt="logo" />
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <Link href="/" className="block py-2 px-3 text-gray-900" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="block py-2 px-3 text-[#744629]">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
  )
}

export default Navbar