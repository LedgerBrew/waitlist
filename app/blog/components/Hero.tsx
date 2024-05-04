import React from 'react'

const Hero = () => {
  return (
    <section className="bg-[#F0FFEB] py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Welcome to accounting
          </h1>
          <p className="text-lg md:text-xl text-[#8A8A8A] dark:text-gray-400">
            Dive into a world of accounting, where concepts come alive and bookkeeping is made simple.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero