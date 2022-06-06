import NavLink from './Navlink'

const Navbar: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-2 sm:px-6 lg:px-8">
      <div className="flex justify-evenly md:justify-between items-center py-4 border-b border-white border-opacity-20">
        <NavLink to="/profile">DooStdi</NavLink>
        <div className="w-px h-8 bg-white bg-opacity-40"></div>
        <NavLink to="/">Home</NavLink>
        <div className="w-px h-8 bg-white bg-opacity-40"></div>
        <NavLink to="/project">
          <span className="flex items-center">
            MY PROJECT
            <img src="/img/project.svg" className="hidden md:inline w-12 ml-2 md:ml-4" />
          </span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
