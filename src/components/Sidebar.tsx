import React from 'react'
import * as Menubar from '@radix-ui/react-menubar';
import { Link } from 'react-router-dom';

function Sidebar() {
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
    <div className="lg:hidden">
      <Menubar.Root className='flex gap-5'>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/'}>
                Sobre
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/'}>
                Skills
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/'}>
                Projects
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/'}>
                Papers
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>  
          
          <Menubar.Menu>
            <Menubar.Trigger className='text-blue-200 bg-primary px-2 font-bold rounded-md hover:drop-shadow-primary' onClick={handleDownload}>
              Download My CV
            </Menubar.Trigger>
          </Menubar.Menu>  
        </Menubar.Root>
    </div>
  )
}

export default Sidebar