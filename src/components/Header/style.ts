/* eslint-disable prettier/prettier */
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
  padding: 0 calc(123px - 28px);
`

interface NavListItemProps {
  selected: boolean
}

export const NavListItem = styled.li<NavListItemProps>`
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

  position: relative;

  a {
    padding: 10px 7px;

    &::after {
      content: '';
      position: absolute;
      width: 0%;
      height: 3px;
      background: ${(props) => props.theme.colors.light};
      opacity: 0.5021;
      bottom: 0;
      left: 0;
      transition: all 0.5s;

      ${({ selected }) => selected && `
        opacity: 1;
        width: 100%;
      `}
    }

    &:hover::after {
      width: 100%;
    }
  }
`
