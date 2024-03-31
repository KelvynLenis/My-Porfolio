import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

import { projects } from '../database/projects';
import { useTheme } from '../Context/ThemeContext';


function Projects() {
  const [page, setPage] = useState(1);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false)
  const [isPreviousButtonDisabled, setIsPreviousButtonDisabled] = useState(false)
  const { state } = useTheme()

  function handleIncreasePage(){
    // page < Math.ceil(projects.length / 6) ? setPage(page + 1) : setIsNextButtonDisabled(true)
    setPage(page + 1)
  }

  function handleDecreasePage() {
    // page > 1 ? setPage(page - 1) : setIsPreviousButtonDisabled(true)
    setPage(page - 1)
  }
  
  useEffect(() => {
    if(page === 1) setIsPreviousButtonDisabled(true); else setIsPreviousButtonDisabled(false)
    if(page === Math.ceil(projects.length / 6)) setIsNextButtonDisabled(true); else setIsNextButtonDisabled(false)
  }, [page])

  return (
    <section className='w-full flex self-center flex-col items-center gap-5 px-10 mt-20 lg:mt-0'>
      <h1 className='flex flex-column text-4xl gap-4'>Projects</h1>
      <div className='w-full h-full flex flex-wrap justify-center gap-12'>
        {
          projects.reverse().map((project, index) => {

          if(index >= (page - 1) * 6 && index <= (page * 6) - 1){
            return (
              <ProjectCard
                key={index+index*index-1}
                index={index} 
                title={project.title} 
                tags={project.tags}
                description={project.description}
                image={project.img_url}
                source_code_link={project.source_code}
                website_link={project.website_url}
              />
            )
          }
        })}
      </div>
      <div className='flex gap-2 text-xl font-black mt-12'>
        <button disabled={isPreviousButtonDisabled} aria-checked={state.theme === 'light'} className='w-8 h-8 hover:bg-slate-500  aria-checked:hover:bg-slate-400 rounded-full hover:drop-shadow-secondary' onClick={handleDecreasePage}>{"<"}</button>
        {
          new Array(Math.ceil(projects.length / 6)).fill(null).map((_, index) => (
            <button aria-checked={state.theme === 'light'}  className='w-8 h-8 rounded-full aria-checked:hover:bg-slate-400 hover:drop-shadow-secondary hover:bg-slate-500 aria-selected:bg-slate-400 aria-selected:drop-shadow-secondary aria-selected:hover:bg-slate-200' aria-selected={page === index + 1} disabled={page === index + 1} key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
          ))
        }
        <button disabled={isNextButtonDisabled} aria-checked={state.theme === 'light'} className='w-8 h-8 hover:bg-slate-500 aria-checked:hover:bg-slate-400 aria-checked:hover:bg-slate-200 rounded-full hover:drop-shadow-secondary' onClick={handleIncreasePage}>{">"}</button>
      </div>
    </section>
  )
}

export default Projects