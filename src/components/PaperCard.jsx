
function PaperCard({ title, DOI, keywords, imgURL, link }) {
  return (
    <section className="text-zinc-300 grid grid-cols-1 my-10">
      <div className="w-64 h-96 flex flex-col text-sm">
        <a href={link} target="_blank">
          <img className="hover:opacity-50" src={imgURL} alt="paper preview" />
        </a>
        <span className="whitespace-nowrap">
          Title: <span className="text-zinc-500">{title}</span>
        </span>
        <span>
          DOI: <span className="text-zinc-500">{DOI}</span>
        </span>
        <div className="w-fit h-fit flex gap-1">
          Keywords: <span className="text-zinc-500">{keywords}</span>
        </div>
      </div>
    </section>
  )
}

export default PaperCard