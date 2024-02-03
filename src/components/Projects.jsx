import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

import { projects } from '../utils/projects';
function Projects() {
  const [page, setPage] = useState(1);


  function handleIncreasePage(){
    page < Math.ceil(projects.length / 6) ? setPage(page + 1) : setPage(1)
  }

  function handleDecreasePage() {
    page > 1 ? setPage(page - 1) : setPage(Math.ceil(projects.length / 6))
  }

  return (
    <section id="projects" className='w-full h-full flex flex-col items-center gap-5'>
      <h1 className='flex flex-column text-white text-4xl gap-4'>Projects</h1>
      <div className='w-full h-[950px] flex flex-wrap justify-center gap-12 text-white'>
        {
          projects.map((project, index) => {

          if(index >= (page - 1) * 6 && index <= (page * 6) - 1){
            return (
              <ProjectCard
                key={index}
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
      <div className='flex gap-2 text-white text-xl font-black mt-12'>
        <button className='w-8 h-8 hover:bg-slate-500 rounded-full hover:drop-shadow-secondary' onClick={handleDecreasePage}>{"<"}</button>
        {
          new Array(Math.ceil(projects.length / 6)).fill(null).map((_, index) => (
            <button className='w-8 h-8  rounded-full hover:drop-shadow-secondary hover:bg-slate-500 aria-selected:bg-slate-500 aria-selected:drop-shadow-secondary aria-selected:hover:bg-transparent' aria-selected={page === index + 1} disabled={page === index + 1} key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
          ))
        }
        <button className='w-8 h-8 hover:bg-slate-500 rounded-full hover:drop-shadow-secondary' onClick={handleIncreasePage}>{">"}</button>
      </div>
    </section>
  )
}

export default Projects