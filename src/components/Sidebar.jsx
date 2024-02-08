import React, { useState } from 'react'
import * as Menubar from '@radix-ui/react-menubar';
import { Link, useNavigate } from 'react-router-dom';
import SwitchTheme from './SwitchTheme';
import { useTheme } from '../Context/ThemeContext';

function Sidebar() {
  const [selectedPage, setSelectedPage ] = useState(window.location.pathname)
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate();
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

  function redirectTo(url) {
    // alert("clicked")
    setSelectedPage(url);
    toggleSidebar();
    navigate(url);

  }

  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarContainer = document.querySelector('.sidebar');

    if (sidebar.classList.contains('sidebar-in')) {
        sidebar.classList.remove('sidebar-in');
        sidebar.classList.add('sidebar-out');
    } else {
        sidebar.classList.remove('slideOut');
        sidebar.classList.add('slidein');
        sidebarContainer.classList.remove('sidebar');
    }

    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 400);
}

  return (
    <>  
      
      {
        isOpen ? (
        <>
          <Menubar.Root id='sidebar' className="h-screen sidebar w-7/12 absolute right-0 top-0 bg-[url('assets/img/banner-bg.png')] bg-white flex flex-col gap-5 z-20 px-1 sidebar-in">
            <Menubar.Menu className="flex w-full">
              <Menubar.Trigger className='flex w-full text-xl font-black justify-end px-5 py-3' onClick={toggleSidebar}>
                <span className='w-12 h-12 flex items-center justify-center bg-primary border-1 border-violet-300 rounded-full p-1'>X</span>
              </Menubar.Trigger>
            </Menubar.Menu>
              <Menubar.Menu>
                <Menubar.Trigger aria-checked={selectedPage === '/'} className={`text-xl font-medium hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `} onClick={() => redirectTo('/')}>
                  Sobre
                </Menubar.Trigger>
              </Menubar.Menu>
              <Menubar.Menu>
                <Menubar.Trigger aria-checked={selectedPage === '/skills'} className={`text-xl font-medium hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `} onClick={() => redirectTo('/skills')}>
                  Skills
                </Menubar.Trigger>
              </Menubar.Menu>
              <Menubar.Menu>
                <Menubar.Trigger aria-checked={selectedPage === '/projects'} className={`text-xl font-medium hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `} onClick={() => redirectTo('/projects')}>
                  Projects
                </Menubar.Trigger>
              </Menubar.Menu>
              <Menubar.Menu>
                <Menubar.Trigger aria-checked={selectedPage === '/papers'} className={`text-xl font-medium hover:drop-shadow-light ${state.theme === 'light' ? 'aria-checked:text-sky-400 aria-checked:drop-shadow-blue' : 'aria-checked:text-red-400 aria-checked:drop-shadow-red'} `} onClick={() => redirectTo('/papers')}>
                  Papers
                </Menubar.Trigger>
              </Menubar.Menu>  
              
              <Menubar.Menu>
                <Menubar.Trigger className={`w-1/2 self-center text-lg font-medium px-2 py-3 rounded-md ${state.theme === 'light' ? 'text-sky-500 hover:drop-shadow-blue' : 'text-red-300 hover:drop-shadow-red'}`} onClick={handleDownload}>
                  Baixar Currículo
                </Menubar.Trigger>
              </Menubar.Menu>  

              <Menubar.Menu>
                <div className='flex self-center'>
                  <SwitchTheme />
                </div>
              </Menubar.Menu>
            </Menubar.Root>
            <div className='absolute w-screen h-screen inset-0 bg-black/60 z-10' onClick={toggleSidebar}  />
          </>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)} className='w-14 h-14 flex items-center justify-center rounded-full bg-white absolute right-2 top-2 lg:hidden text-black font-black text-2xl z-30'>
            =
          </button>
        )
      }
    </>
  )
}

export default Sidebar