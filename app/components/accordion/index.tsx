import React from 'react'

const Accordion = () => {
  return (
    <>

      <div className="text-gray-900 py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800">
            <span> What is LedgerBrew?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            LedgerBrew is simple cloud-based accounting software built specifically for small businesses, freelancers and entrepreneurs. We make balancing your books as refreshing as your morning coffee ritual.
          </p>
        </details>
      </div>

      <div className="text-gray-900 py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800">
            <span> What accounting features does it include?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            LedgerBrew covers all your core accounting needs like invoicing, payment tracking, expense management, financial reporting and data imports from other tools. No more juggling complicated apps.
          </p>
        </details>
      </div>
      <div className="text-gray-900 py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800">
            <span> How is LedgerBrew different from other accounting software?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Unlike stuffy, complex accounting programs, LedgerBrew prioritizes a clean, intuitive user experience inspired by the comforts of your neighborhood coffee shop. We blend powerful accounting with unmatched simplicity.
          </p>
        </details>
      </div>

      <div className="text-gray-900 py-5">
        <details className="group">
          <summary className="flex justify-between items-center font-medium cursor-pointer list-none text-gray-800">
            <span> Is there a free trial or demo available?</span>
            <span className="transition group-open:rotate-180">
              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Absolutely! Everyone joining our waitlist will get early access to test out LedgerBrew's core features through interactive demos and a free 30-day trial when we launch.
          </p>
        </details>
      </div>



    </>

  )
}

export default Accordion