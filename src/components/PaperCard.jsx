import { useTheme } from "../Context/ThemeContext"

function PaperCard({ title, DOI, keywords, imgURL, link }) {
  const { state } = useTheme()

  return (
    <section aria-checked={state.theme === 'light'} className="text-zinc-300 aria-checked:text-zinc-400 grid grid-cols-1 my-10 group">
      <div className="w-64 h-96 flex flex-col text-sm">
        <a href={link} target="_blank">
          <img className="hover:opacity-50 group-aria-checked:hover:opacity-70" src={imgURL} alt="paper preview" />
        </a>
        <span className="whitespace-nowrap">
          Title: <span  className="text-zinc-500 group-aria-checked:text-zinc-700">{title}</span>
        </span>
        <span>
          DOI: <span className="text-zinc-500 group-aria-checked:text-zinc-700">{DOI}</span>
        </span>
        <div className="w-fit h-fit flex gap-1">
          Keywords: <span className="text-zinc-500 group-aria-checked:text-zinc-700">{keywords}</span>
        </div>
      </div>
    </section>
  )
}

export default PaperCard