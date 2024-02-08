import { motion } from 'framer-motion';
// import {Tilt} from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import { FaGithub } from 'react-icons/fa';
import { IoEnterOutline } from "react-icons/io5";
import { useTheme } from '../Context/ThemeContext';


function ProjectCard({ index, title, description, tags, image, source_code_link, website_link }) {
  const { state } = useTheme()

  const prefix = 'img-url';
  
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5 * index, 0.75)} className={`rounded-2xl hover:ring-2 ${state.theme === 'light' ? 'hover:ring-black text-sky-100 font-bold' : 'hover:ring-red-400 text-white'}`}>
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      > */}
      <div className={` p-5 rounded-2xl sm:w-[360px] w-full ${state.theme === 'light' ? 'shadow-light bg-[#6A9ED6]' : 'shadow-card black-gradient'} border border-zinc-600`}>
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl font-black'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='flex flex-col items-center gap-2'>
            {source_code_link && (
              <button onClick={() => window.open(source_code_link, "_blank")} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:drop-shadow-primary hover:ring-2 hover:ring-violet-400'>
                <FaGithub 
                  size={28}
                  alt='source code on github'
                  className='object-contain bg-black rounded-full text-white'
                  title='source code'
                />              
              </button>
            )}
              {website_link &&  (
                <button onClick={() => window.open(website_link, "_blank")} className='cursor-pointer violet-gradient rounded-lg p-0.5 hover:drop-shadow-primary hover:ring-2 hover:ring-violet-400'>
                  <IoEnterOutline 
                    size={28} 
                    alt='open project' 
                    title='open project'   
                  />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='font-bold text-[24px]'>{title}</h3>
          <p className='h-20 w-[] overflow-hidden hide-scroll-bar mt-2 text-[14px] text-ellipsis'>{description}</p>
        </div>

        <div className='mt-4 h-10 flex flex-wrap gap-2 text-wrap text-ellipsis'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] font-bold`}> #{tag}</p>
          ))}
        </div>
      {/* </Tilt> */}
      </div>
    </motion.div>
  )
}

export default ProjectCard