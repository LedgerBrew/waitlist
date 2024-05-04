import React from 'react'
import { useRef, FormEvent } from 'react';

interface Sheet1 {
    email: string;
}

interface Response {
    sheet1: Sheet1;
}

const CTA = () => {
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
    <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-6xl sm:py-16 lg:px-6">
                    <div className="relative isolate overflow-hidden bg-[#FFF9F5] px-6 pt-16 drop-shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-24 pb-24">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <p className="mb-6 font-light text-[#8A8A8A] md:text-lg">Be first in line when Nexus opens its books by joining our waitlist today. You&apos;ll be among the first to experience uncompromised bookkeeping and invoicing tools designed for small business success.</p>
                            <form className="w-full max-w-md mx-auto" ref={formRef} onSubmit={handleSubmit}>
                                <label htmlFor="default-email" className="mb-2 text-sm font-medium text-gray-900 sr-only">Join wailist</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="email" id="default-email" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white" placeholder="Enter your email here..." required ref={emailRef}/>
                                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#744629] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2">Get Early Access</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default CTA