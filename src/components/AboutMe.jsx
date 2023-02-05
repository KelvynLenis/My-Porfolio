import React from 'react'
import curriculumPhoto from '../assets/img/curriculo.jpg';
import { EnvelopeSimple, Phone } from "phosphor-react";

function AboutMe() {
  return (
    <section id='sobre' className='w-full flex align-center justify-around text-white gap-12 p-5'>
      <img className='sm:w-44 sm:h-56 md:w-72 md:h-80' src={curriculumPhoto} alt="personal photo" />
      <div className='max-w-6xl flex flex-col gap-6'>
        <h1 className='text-5xl'>Kelvyn Lenis Martins de Morais</h1>
        <p className='max-w-4xl'>
          Estudante do curso de graduação Ciência da computação na Universidade Federal da Paraíba(UFPB). 
          Conhecimento em desenvolvimento de software. Perfil dinâmico e proativo, 
          com foco no aprendizado constante, a fim de contribuir para o alcance das metas
        </p>
        <div className='flex flex-col'>
          <h3 className='text-3xl'>Informações para contato</h3>
          <span className='text-lg'>Email</span>
          <span className='text-sm text-zinc-200 px-6 py-1 flex flex-row gap-2'>
            <a href='mailto:kmartinslenis30@hotmail.com'>
              <EnvelopeSimple size={24} />
            </a>
            kmartinslenis30@hotmail.com
          </span>
          <span className='text-lg'>Telefone celular</span>
          <span className='text-sm text-zinc-200 px-6 py-1 flex flex-row gap-2'>
            <Phone size={24} />
            (83) 9 9983-3926
          </span>
        </div>
      </div>
    </section>
  )
}

export default AboutMe