import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { IoLogoJavascript } from 'react-icons/io';
import { FaNodeJs , FaPython, FaReact, FaJava } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb";
import * as Progress from '@radix-ui/react-progress';
import { useRef } from 'react';

import { fadeIn, textVariant } from '../utils/motion';


const styles = {
  "JavaScript": "w-16 h-16 object-contain rounded-full text-yellow-500 p-2 bg-gradient-to-tr from-zinc-900 via-zinc-700 to-zinc-900",
  "Python": "w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-blue-400 via-yellow-300 to-blue-400",
  "ReactJS": "w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-blue-500 via-blue-300 to-blue-500",
  "NodeJS": "w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-green-700 via-green-400 to-green-700",
  "Java": "w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-red-400 via-zinc-300 to-red-400",
  "NextJS": "w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-black via-zinc-600 to-black"
}

const SkillCard = ({ index, title, Icon, style, progress }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[288px] flex justify-evenly items-center flex-col'
        > 
          <Icon alt={title} className={style ? styles[style] : 'w-16 h-16 object-contain rounded-full p-2 bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-400 '} />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

          {/* <Progress.Root className={'w-20 h-2 relative overflow-hidden bg-violet-500 rounded-full'}>
            <Progress.Indicator className='w-full h-full bg-black' style={{ transform: `translateX(${progress}%)` }}/>
          </Progress.Root> */}
        </div>
      </motion.div>
    </Tilt>
  )
}

function Skills() {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <section className='w-full flex flex-col items-center py-8 gap-5'>
      
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-white p-2 lg:text-4xl'>Habilidades e competências <span className='text-violet-400 hover:drop-shadow-primary'>primárias</span></h1>
          {/* <h2 className='text-4xl text-white p-2 lg:text-5xl'>Principais</h2> */}
        <div className='flex flex-wrap justify-center gap-4 p-6 text-white text-lg lg:text-xl'>
          <SkillCard index={1} title="JavaScript" Icon={IoLogoJavascript} style='JavaScript' progress={85} />
          <SkillCard index={1} title="ReactJS" Icon={FaReact} style='ReactJS' progress={85} />
          <SkillCard index={1} title="NodeJS" Icon={FaNodeJs} style='NodeJS' progress={60} />
          <SkillCard index={1} title="NextJS" Icon={TbBrandNextjs } style='NextJS' progress={70} />
        </div>
      </div>


      {/* <div className='flex flex-col items-center gap-5'>
        <h2 className='text-2xl text-white p-2 lg:text-3xl'><span className='text-violet-400 hover:drop-shadow-primary'>Secundárias</span></h2>
        <div className='grid grid-cols-3 gap-5'>
          <SkillCard index={1} title="PHP" Icon={IoLogoJavascript} style='JavaScript' progress={85} />
          <SkillCard index={1} title="SQL" Icon={FaReact} style='ReactJS' progress={85} />
          <SkillCard index={1} title="MongoDB" Icon={FaNodeJs} style='NodeJS' progress={60} />
          <SkillCard index={1} title="PostgreSQL" Icon={TbBrandNextjs } style='NextJS' progress={70} />
        </div>
      </div> */}
    </section>
  )
}

export default Skills