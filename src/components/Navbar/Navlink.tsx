import { Link, useLocation } from 'react-router-dom'

type Props = {
  to: string
}

const NavLink: React.FC<Props> = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = `/${pathname.split("/")[1]}` == to

  return (
    <Link
      to={to!}
      className={`text-white ${!active && 'text-opacity-40'} md:text-lg font-bold hover:text-opacity-80`}
    >
      {children}
    </Link>
  )
}

export default NavLink
