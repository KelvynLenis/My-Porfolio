import { BsLinkedin, BsGithub } from 'react-icons/bs';
import personalLogo from '/K.svg';
import { useTheme } from '../Context/ThemeContext';

function Footer() {
  const { state } = useTheme();

  return (
    <footer className={`w-full h-14 flex items-center self-end justify-center ${state.theme === 'light' ? 'text-zinc-900' : 'text-zinc-400'} gap-2 text-[12px] md:text-lg md:gap-4 lg:text-2xl`}>
      Orgulhosamente feito por <span className={`${ state.theme === 'light' ? 'text-sky-500 drop-shadow-blue' : 'text-red-400 drop-shadow-red'}`}>@KelvynLenis</span>

      <a href="/">
        <img className={`w-5 h-5 ${state.theme === 'light' ? ' text-sky-400 hover:drop-shadow-blue' : 'hover:drop-shadow-red' } `} src={personalLogo} alt="K Logo" />
      </a>
      <a href="https://www.linkedin.com/in/kelvyn-lenis-martins-2188301ab/" className={`${state.theme === 'light' ? ' text-sky-600 hover:drop-shadow-blue' : 'text-red-400 hover:drop-shadow-red' } `} title='open in new tab' target='_blank'>
        <BsLinkedin size={24} />
      </a>
      <a href="https://github.com/KelvynLenis" className={`${state.theme === 'light' ? ' text-sky-600 hover:drop-shadow-blue' : 'text-red-400 hover:drop-shadow-red' } `} title='open in new tab' target='_blank'>
        <BsGithub size={24} />
      </a>
    </footer>
  )
}

export default Footer