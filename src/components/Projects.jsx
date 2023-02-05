import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectImg from '../assets/img/project-img1.png';

import { projects } from '../utils/projects';


function Projects() {
  return (
    <section id="projects" className='w-full h-full flex flex-col items-center gap-5'>
      <h1 className='text-white text-4xl'>Projects</h1>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 py-6 px-12 text-white '>
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.imgURL}
              description={project.description}
              link={project.link}
            />
          )
        })}
      </div>
    </section>
  )
}

export default Projects