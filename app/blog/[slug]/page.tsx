import { article } from "@/app/lib/interface"
import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

export const revalidate = 30;

async function getData(slug: string) {
  const query = `
    *[_type == 'accountingBlog' && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`
  const data = await client.fetch(query)

  return data
}


export default async function blogDetails({ params }: { params: { slug: string } }) {
  const blogDetail: article = await getData(params.slug)
  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <div className="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white">{blogDetail.currentSlug}</div>
                </div>
              </li>

            </ol>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 md:px-6 md:py-8 lg:py-12">
        <div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <div className="not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
              {blogDetail.title}
            </h1>
            {/* <div className="block items-center space-x-4 text-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Published on May 4, 2024</span>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center max-w-3xl md:px-6 md:py-8 lg:py-12 mx-auto px-4 py-4 ">
        <Image
          src={urlFor(blogDetail.titleImage).url()}
          width={1200}
          height={600}
          alt="Blog hero image"
          priority
          className="rounded-lg mt-8 border"
        />
      </div>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
          <PortableText value={blogDetail.content} />
        </div>
      </div>



    </div>
  )

}