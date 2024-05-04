import React from 'react'
import Navbar from './components/Navbar'
import { client, urlFor } from '@/app/lib/sanity';
import { blogCard } from '@/app/lib/interface';
import Image from 'next/image';
import Link from 'next/link';
import Hero from './components/Hero';
import CTA from './components/Cta';
import Footer from './components/Footer';

export const revalidate = 30;

async function getData() {
    const query = `
    *[_type == 'accountingBlog'] | order(_createdAt desc) {
        title,
          smallDescription,
          "currentSlug": slug.current,
          titleImage
      }`;

    const data = await client.fetch(query)

    return data
}


export default async function  BlogPage() {
    const blogData: blogCard[] = await getData()
  return (
    <div><Navbar />
    <Hero />
    <section className="bg-white text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                {/* <div className="mx-auto max-w-lg text-center">

                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Fundamentals</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Dark</span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-red-900 dark:text-red-300">Red</span>
                </div> */}

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogData.map((post, idx) => (
                        <div className="mt-8">
                            <div key={idx} className="block rounded-xl border border-gray-200 hover:shadow-xl transition pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-[#8A8A8A]">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block bg-transparent px-12 py-3 rounded-lg border-2 border-[#744629] text-sm font-medium text-[#744629] transition hover:bg-[#744629] hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                           
                        </div>
                    
                    ))}
                </div>

                
            </div>
        </section>

        <CTA />
        <Footer />


      


  
    
    </div>

  )
}




