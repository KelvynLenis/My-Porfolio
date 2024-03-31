import React from 'react'
import curriculumPhoto from '../assets/img/curriculo2.png';
import { EnvelopeSimple, Phone } from "phosphor-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../Context/ThemeContext';

function AboutMe() {
  const { state } = useTheme();

  return (
    <section className="w-screen flex flex-col items-center justify-evenly gap-2 lg:flex-row mt-20 lg:mt-0">
      <img className={`w-56 sm:w-72 lg:ml-6 xl:w-80 rounded-full hover:drop-shadow-img ${state.theme === 'light' ? 'animate-pulse-shadow-light' : 'animate-pulse-shadow-dark'}`} src={curriculumPhoto} alt="personal photo" />
      <div className='w-fit flex flex-col items-center gap-6 lg:items-start lg:pl-2'>
        <div className='flex flex-col gap-2 text-xl sm:text-4xl lg:text-4xl p-3 lg:w-2/3'>
          <h1>Olá! Me chamo <span className={`${ state.theme === 'light' ? 'text-sky-600' : 'text-red-500 drop-shadow-primary'} drop-shadow-blue`}>Kelvyn Lenis Martins de Morais</span> e sou</h1>
          <h2 className={`${ state.theme === 'light' ? 'text-sky-600' : 'text-red-500 drop-shadow-primary'} z-0 drop-shadow-blue`}>Desenvolvedor Full Stack</h2>
        </div>
        <p className='text-lg text-justify px-3 break-normal flex sm:text-lg sm:w-[700px]'>
          Graduado em Ciência da computação na Universidade Federal da Paraíba(UFPB) e apaixonado por engenharia de software. 
          Entusiasta de frontend utilizand React, NextJS e NodeJS.
        </p>
      
        <div className='flex flex-col self-start max-[640px]:pl-3'>
          <h1 className='text-xl lg:text-2xl'>Informações para contato</h1>
          <div className='pl-3 lg:pl-0'>
            <span className={`text-sm ${state.theme  === 'light' ? 'text-zinc-900' : 'text-zinc-200' } py-1 flex flex-row gap-2`}>
              <EnvelopeSimple size={24} />
              <span className='text-md'>Email: </span>
              <a className={`${state.theme === 'light' ? 'text-blue-600 hover:text-blue-400' : 'text-blue-400 hover:text-blue-300'} `} href='mailto:kmartinslenis30@hotmail.com' target='_blank'>
                 kmartins.dev@gmail.com
              </a>
            </span>
          </div>
          <div className='pl-0'>
            <span className={`text-sm ${state.theme === 'light' ? 'text-zinc-900' : 'text-zinc-200'}  px-3 py-1 flex flex-row gap-2 lg:px-0`}>
              <FaGithub size={24} />
              <span className='text-md sm:pl-5 md:pl-0'>Github: <a className={`${state.theme === 'light' ? 'text-blue-600 hover:text-blue-400' : 'text-blue-400 hover:text-blue-300'} `} href="https://github.com/KelvynLenis" target='_blank'>https://github.com/KelvynLenis</a></span>
            </span>
          </div>
          <div className='pl-3 lg:pl-0'>
            <span className={`text-sm ${state.theme  === 'light' ? 'text-zinc-900' : 'text-zinc-200' } py-1 flex flex-row gap-2`}>
              <FaLinkedin size={24} />
              <span className='flex flex-col md:flex-row text-md sm:pl-5 md:pl-0'>LinkedIn: <a className={`w-44 md:w-fit text-ellipsis overflow-hidden ${state.theme === 'light' ? 'text-blue-600 hover:text-blue-400' : 'text-blue-400 hover:text-blue-300'} `} href="https://www.linkedin.com/in/kelvyn-lenis-martins-2188301ab/" target='_blank'>https://www.linkedin.com/in/kelvyn-lenis-martins-de-morais-2188301ab/</a></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe