/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'
import desktopImg from '../../assets/technology/background-technology-desktop.jpg'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  background-image: url(${desktopImg});
  background-size: cover;
  padding-top: 150px;
`

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;
  width: 100%;
`

export const TechnologyInfoContainer = styled.article`
  width: 100%;
  height: 495px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const TechnologyInfoDataContainer = styled.div`
  display: flex;
  max-width: 560px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`

export const TechnologyInfoDataSelector = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  gap: 32px;
`

interface SelectorBtnContainerProps {
  selected: boolean
}

export const SelectorBtnContainer = styled.li<SelectorBtnContainerProps>`
  button {
    width: 80px;
    height: 80px;
    cursor: pointer;
    border: none;
    background: transparent;
    border: 1px solid gray;
    transition: all .2s;

    &:hover {
      border: 1px solid ${(props) => props.theme.colors.light};
    }

    border-radius: 50%;

    color: ${(props) => props.theme.colors.light};
    text-align: center;
    font-family: 'Bellefair', sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;

    ${({ selected, theme }) => selected && `
      color: ${theme.colors.dark};
      background: ${theme.colors.light};
      border: 1px solid ${theme.colors.light};
    `}
  }
`

export const TechnologyInfoData = styled.div`
  max-width: 444px;
  max-height: 310px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: space-between;
  gap: 14px;

  span {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    display: inline-block;
  }

  h1 {
    color: ${(props) => props.theme.colors.light};
    font-family: 'Bellefair', sans-serif;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }

  p {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
`

export const ImageContainer = styled.picture`
  max-width: 480px;

  img {
    width: 100%;
  }
`