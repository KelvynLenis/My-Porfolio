import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { IoLogoJavascript } from 'react-icons/io';
import { FaNodeJs, FaPython, FaReact, FaJava } from 'react-icons/fa';
import * as Progress from '@radix-ui/react-progress';
import { useRef } from 'react';

import { fadeIn, textVariant } from '../utils/motion';


const styles = {
  "JavaScript": "bg-gradient-to-tr from-yellow-400 via-zinc-300 to-yellow-400",
  "Python": "bg-gradient-to-tr from-blue-400 via-yellow-300 to-blue-400",
  "ReactJS": "bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-400",
  "NodeJS": "bg-gradient-to-tr from-green-400 via-green-300 to-green-400",
  "Java": "bg-gradient-to-tr from-red-400 via-zinc-300 to-red-400"
}

const ServiceCard = ({ index, title, Icon, style='none' }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[288px] flex justify-evenly items-center flex-col'
        > 
          <Icon  alt={title}
            className={`w-16 h-16 object-contain bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-400 rounded-full p-2`}
          />
          <h3
            className='text-white text-[20px] font-bold text-center'
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

function Skills() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <section id="skills" className='w-full flex flex-col items-center py-8 bg-primary bg-opacity-80'>
      <h1 className='text-4xl text-white p-2 lg:text-5xl'>Techs</h1>
      <div className='flex flex-wrap justify-center gap-4 p-6 text-white text-lg lg:text-xl'>
        <ServiceCard index={1} title="JavaScript" Icon={IoLogoJavascript} />
        <ServiceCard index={1} title="ReactJS" Icon={FaReact} />
        <ServiceCard index={1} title="NodeJS" Icon={FaNodeJs} />
        {/* <ServiceCard index={1} title="Python" Icon={FaPython}/> */}
        {/* <ServiceCard index={1} title="Java" Icon={FaJava} /> */}
{/*         
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
        </div> */}
        
      </div>
    </section>
  )
}

export default Skills