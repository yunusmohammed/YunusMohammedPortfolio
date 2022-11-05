import { IoSchool } from 'react-icons/io5'
import React from 'react'
// import { projects } from "../data";

export default function Projects () {
  return (
    <section id='education' className='text-black bg-white body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <IoSchool size={40} className='mx-auto inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-black'>
            Education
          </h1>
          <div className='container mx-auto flex py-10 md:flex-row flex-col'>
            <div className='flex lg:max-w-xs lg:w-full md:w-1/2 w-full justify-center justify-self-center'>
              <img src='./cornell.svg' class='w-64 h-64 flex' />
            </div>
            <div class='text-start text-left py-2'>
              <h2 class='pb-2'>Cornell University</h2>
              <h3>Bsc. Computer Science</h3>
              <h3 class='pb-10'>GPA: 4.02</h3>
              <p>
                Relevant Courses: Data Structures, Algorithm Design, Operating
                Systems, Computer Networks, Database Design, Cloud Computing,
                Distributed Systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
