import React from 'react'
import curriculumPhoto from '../assets/img/curriculo4.png';
import { EnvelopeSimple, Phone } from "phosphor-react";

function AboutMe() {
  return (
    <section id='sobre' className="w-full flex flex-col items-center text-white gap-2 lg:flex-row xl:px-16 mt-20">
      <img className='w-56 sm:w-72 lg:ml-6 xl:w-80' src={curriculumPhoto} alt="personal photo" />
      <div className='w-screen flex flex-col items-center gap-6 lg:items-start lg:pl-2 xl:px-24'>
        <h1 className='text-xl sm:text-4xl lg:self-center lg:text-5xl'>Kelvyn Lenis Martins de Morais</h1>
        <p className='text-[12px] pl-2 break-normal flex sm:text-lg sm:w-[700px]'>
          Estudante do curso de graduação Ciência da computação na Universidade Federal da Paraíba(UFPB). 
          Conhecimento em desenvolvimento de software. Perfil dinâmico e proativo, 
          com foco no aprendizado constante, a fim de contribuir para o alcance das metas.
        </p>
        <div className='flex flex-col self-start sm:pl-9'>
          <h1 className='text-xl lg:text-2xl'>Informações para contato</h1>
          <div className='pl-5 lg:pl-0'>
            <span className='text-md'>Email</span>
            <span className='text-sm text-zinc-200 px-6 py-1 flex flex-row gap-2'>
              <a href='mailto:kmartinslenis30@hotmail.com'>
                <EnvelopeSimple size={24} />
              </a>
              kmartinslenis30@hotmail.com
            </span>
          </div>
          <span className='text-md sm:pl-5 md:pl-0'>Telefone celular</span>
          <div className='pl-5'>
            <span className='text-sm text-zinc-200 px-6 py-1 flex flex-row gap-2 lg:px-0'>
              <Phone size={24} />
              (83) 9 9983-3926
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe