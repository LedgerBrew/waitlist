import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="p-4 bg-[#744629] md:p-8 lg:p-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
                        <Image className="mr-2" src="/Logo-1a.png" width={48} height={48} alt="logo" />

                    </a>
                    <p className="my-2 text-white">The Refreshing Way to Do Your Books</p>
                    <span className="text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">LedgerBrew™</a>. All Rights Reserved.</span>
                </div>
            </footer>
  )
}

export default Footer