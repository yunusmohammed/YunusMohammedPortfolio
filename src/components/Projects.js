import { CodeIcon } from '@heroicons/react/solid'
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
        <div className='flex mb-3'>
          <div className='min-w-1/3 w-1/3 mr-4 hidden md:flex'>
            <img
              src='./mediaplaceholder.svg'
              class='w-fit h-fit flex border-2'
              alt='Diagram of a database management sytem'
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
          </div>
        </div>
        <div className='flex mb-3'>
          <div className='min-w-1/3 w-1/3 mr-4 hidden md:flex'>
            <img
              src='./mediaplaceholder.svg'
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
          </div>
        </div>
        {/* <div className='flex flex-wrap -m-4'>
          {projects.map(project => (
            <a
              href={project.link}
              key={project.image}
              className='sm:w-1/2 w-100 p-4'
            >
              <div className='flex relative'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover object-center'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
                  <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-lg font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed'>{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div> */}
      </div>
    </section>
  )
}
