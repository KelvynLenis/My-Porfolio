import { Link } from 'react-router-dom';
import { useState } from 'react';

import * as Menubar from '@radix-ui/react-menubar';

import personalLogo from '/K.svg';
import { useTheme } from '../Context/ThemeContext';
import SwitchTheme from './SwitchTheme';

export default function Header() {
  const [selectedPage, setSelectedPage ] = useState(window.location.pathname)
  const { state } = useTheme();

  function handleDownload() {
    fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'CV.pdf';
          alink.click();
      })
    })
  }

  return (
    <nav className={`w-screen h-14 ${state.theme === 'light' ? 'text-black border-b-2 drop-shadow-md' : 'bg-nav-bar'} bg-white items-center hidden justify-evenly lg:flex text-[30px]`}>
      <div className='hidden sm:block'>
        <a href="#">
          <img src={personalLogo} alt="K Logo" className='w-3 sm:w-5 md:w-6 lg:w-8 hover:drop-shadow-primary' />
        </a>
      </div>
      <div className=''>
        <Menubar.Root className='flex gap-5'>
          <Menubar.Menu>
            <Menubar.Trigger className='focus-visible:ring-0 focus:ring-0 border-none'>
              <Link to={'/'} aria-checked={selectedPage === '/'} onClick={() => setSelectedPage('/')} className={`hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `}>
                Sobre
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger aria-checked={selectedPage === '/skills'} onClick={() => setSelectedPage('/skills')} className={`hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `}>
              <Link to={'/skills'}>
                Skills
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger aria-checked={selectedPage === '/projects'} onClick={() => setSelectedPage('/projects')} className={`hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `}>
              <Link to={'/projects'}>
                Projects
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger aria-checked={selectedPage === '/papers'} onClick={() => setSelectedPage('/papers')} className={`hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `}>
              <Link to={'/papers'}>
                Papers
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>  
          
          <Menubar.Menu>
            <Menubar.Trigger className={`w-72  px-2 py-3 font-bold rounded-md ${state.theme === 'light' ? 'text-sky-500 hover:drop-shadow-blue' : 'text-red-300 hover:drop-shadow-red'}`} onClick={handleDownload}>
              baixar currículo
            </Menubar.Trigger>
          </Menubar.Menu>

          <Menubar.Menu>
            <SwitchTheme />
          </Menubar.Menu> 
        </Menubar.Root>
      </div>
    </nav>
  )
}