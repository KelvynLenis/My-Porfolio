import { useTheme } from "../Context/ThemeContext";
import { papers } from "../database/projects";
import PaperCard from "./PaperCard";

function Papers() {
  const { state } = useTheme()

  return (
    <div id="papers"  className='flex flex-col items-center'>
      <h1 aria-checked={state.theme === 'light'} className='text-zinc-200 aria-checked:text-zinc-800 text-4xl'>
        Papers
      </h1>
      <div>
        {
          papers.map((paper, index) => (
            <PaperCard 
              key={paper.DOI} 
              title={paper.title} 
              DOI={paper.DOI} 
              keywords={paper.keywords} 
              imgURL={paper.imgURL} 
              link={paper.link} 
            />
          ))
        }
      </div>
    </div>
  )
}

export default Papers