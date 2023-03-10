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

  return (
    <header className="w-full h-14 bg-[url('assets/img/banner-bg.png')] bg-black text-white flex items-center justify-center sm:justify-between p-4 text-[10px] md:text-sm lg:text-xl">
      <div className='hidden sm:block'>
        <a href="#">
          <img src={personalLogo} alt="K Logo" className='w-3 sm:w-5 md:w-6 lg:w-8' />
        </a>
      </div>
      <div>
        <Menubar.Root className='flex gap-5'>
          <Menubar.Menu>
            <Menubar.Trigger>
              <a href="#sobre">
                Sobre
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>
              <a href="#skills">
                Skills
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>
              <a href="#projects">
                Projects
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>
          <Menubar.Menu>
            <Menubar.Trigger>
              <a href="#papers">
                Papers
              </a>
            </Menubar.Trigger>
          </Menubar.Menu>  
          
          <Menubar.Menu>
            <Menubar.Trigger className='text-blue-200 rounded' onClick={handleDownload}>
              Download My CV
            </Menubar.Trigger>
          </Menubar.Menu>  
        </Menubar.Root>
      </div>
    </header>
  )
}
