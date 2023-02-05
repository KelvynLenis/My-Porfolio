import { BsLinkedin, BsGithub } from 'react-icons/bs';
import personalLogo from '/K.svg';

function Footer() {
  return (
    <div className='h-14 flex items-center justify-center text-zinc-300 gap-2'>
      Proudly created by <span className='text-sky-200'>@KelvynLenis</span>
      
      <a href="#">
        <img className='w-5 h-5' src={personalLogo} alt="K Logo" />
      </a>
      <a href="https://www.linkedin.com/in/kelvyn-lenis-martins-2188301ab/" title='open in new tab' target='_blank'>
        <BsLinkedin size={24} />
      </a>
      <a href="https://github.com/KelvynLenis" title='open in new tab' target='_blank'>
        <BsGithub size={24} />
      </a>
    </div>
  )
}

export default Footer