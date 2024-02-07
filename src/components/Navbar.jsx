import * as Menubar from '@radix-ui/react-menubar';
import personalLogo from '/K.svg';
import { Link } from 'react-router-dom';

export default function Header() {

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

  // bg-[url('assets/img/banner-bg.png')]

  return (
    <nav className="w-screen h-14 bg-[url('assets/img/banner-bg.png')] bg-black text-white items-center hidden justify-evenly lg:flex text-[30px]">
      <div className='hidden sm:block'>
        <a href="#">
          <img src={personalLogo} alt="K Logo" className='w-3 sm:w-5 md:w-6 lg:w-8 hover:drop-shadow-primary' />
        </a>
      </div>
      <div className=''>
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
              <Link to={'/skills'}>
                Skills
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/projects'}>
                Projects
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <Link to={'/papers'}>
                Papers
              </Link>
            </Menubar.Trigger>
          </Menubar.Menu>  
          
          <Menubar.Menu>
            <Menubar.Trigger className='w-72 text-blue-200 bg-primary px-2 font-bold rounded-md hover:drop-shadow-primary' onClick={handleDownload}>
              Download My CV
            </Menubar.Trigger>
          </Menubar.Menu>  
        </Menubar.Root>
      </div>
    </nav>
  )
}