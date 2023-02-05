import { IoLogoJavascript } from 'react-icons/io';
import { FaNodeJs, FaPython, FaReact, FaJava } from 'react-icons/fa';
import * as Progress from '@radix-ui/react-progress';

function Skills() {
  return (
    <section id="skills" className='w-full flex flex-col items-center py-8 bg-zinc-900 bg-opacity-80'>
      <h1 className='text-4xl text-white p-2'>Skills</h1>
      <div className='flex flex-row p-6 text-white text-lg'>
        <div className='flex flex-col items-center mx-5'>
          <FaPython size={26} color='rgb(42,109,250)' />
          <p>Python</p>
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
          <IoLogoJavascript size={26} color='#EFD81D' />
          <p>Javascript</p>
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
          <FaReact size={26} color='#5ED3F3' />
          <p>React JS</p>
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
          <FaNodeJs size={26} color='#7EC727' />
          <p>Node JS</p>
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
          <FaJava size={26} color='#ff3567' />
          <p>Java</p>
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