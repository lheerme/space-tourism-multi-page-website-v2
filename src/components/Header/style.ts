import { styled } from 'styled-components'

export const Container = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1380px;
  width: 100%;
  margin: auto;
  padding: 0 15px;
  height: 96px;

  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
`

export const NavBar = styled.nav`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
  height: 100%;
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  gap: 50px;
  padding: 0 123px;
`

export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
`
