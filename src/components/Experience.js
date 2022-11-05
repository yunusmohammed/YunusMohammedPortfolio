import { BsBriefcaseFill } from 'react-icons/bs'
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './Experience.css'
// import { projects } from "../data";

export default function Projects () {
  return (
    <section id='experience' className='text-black bg-gray-100 body-font'>
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <BsBriefcaseFill className='mx-auto inline-block mb-4' size={40} />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4'>
            Experience
          </h1>
          <VerticalTimeline className='vertical-timeline vertical-timeline-custom-line1'>
            <VerticalTimelineElement
              className='vertical-timeline-element-custom--work1'
              contentStyle={{ background: 'rgb(17 24 39)', color: '#fff' }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(17 24 39)'
              }}
              date='May 2022 - Aug 2022'
              dateClassName='text-black'
              iconStyle={{
                background: 'rgb(243 244 246)',
                color: 'rgb(17 24 39)'
              }}
              iconClassName='vertical-timeline-element-icon1'
              icon={<BsBriefcaseFill />}
            >
              <h3 className='vertical-timeline-element-title text-left'>
                Software Engineering Intern
              </h3>
              <h4 className='vertical-timeline-element-subtitle text-left'>
                Redmond, WA
              </h4>
              <p className='text-left'>
                I built a telemetry service using C# .NET and various components
                in Azure to help my team understand how customers use our
                product
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}
