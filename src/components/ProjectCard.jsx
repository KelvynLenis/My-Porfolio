
function ProjectCard({ title, image, description, link }) {
  const prefix = 'img-url'
  return (
    <a href={link} className='w-72 h-auto' target='_blank'>
      <h3 className="text-yellow-300">{title}</h3>
      <div className="w-full h-80 flex flex-col items-center justify-center">
        {image.map((_, index) => (
          <img className="w-full h-full hover:opacity-50" src={image[index]} key={`${prefix}+${index}`} />
        ))}
      </div>
      <p className="max-w-[355px] xl:text-lg">{description}</p>
    </a>
  )
}

export default ProjectCard