import { IoLogoJavascript } from 'react-icons/io';
import { FaNodeJs, FaPython, FaReact, FaJava } from 'react-icons/fa';
import * as Progress from '@radix-ui/react-progress';
import { useRef } from 'react';

function Skills() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <section id="skills" className='w-screen flex flex-col items-center py-8 bg-zinc-900 bg-opacity-80'>
      <h1 className='text-4xl text-white p-2 lg:text-5xl'>Skills</h1>
      <div className='flex flex-wrap justify-center gap-4 p-6 text-white text-lg lg:text-xl'>
        <div className='flex flex-col items-center mx-5'>
          <FaPython size={ windowSize[0] < 1024 ? 26 : 75 } color='rgb(42,109,250)' />
          <span>Python</span>
          <Progress.Root
            className='w-20 h-2 relative overflow-hidden bg-gradient-to-r from-blue-400 via-yellow-300 to-yellow-400 rounded-full'
          >
            <Progress.Indicator 
              className='w-full h-full bg-black' 
              style={{ transform: `translateX(${30}%)` }}
            />
          </Progress.Root>
        </div>
        <div className='flex flex-col items-center mx-5'>
          <IoLogoJavascript size={ windowSize[0] < 1024 ? 26 : 75 } color='#EFD81D' />
          <span>Javascript</span>
          <Progress.Root 
            className='w-20 h-2 relative overflow-hidden bg-yellow-400 rounded-full'
          >
            <Progress.Indicator 
              className='w-full h-full bg-black' 
              style={{ transform: `translateX(${65}%)` }}
            />
          </Progress.Root>
        </div>
        <div className='flex flex-col items-center mx-5'>
          <FaReact size={ windowSize[0] < 1024 ? 26 : 75 } color='#5ED3F3' />
          <span>React JS</span>
          <Progress.Root
            className='w-20 h-2 relative overflow-hidden bg-blue-400 rounded-full'
          >
            <Progress.Indicator 
              className='w-full h-full bg-black' 
              style={{ transform: `translateX(${70}%)` }}
            />
          </Progress.Root>
        </div>
        <div className='flex flex-col items-center mx-5'>
          <FaNodeJs size={ windowSize[0] < 1024 ? 26 : 75 } color='#7EC727' />
          <span>Node JS</span>
          <Progress.Root
            className='w-20 h-2 relative overflow-hidden bg-green-400 rounded-full'
          >
            <Progress.Indicator 
              className='w-full h-full bg-black' 
              style={{ transform: `translateX(${50}%)` }}
            />
          </Progress.Root>
        </div>
        <div className='flex flex-col items-center mx-5'>
          <FaJava size={ windowSize[0] < 1024 ? 26 : 75 } color='#ff3567' />
          <span>Java</span>
          <Progress.Root
            className='w-20 h-2 relative overflow-hidden bg-gradient-to-r from-red-400 to-white rounded-full'
          >
            <Progress.Indicator 
              className='w-full h-full bg-black' 
              style={{ transform: `translateX(${40}%)` }}
            />
          </Progress.Root>
        </div>
        
      </div>
    </section>
  )
}

export default Skills