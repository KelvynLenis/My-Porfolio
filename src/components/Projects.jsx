import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';

// import { projects } from '../utils/projects';
import { api } from '../libs/api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('/projects')
      .then(res => {
        setProjects(res.data)
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section id="projects" className='w-full h-full flex flex-col items-center gap-5'>
      <h1 className='text-white text-4xl'>Projects</h1>
      <div className='w-full flex flex-wrap justify-center gap-12 text-white'>
        {
          isLoading ? (
            <h1>Loading...</h1>
          ) : (
            projects.map((project, index) => {
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
          })
        )}
      </div>
    </section>
  )
}

export default Projects