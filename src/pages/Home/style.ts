import { styled } from 'styled-components'
import desktopImg from '../../assets/home/background-home-desktop.jpg'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  background-image: url(${desktopImg});
  background-size: cover;
  padding-top: 180px;
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1280px;
  width: 100%;
`

export const LeftContainer = styled.div`
  max-width: 450px;

  span {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4.725px;
  }

  h1 {
    color: ${(props) => props.theme.colors.light};
    font-family: 'Bellefair', sans-serif;
    font-size: 150px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

export const RightContainer = styled.div``

export const ExploreButton = styled.button`
  background: ${(props) => props.theme.colors.light};
  width: 274px;
  height: 274px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  color: ${(props) => props.theme.colors.dark};
  font-family: 'Bellefair', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
`
