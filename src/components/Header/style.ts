/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'

export const Container = styled.header`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 96px;
  z-index: 2;

  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 920px) {
    top: 0;
  }

  & > a {
    padding: 0 45px;

    @media (max-width: 768px) {
      padding: 0;
    }
  }

  .hamburger-react {
    display: none;
    color: ${(props) => props.theme.colors.lighter};

    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`

interface NavBarProps {
  isOpen: boolean
}

export const NavBar = styled.nav<NavBarProps>`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(15px);
  height: 100%;

  @media (max-width: 768px) {
    display: flex;
    position: fixed;
    min-height: 100vh;
    min-height: 100svh;
    min-height: 100dvh;
    width: 0;
    overflow: hidden;
    top: 0;
    right: 0;
    transition: all .2s;
    ${({ isOpen }) => isOpen && `
      display: flex;
      width: 70vw;
    `}
  }
`

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  gap: 50px;
  padding: 0 123px;

  @media (max-width: 920px) {
    padding: 0 48px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 118px;
  }
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

  @media (max-width: 920px) {
    font-size: 14px;
    letter-spacing: 2.362px;
  }

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

    @media (max-width: 980px) {
      b {
        display: none
      }
    }

    @media (max-width: 768px) {
      b {
        display: inline;
      }
    }
  }
`
