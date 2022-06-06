import { Link } from "react-router-dom"

type Props = {
  link: string
  photo: string
}

const ProjectThumbnail: React.FC<Props> = ({ children, link, photo }) => {
  return (
    <Link to={link} className="w-full h-64 md:h-[28rem] bg-gray-900 flex items-center justify-center relative overflow-hidden">
      <img src={photo} className="w-full  h-full inset-0 absolute object-cover hover:scale-110 transition-all duration-150" />
      <div className="text-xl md:text-3xl border font-bold border-white rounded-md py-4 px-6 z-10">
        {children}
      </div>
    </Link>
  )
}

export default ProjectThumbnail
