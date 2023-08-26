import { styled } from 'styled-components'
import desktopImg from '../../assets/crew/background-crew-desktop.jpg'

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

export const CrewInfoContainer = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 510px;
  padding: 10px 0;
`

export const SwiperContainer = styled.div`
  width: 58%;

  .swiper-slide {
    min-height: 400px;
  }

  .swiper-pagination {
    display: flex;
    gap: 12px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    opacity: 0.1744;
    background: #fff;

    &:hover {
      opacity: 0.5;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiperSlide {
    span {
      color: ${(props) => props.theme.colors.light};
      font-family: 'Bellefair', sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      opacity: 0.5042;
    }

    h1 {
      color: ${(props) => props.theme.colors.light};
      font-family: 'Bellefair', sans-serif;
      font-size: 56px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      margin: 15px 0 27px 0;
    }

    p {
      color: ${(props) => props.theme.colors.lighter};
      font-family: 'Barlow', sans-serif;
      max-width: 444px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;
    }
  }
`

export const Image = styled.img`
  max-width: 360px;
  width: 100%;
  max-height: 490px;
  object-fit: contain;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};
`
