import React from 'react'
import ProjectCard from './ProjectCard';
import ProjectImg from '../assets/img/project-img1.png';

import { projects } from '../utils/projects';


function Projects() {
  return (
    <section id="projects" className='w-screen h-full flex flex-col items-center gap-5'>
      <h1 className='text-white text-4xl'>Projects</h1>
      <div className='w-full flex flex-wrap justify-center gap-12 text-white'>
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