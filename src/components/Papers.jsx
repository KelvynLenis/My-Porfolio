import { papers } from "../utils/projects";
import PaperCard from "./PaperCard";

function Papers() {
  return (
    <div id="papers" className='flex flex-col items-center'>
      <h1 className='text-zinc-200 text-4xl'>
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