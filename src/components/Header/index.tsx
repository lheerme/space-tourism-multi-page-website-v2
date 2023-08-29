import { Link, useLocation } from 'react-router-dom'
import { Container, NavBar, NavList, NavListItem } from './style'
import { Sling as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function Header() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    if (isMenuOpen) {
      menuRef.current && disableBodyScroll(menuRef.current)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      menuRef.current && enableBodyScroll(menuRef.current)
    }
  }, [isMenuOpen])

  return (
    <Container ref={menuRef}>
      <Link to={'/'} onClick={() => setIsMenuOpen(false)}>
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
      <NavBar isOpen={isMenuOpen}>
        <NavList>
          <NavListItem selected={pathname === '/'}>
            <Link to={'/'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <b>00</b> home
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/destination'}>
            <Link
              to={'/destination'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <b>01</b> destination
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/crew'}>
            <Link to={'/crew'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <b>02</b> crew
            </Link>
          </NavListItem>
          <NavListItem selected={pathname === '/technology'}>
            <Link to={'/technology'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <b>03</b> technology
            </Link>
          </NavListItem>
        </NavList>
      </NavBar>

      <Hamburger
        toggled={isMenuOpen}
        toggle={() => setIsMenuOpen(!isMenuOpen)}
      />
    </Container>
  )
}
