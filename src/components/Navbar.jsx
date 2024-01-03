import * as Menubar from '@radix-ui/react-menubar';
import personalLogo from '/K.svg';

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
    <nav className="w-full h-14 bg-[url('assets/img/banner-bg.png')] bg-black text-white flex items-center justify-center fixed z-20 sm:px-16 sm:justify-between text-[10px] md:text-[22px] lg:text-[30px]">
      <div className='hidden sm:block'>
        <a href="#">
          <img src={personalLogo} alt="K Logo" className='w-3 sm:w-5 md:w-6 lg:w-8 hover:drop-shadow-primary' />
        </a>
      </div>
      <div>
        <Menubar.Root className='flex gap-5'>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <a href="#sobre">
                Sobre
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <a href="#skills">
                Skills
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <a href="#projects">
                Projects
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger className='hover:drop-shadow-primary'>
              <a href="#papers">
                Papers
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>  
          
          <Menubar.Menu>
            <Menubar.Trigger className='text-blue-200 bg-primary px-2 font-bold rounded-md hover:drop-shadow-primary' onClick={handleDownload}>
              Download My CV
            </Menubar.Trigger>
          </Menubar.Menu>  
        </Menubar.Root>
      </div>
    </nav>
  )
}
