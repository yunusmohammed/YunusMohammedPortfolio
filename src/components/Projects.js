import { CodeIcon } from '@heroicons/react/solid'
import { BsGithub, BsYoutube } from 'react-icons/bs'
import { RiSlideshowFill } from 'react-icons/ri'
import React from 'react'
// import { projects } from '../data'

export default function Projects () {
  return (
    <section id='projects' className='text-black bg-white body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-5'>
            Projects
          </h1>
        </div>
        <div className='flex mb-10'>
          <div className='min-w-1/3 w-1/3 mr-4 hidden md:flex'>
            <img
              src='./dbms2.gif'
              class='w-fit h-fit flex border-2'
              alt='GIF of a database management sytem'
            />
          </div>
          <div className='w-2/3'>
            <h3 className='vertical-timeline-element-title text-left pb-4 text-2xl font-medium'>
              Database Management System
            </h3>
            <p className='text-left text-sm'>
              I collaborated in a team of four to build a database management
              system (DBMS) for my Databases class using Java. The DMBS
              implements a Query Processor layer and a Storage Manager layer.
              The Query Processor layer has a Query Parser, a Query Optimizer,
              and a Query Executo and supports scanning (full and index scans),
              filtering, sort by clauses, distinct clauses, and joins (tuple
              nested loop, block nested loop, and sort merge joins).
            </p>
            <div className='flex justify-left md:mt-14'>
              <a
                href='https://github.com/yunusmohammed/cs4321-databse'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>View Project</p>
                <BsGithub size={24} color={'gray-90'} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex mb-10'>
          <div className='min-w-1/3 w-1/3 mr-4 hidden md:flex'>
            <img
              src='./ams.svg'
              class='w-fit h-fit flex border-2'
              alt='Diagram of a the architecture of the Adaptive Stream Project'
            />
          </div>
          <div className='w-2/3'>
            <h3 className='vertical-timeline-element-title text-left pb-4 text-2xl font-medium'>
              Adaptive Stream
            </h3>
            <p className='text-left text-sm'>
              I collaborated in a classmate to build a scalable service to
              stream multibitrate videos based on the connection quality of
              users. We used various components and tools provided by Azure,
              including Azure CosmosDB, Azure Functions, Azure WebApps, Azure
              Blob Storage, and Azure Media Services.
            </p>
            <div className='flex justify-left md:mt-14'>
              <a
                href='https://github.com/yunusmohammed/cs5412-dynamicVideoStream'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>View Project</p>
                <BsGithub size={24} color={'gray-90'} />
              </a>
              <a
                href='https://youtu.be/7Aj2xsYUgSI'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>Watch Demo</p>
                <BsYoutube size={24} color={'gray-90'} />
              </a>
              <a
                href='https://docs.google.com/presentation/d/1vX8XYXZXbHeq6fZhU5-j5TtphHCSKZT_-5ud8LIa28k/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>Demo Slides</p>
                <RiSlideshowFill size={24} color={'gray-90'} />
              </a>
            </div>
          </div>
        </div>
        <div className='flex mb-10'>
          <div className='min-w-1/3 w-1/3 mr-4 hidden md:flex'>
            <img
              src='./portfolio.gif'
              class='w-fit h-fit flex border-2'
              alt='Diagram of a database management sytem'
            />
          </div>
          <div className='w-2/3'>
            <h3 className='vertical-timeline-element-title text-left pb-4 text-2xl font-medium'>
              Portfolio Website
            </h3>
            <p className='text-left text-sm'>
              I applied various principles of design (eg. the CRAP principle) to
              mockup my portfolio website website and built it using ReatJS and
              TailwindCSS.
            </p>
            <div className='flex justify-left md:mt-14'>
              <a
                href='https://github.com/yunusmohammed/yunusmohammed.github.io'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>View Project</p>
                <BsGithub size={24} color={'gray-90'} />
              </a>
              <a
                href='https://youtu.be/1XXRKXbNtpM'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>Watch Pitch</p>
                <BsYoutube size={24} color={'gray-90'} />
              </a>
              <a
                href='https://docs.google.com/presentation/d/17DurUfGDnKF5bkAp14X_Uv_br9BZhYVOkfA84MPzqlk/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
                className='transition ease-in-out delay-150 inline-flex py-2 mr-5 focus:outline-none hover:text-blue-600 rounded-full text-md'
              >
                <p className='mr-2'>Wireframe Slides</p>
                <RiSlideshowFill size={24} color={'gray-90'} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
