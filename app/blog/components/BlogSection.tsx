import React from 'react'
import { client, urlFor } from '@/app/lib/sanity';
import { blogCard } from '@/app/lib/interface';
// import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';


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

export default async function BlogSection() {
    const blogData: blogCard[] = await getData()
    console.log(blogData)
    return (
        <section className="bg-white text-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                {/* <div className="mx-auto max-w-lg text-center">

                    <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Fundamentals</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Dark</span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-red-900 dark:text-red-300">Red</span>
                </div> */}

                <div >
                    {blogData.map((post, idx) => (
                        <div key={idx} className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div key={idx} className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div key={idx} className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div key={idx} className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div key={idx} className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
                                            Read More
                                            </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div key={idx} className="block rounded-xl border border-gray-300 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 pb-4">
                                <Image src={urlFor(post.titleImage).url()} alt="accompanying image" className="rounded-t-xl" height={500} width={500}/>
                                <div className="px-4">
                                    <h2 className="mt-4 text-xl font-bold text-gray-700 line-clamp-2">{post.title}</h2>

                                    <p className="mt-1 text-sm text-gray-500">{post.smallDescription}</p>
                                    <div className="mt-12 text-center">
                                        <Link href={`/blog/${post.currentSlug}`} className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400">
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
    )
}
