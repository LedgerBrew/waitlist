'use client'
import Image from "next/image";
import Link from "next/link";
import { useRef, FormEvent } from 'react';
import Accordion from "./components/accordion";

interface Sheet1 {
    email: string;
}

interface Response {
    sheet1: Sheet1;
}

export default function Home() {
    const formRef = useRef<HTMLFormElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        const email = emailRef.current!!.value;
        let url = 'https://api.sheety.co/f12354477dc9eef0a4f56bbc8865d4dc/ledgerBrewWaitlist/sheet1';
        let body = {
            sheet1: {
                email
            }
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => response.json())
            .then(json => {
                alert("Form submitted with email");
                formRef.current!!.reset();
                console.log(json.sheet1);
            });
        
    };

    return (
        <>
            {/* Navbar Start */}
            <nav className="bg-white border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image className="mr-2" src="/Logo-1a.png" width={48} height={48} alt="logo" />
                    </a>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                            <li>
                                <a href="#" className="block py-2 px-3 text-[#744629]" aria-current="page">Home</a>
                            </li>
                            <li>
                                <Link href="/blog" className="block py-2 px-3 text-gray-900">Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Navbar End */}

            {/* Hero Start */}

            <section className="pt-24 bg-white">
                <div className="px-12 mx-auto max-w-7xl">
                    <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                            <span>No more</span><span className="block w-full py-2 text-[#3D5835] bg-clip-text leading-12 bg-[#3D5835] lg:inline"> messy </span><span>books!</span>
                        </h1>
                        <p className="px-0 mb-8 text-lg text-[#8A8A8A] md:text-xl lg:px-24">
                            Simple accounting software you'll actually use for a beautiful, straightforward way to balance the books.
                        </p>
                        <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                            <form className="w-full max-w-md mx-auto" method="POST" action="https://api.sheety.co/f12354477dc9eef0a4f56bbc8865d4dc/ledgerBrewWaitlist/sheet1" ref={formRef} onSubmit={handleSubmit}>
                                <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only">Be the First to Try Nexus Free</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="email" name="Email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white" placeholder="Enter your email here..." required ref={emailRef} />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#744629] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2">Get Early Access</button>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full mx-auto mt-20 text-center md:w-10/12">
                        <div className="relative z-0 w-full mt-8">
                            <div className="relative overflow-hidden shadow-2xl rounded-xl">
                                <div className="flex items-center flex-none px-4 bg-[#F5EBD9] rounded-b-none h-11 rounded-xl">
                                    <div className="flex space-x-1.5">
                                        <div className="w-3 h-3 border-2 border-[#744629] rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-[#744629] rounded-full"></div>
                                        <div className="w-3 h-3 border-2 border-[#744629] rounded-full"></div>
                                    </div>
                                </div>
                                <Image className="rounded-xl rounded-t-none"
                                    src="/EmptyState.png"
                                    width={1000}
                                    height={500}
                                    alt="image of a dashboard"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero End */}


            {/* Features Start */}

            <section className="bg-white pt-24">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 pt-24">
                    <div className="max-w-screen-lg mb-8 lg:mb-16 text-center">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">What You Can Achieve Effortlessly with LedgerBrew</h2>
                        {/* <p className="text-gray-800 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
                    </div>
                    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.6665 5.16667C1.6665 4.23325 1.6665 3.76654 1.84816 3.41002C2.00795 3.09641 2.26292 2.84144 2.57652 2.68166C2.93304 2.5 3.39975 2.5 4.33317 2.5H4.6665C6.53335 2.5 7.46677 2.5 8.17981 2.86331C8.80701 3.18289 9.31695 3.69282 9.63653 4.32003C9.99984 5.03307 9.99984 5.96649 9.99984 7.83333V17.5L9.91646 17.3749C9.33759 16.5066 9.04816 16.0725 8.66575 15.7582C8.32722 15.4799 7.93714 15.2712 7.51784 15.1438C7.04421 15 6.52243 15 5.47886 15H4.33317C3.39975 15 2.93304 15 2.57652 14.8183C2.26292 14.6586 2.00795 14.4036 1.84816 14.09C1.6665 13.7335 1.6665 13.2668 1.6665 12.3333V5.16667Z" fill="#744629" />
                                    <path d="M18.3332 5.16667C18.3332 4.23325 18.3332 3.76654 18.1515 3.41002C17.9917 3.09641 17.7368 2.84144 17.4232 2.68166C17.0666 2.5 16.5999 2.5 15.6665 2.5H15.3332C13.4663 2.5 12.5329 2.5 11.8199 2.86331C11.1927 3.18289 10.6827 3.69282 10.3631 4.32003C9.99984 5.03307 9.99984 5.96649 9.99984 7.83333V17.5L10.0832 17.3749C10.6621 16.5066 10.9515 16.0725 11.3339 15.7582C11.6725 15.4799 12.0625 15.2712 12.4818 15.1438C12.9555 15 13.4772 15 14.5208 15H15.6665C16.5999 15 17.0666 15 17.4232 14.8183C17.7368 14.6586 17.9917 14.4036 18.1515 14.09C18.3332 13.7335 18.3332 13.2668 18.3332 12.3333V5.16667Z" fill="#744629" />
                                    <path d="M9.99984 17.5L9.91646 17.3749C9.33759 16.5066 9.04816 16.0725 8.66575 15.7582C8.32722 15.4799 7.93714 15.2712 7.51784 15.1438C7.04421 15 6.52243 15 5.47886 15H4.33317C3.39975 15 2.93304 15 2.57652 14.8183C2.26292 14.6586 2.00795 14.4036 1.84816 14.09C1.6665 13.7335 1.6665 13.2668 1.6665 12.3333V5.16667C1.6665 4.23325 1.6665 3.76654 1.84816 3.41002C2.00795 3.09641 2.26292 2.84144 2.57652 2.68166C2.93304 2.5 3.39975 2.5 4.33317 2.5H4.6665C6.53335 2.5 7.46677 2.5 8.17981 2.86331C8.80701 3.18289 9.31695 3.69282 9.63653 4.32003C9.99984 5.03307 9.99984 5.96649 9.99984 7.83333M9.99984 17.5V7.83333M9.99984 17.5L10.0832 17.3749C10.6621 16.5066 10.9515 16.0725 11.3339 15.7582C11.6725 15.4799 12.0625 15.2712 12.4818 15.1438C12.9555 15 13.4772 15 14.5208 15H15.6665C16.5999 15 17.0666 15 17.4232 14.8183C17.7368 14.6586 17.9917 14.4036 18.1515 14.09C18.3332 13.7335 18.3332 13.2668 18.3332 12.3333V5.16667C18.3332 4.23325 18.3332 3.76654 18.1515 3.41002C17.9917 3.09641 17.7368 2.84144 17.4232 2.68166C17.0666 2.5 16.5999 2.5 15.6665 2.5H15.3332C13.4663 2.5 12.5329 2.5 11.8199 2.86331C11.1927 3.18289 10.6827 3.69282 10.3631 4.32003C9.99984 5.03307 9.99984 5.96649 9.99984 7.83333" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>



                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Journal Entries</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Log Transactions in Seconds, Not Hours</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.3335 6.5C3.3335 5.09987 3.3335 4.3998 3.60598 3.86502C3.84566 3.39462 4.22811 3.01217 4.69852 2.77248C5.2333 2.5 5.93336 2.5 7.3335 2.5H12.6668C14.067 2.5 14.767 2.5 15.3018 2.77248C15.7722 3.01217 16.1547 3.39462 16.3943 3.86502C16.6668 4.3998 16.6668 5.09987 16.6668 6.5V17.5L14.3752 15.8333L12.2918 17.5L10.0002 15.8333L7.7085 17.5L5.62516 15.8333L3.3335 17.5V6.5Z" fill="#744629" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Invoicing</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Elegant Invoices That Get You Paid Faster</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_272_1059)">
                                        <path d="M11.2744 6.95989C10.7974 7.29996 10.2136 7.50001 9.58317 7.50001C7.97234 7.50001 6.6665 6.19417 6.6665 4.58334C6.6665 2.97251 7.97234 1.66667 9.58317 1.66667C10.6273 1.66667 11.5433 2.21535 12.0586 3.04012M4.99984 16.7393H7.17508C7.45869 16.7393 7.74057 16.773 8.01552 16.8405L10.3139 17.3991C10.8126 17.5206 11.3322 17.5324 11.8361 17.4345L14.3773 16.9401C15.0486 16.8093 15.6662 16.4879 16.1501 16.0171L17.9481 14.2681C18.4615 13.7695 18.4615 12.9604 17.9481 12.4609C17.4858 12.0112 16.7538 11.9606 16.2308 12.3419L14.1353 13.8707C13.8352 14.0901 13.4701 14.2082 13.0945 14.2082H11.0711L12.3591 14.2081C13.085 14.2081 13.6731 13.6361 13.6731 12.9299V12.6743C13.6731 12.0879 13.2628 11.5766 12.6782 11.4349L10.6903 10.9515C10.3668 10.873 10.0355 10.8333 9.70246 10.8333C8.89845 10.8333 7.44308 11.499 7.44308 11.499L4.99984 12.5207M16.6665 5.41667C16.6665 7.0275 15.3607 8.33334 13.7498 8.33334C12.139 8.33334 10.8332 7.0275 10.8332 5.41667C10.8332 3.80584 12.139 2.50001 13.7498 2.50001C15.3607 2.50001 16.6665 3.80584 16.6665 5.41667ZM1.6665 12.1667L1.6665 17C1.6665 17.4667 1.6665 17.7001 1.75733 17.8783C1.83723 18.0351 1.96471 18.1626 2.12151 18.2425C2.29977 18.3333 2.53313 18.3333 2.99984 18.3333H3.6665C4.13321 18.3333 4.36657 18.3333 4.54483 18.2425C4.70163 18.1626 4.82912 18.0351 4.90901 17.8783C4.99984 17.7001 4.99984 17.4667 4.99984 17V12.1667C4.99984 11.7 4.99984 11.4666 4.90901 11.2883C4.82912 11.1315 4.70163 11.0041 4.54483 10.9242C4.36657 10.8333 4.13321 10.8333 3.6665 10.8333L2.99984 10.8333C2.53313 10.8333 2.29977 10.8333 2.12151 10.9242C1.96471 11.0041 1.83723 11.1315 1.75733 11.2883C1.6665 11.4666 1.6665 11.7 1.6665 12.1667Z" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_272_1059">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Payments</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Bill Payment Simplified - Clear Every Liability On-Time</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.66683 11.6667V15M13.3335 10V15M10.0002 6.66666V15M16.6668 5.66666V14.3333C16.6668 15.7335 16.6668 16.4335 16.3943 16.9683C16.1547 17.4387 15.7722 17.8212 15.3018 18.0608C14.767 18.3333 14.067 18.3333 12.6668 18.3333H7.3335C5.93336 18.3333 5.2333 18.3333 4.69852 18.0608C4.22811 17.8212 3.84566 17.4387 3.60598 16.9683C3.3335 16.4335 3.3335 15.7335 3.3335 14.3333V5.66666C3.3335 4.26653 3.3335 3.56647 3.60598 3.03169C3.84566 2.56128 4.22811 2.17883 4.69852 1.93915C5.2333 1.66666 5.93336 1.66666 7.3335 1.66666H12.6668C14.067 1.66666 14.767 1.66666 15.3018 1.93915C15.7722 2.17883 16.1547 2.56128 16.3943 3.03169C16.6668 3.56647 16.6668 4.26653 16.6668 5.66666Z" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Reports</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Instant Insights Into Your Money Makers and Profit Drains</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6668 10.4167V5.66667C16.6668 4.26654 16.6668 3.56647 16.3943 3.0317C16.1547 2.56129 15.7722 2.17884 15.3018 1.93916C14.767 1.66667 14.067 1.66667 12.6668 1.66667H7.3335C5.93336 1.66667 5.2333 1.66667 4.69852 1.93916C4.22811 2.17884 3.84566 2.56129 3.60598 3.0317C3.3335 3.56647 3.3335 4.26654 3.3335 5.66667V14.3333C3.3335 15.7335 3.3335 16.4335 3.60598 16.9683C3.84566 17.4387 4.22811 17.8212 4.69852 18.0609C5.2333 18.3333 5.93333 18.3333 7.33338 18.3333H10.4168M11.6668 9.16667H6.66683M8.3335 12.5H6.66683M13.3335 5.83334H6.66683M12.5002 15.8333L15.0002 18.3333M15.0002 18.3333L17.5002 15.8333M15.0002 18.3333V13.3333" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Data Imports</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Migrate Easily from Other Tools to Experience Accounting Bliss</p>
                        </div>
                        <div>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-xl bg-[#FFF9F5] lg:h-12 lg:w-12">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6668 10.4167V5.66666C16.6668 4.26653 16.6668 3.56647 16.3943 3.03169C16.1547 2.56128 15.7722 2.17883 15.3018 1.93915C14.767 1.66666 14.067 1.66666 12.6668 1.66666H7.3335C5.93336 1.66666 5.2333 1.66666 4.69852 1.93915C4.22811 2.17883 3.84566 2.56128 3.60598 3.03169C3.3335 3.56647 3.3335 4.26653 3.3335 5.66666V14.3333C3.3335 15.7335 3.3335 16.4335 3.60598 16.9683C3.84566 17.4387 4.22811 17.8212 4.69852 18.0608C5.2333 18.3333 5.93336 18.3333 7.3335 18.3333H10.0002M11.6668 9.16666H6.66683M8.3335 12.5H6.66683M13.3335 5.83333H6.66683M12.0835 15.8333L13.7502 17.5L17.5002 13.75" stroke="#744629" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Inventory Management</h3>
                            <p className="text-[#8A8A8A] dark:text-gray-400">Seamless Item Tracking and Management</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features End */}

            {/* FAQ Start */}
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl text-gray-950 font-semibold">Got Questions?</h2>
                    </div>
                    <Accordion />
                </div>
            </section>

            {/* FAQ End */}

            {/* CTA Start */}

            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6">
                    <div className="relative isolate overflow-hidden bg-[#FFF9F5] px-6 pt-16 drop-shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-24 pb-24">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <p className="mb-6 font-light text-[#8A8A8A] md:text-lg">Be first in line when Nexus opens its books by joining our waitlist today. You'll be among the first to experience uncompromised bookkeeping and invoicing tools designed for small business success.</p>
                            <form className="w-full max-w-md mx-auto">
                                <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only">Join wailist</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="email" id="default-email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white" placeholder="Enter your email here..." required />
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#744629] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2">Get Early Access</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA End */}

            <footer className="p-4 bg-[#744629] md:p-8 lg:p-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
                        <Image className="mr-2" src="/Logo-1a.png" width={48} height={48} alt="logo" />

                    </a>
                    <p className="my-2 text-white">The Refreshing Way to Do Your Books</p>
                    <span className="text-sm text-white sm:text-center">© 2024 <a href="#" className="hover:underline">LedgerBrew™</a>. All Rights Reserved.</span>
                </div>
            </footer>

        </>
    );
}
