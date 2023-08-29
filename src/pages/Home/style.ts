import { styled } from 'styled-components'
import desktopImg from '../../assets/home/background-home-desktop.jpg'
import tabletImg from '../../assets/home/background-home-tablet.jpg'
import mobileImg from '../../assets/home/background-home-mobile.jpg'

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
  background-image: url(${desktopImg});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px 15px 15px 15px;

  @media (max-width: 920px) {
    background-image: url(${tabletImg});
  }

  @media (max-width: 560px) {
    background-image: url(${mobileImg});
    background-size: cover;
    background-position: center;
  }
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1280px;
  width: 100%;

  @media (max-width: 920px) {
    flex-direction: column;
    gap: 10vh;
  }
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

  @media (max-width: 920px) {
    span {
      font-size: 20px;
      letter-spacing: 3.375px;
      text-align: center;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      text-align: center;
    }
  }

  @media (max-width: 560px) {
    span {
      font-size: 16px;
      letter-spacing: 2.7px;
    }

    h1 {
      font-size: 80px;
      line-height: 100px;
      text-align: center;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }
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

  @media (max-width: 920px) {
    width: 242px;
    height: 242px;
  }

  @media (max-width: 560px) {
    width: 150px;
    height: 150px;

    font-size: 20px;
    letter-spacing: 1.25px;
  }
`
