import { Link, useLocation } from 'react-router-dom'
import { Container, NavBar, NavList, NavListItem } from './style'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <Container>
      <Link to={'/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <circle cx="24" cy="24" r="24" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
            fill="#0B0D17"
          />
        </svg>
      </Link>
      <NavBar>
        <NavList>
          <NavListItem selected={pathname === '/'}>
            <Link to={'/'}>
              <b>00</b> home
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/destination'}>
            <Link to={'/destination'}>
              <b>01</b> destination
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/crew'}>
            <Link to={'/crew'}>
              <b>02</b> crew
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/technology'}>
            <Link to={'/technology'}>
              <b>03</b> technology
            </Link>
          </NavListItem>
        </NavList>
      </NavBar>
    </Container>
  )
}
