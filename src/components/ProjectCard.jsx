
function ProjectCard({ title, image, description, link }) {
  const prefix = 'img-url'
  return (
    <a href={link} className='w-fit h-auto' target='_blank'>
      <h3>{title}</h3>
      <div className="w-fit h-80 flex items-center flex-col justify-center">
        {image.map((_, index) => (
          <img className="max-w-[355px] h-full hover:opacity-50" src={image[index]} key={`${prefix}+${index}`} />
        ))}
      </div>
      <p className="max-w-[355px]">{description}</p>
    </a>
  )
}

export default ProjectCard