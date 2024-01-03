import React from 'react'
import curriculumPhoto from '../assets/img/curriculo2.png';
import { EnvelopeSimple, Phone } from "phosphor-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function AboutMe() {
  return (
    <section id='sobre' className="w-full flex flex-col items-center text-white gap-2 lg:flex-row xl:px-16 mt-20">
      <img className='w-56 sm:w-72 lg:ml-6 xl:w-80 rounded-full hover:drop-shadow-img' src={curriculumPhoto} alt="personal photo" />
      <div className='w-screen flex flex-col items-center gap-6 lg:items-start lg:pl-2 xl:px-24'>
        <div className='flex flex-col gap-2 text-xl sm:text-4xl lg:text-4xl'>
          <h1>Kelvyn Lenis Martins de Morais</h1>
          <h2 className='text-blue-200 drop-shadow-text'>Desenvolvedor Frontend</h2>
        </div>
        <p className='text-[12px] pl-2 break-normal flex sm:text-lg sm:w-[700px]'>
          Estudante do curso de graduação Ciência da computação na Universidade Federal da Paraíba(UFPB). 
          Conhecimento em desenvolvimento de software. Perfil dinâmico e proativo, 
          com foco no aprendizado constante, a fim de contribuir para o alcance das metas.
        </p>
      
        <div className='flex flex-col self-start max-[640px]:pl-3'>
          <h1 className='text-xl lg:text-2xl'>Informações para contato</h1>
          <div className='pl-3 lg:pl-0'>
            <span className='text-sm text-zinc-200 py-1 flex flex-row gap-2'>
              <a className='hover:drop-shadow-primary' href='mailto:kmartinslenis30@hotmail.com'>
                <EnvelopeSimple size={24} />
              </a>
              <span className='text-md'>Email: kmartinslenis30@hotmail.com</span>
            </span>
          </div>
          {/* <div className='pl-0'>
            <span className='text-sm text-zinc-200 px-3 py-1 flex flex-row gap-2 lg:px-0'>
              <Phone size={24} />
              <span className='text-md sm:pl-5 md:pl-0'>Telefone: (83) 9 9863-4007</span>
            </span>
          </div> */}
          <div className='pl-0'>
            <span className='text-sm text-zinc-200 px-3 py-1 flex flex-row gap-2 lg:px-0'>
              <FaGithub size={24} />
              <span className='text-md sm:pl-5 md:pl-0'>Github: <a className='text-blue-400 hover:text-blue-300' href="https://github.com/KelvynLenis">https://github.com/KelvynLenis</a></span>
            </span>
          </div>
          <div className='pl-0'>
            <span className='text-sm text-zinc-200 px-3 py-1 flex flex-row gap-2 lg:px-0'>
              <FaLinkedin size={24} />
              <span className='text-md sm:pl-5 md:pl-0'>LinkedIn: <a className='text-blue-400 hover:text-blue-300' href="https://www.linkedin.com/in/kelvyn-lenis-martins-2188301ab/">https://www.linkedin.com/in/kelvyn-lenis-martins-2188301ab/</a></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe