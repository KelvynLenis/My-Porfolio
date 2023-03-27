import React from 'react'
import ProjectCard from './ProjectCard';

import { projects } from '../utils/projects';

function Projects() {
  return (
    <section id="projects" className='w-full h-full flex flex-col items-center gap-5'>
      <h1 className='text-white text-4xl'>Projects</h1>
      <div className='w-full flex flex-wrap justify-center gap-12 text-white'>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              index={index} 
              title={project.title} 
              description={project.description}
              image={project.imgURL}
              source_code_link={project.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects