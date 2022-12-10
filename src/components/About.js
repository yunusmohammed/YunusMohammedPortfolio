import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'

export default function About () {
  return (
    <section id='about' className='bg-gray-900 md:min-h-screen'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <div className='flex justify-center py-10'>
            {/* Github */}
            <a
              href='https://github.com/yunusmohammed'
              target='_blank'
              rel='noreferrer'
              className='transition ease-in-out delay-150 inline-flex mr-5 bg-white border-2 border-white focus:outline-none hover:bg-blue-300 rounded-full text-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='#111827'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
            </a>
            {/* Email */}
            <a
              href='mailto:ymm26@cornell.edu'
              className='transition ease-in-out delay-150 inline-flex mr-5 bg-white border-2 border-white focus:outline-none hover:bg-blue-300 rounded-full text-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='#111827'
              >
                <path d='M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z' />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href='https://www.linkedin.com/in/yunus-mohammed-8a7941199'
              target='_blank'
              rel='noreferrer'
              className='transition ease-in-out delay-150 inline-flex bg-white border-2 border-white focus:outline-none hover:bg-blue-300 rounded-full text-lg'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 0 24 24'
                fill='#111827'
              >
                <path d='M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z' />
              </svg>
            </a>
          </div>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Hi, I'm Yunus Mohammed.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h1>
          <p className='mb-8 leading-relaxed'>
            A computer science student at Cornell University with experience in
            full stack software engineering at top companies like Microsoft and
            Intuit.
          </p>
          <div className='flex justify-center'>
            <a
              href='./yunusmohammedresume.pdf'
              download
              className='transition ease-in-out delay-150 inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg'
            >
              <p className='mr-2'>Resume</p>
              <HiDownload size={24} />
            </a>
          </div>
        </div>
        <div className='sm:w-fit md:w-2/3 lg:w-fit'>
          <img
            className='object-cover object-center rounded'
            alt='Yunus Mohammed headshot'
            src='./headshot8.png'
          />
        </div>
      </div>
      <div className='flex invisible md:visible justify-center bottom-0 self-end basis-0'>
        <FaAngleDown className='animate-bounce w-6 h-6' />
      </div>
    </section>
  )
}
