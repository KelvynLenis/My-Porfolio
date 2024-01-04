import { motion } from 'framer-motion';
// import {Tilt} from 'react-tilt';
import { fadeIn, textVariant } from '../utils/motion';
import { FaGithub } from 'react-icons/fa';
import { IoEnterOutline } from "react-icons/io5";


function ProjectCard({ index, title, description, tags, image, source_code_link, website_link }) {
  const prefix = 'img-url';

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className='hover:drop-shadow-primary'
    >
      {/* <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      > */}
      <div
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full shadow-card border border-zinc-600 black-gradient'
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={title}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div className='flex flex-col items-center gap-2'>
            {source_code_link && (
              <button
                onClick={() => window.open(source_code_link, "_blank")}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:drop-shadow-primary'
              >
                <FaGithub 
                  size={28}
                  alt='source code on github'
                  className='object-contain bg-black rounded-full'
                  title='source code'
                />              
              </button>
            )}
              {website_link &&  (
                <button 
                  onClick={() => window.open(website_link, "_blank")}
                  className='cursor-pointer violet-gradient rounded-lg p-0.5 hover:drop-shadow-primary'
                >
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
          <h3 className='text-white font-bold text-[24px]'>{title}</h3>
          <p className='h-20 overflow-scroll hide-scroll-bar mt-2 text-white text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] text-white font-bold`}> #{tag}</p>
          ))}
        </div>
      {/* </Tilt> */}
      </div>
    </motion.div>
  )
}

export default ProjectCard