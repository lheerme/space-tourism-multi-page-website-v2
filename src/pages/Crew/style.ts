import { styled } from 'styled-components'
import desktopImg from '../../assets/crew/background-crew-desktop.jpg'
import tabletImg from '../../assets/crew/background-crew-tablet.jpg'
import mobileImg from '../../assets/crew/background-crew-mobile.jpg'

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

  @media (max-width: 920px) {
    background-image: url(${mobileImg});
  }
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

  @media (max-width: 920px) {
    height: auto;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 560px) {
    flex-direction: column-reverse;
  }
`

export const SwiperContainer = styled.div`
  width: 58%;

  @media (max-width: 920px) {
    width: 100%;
  }

  .swiper-slide {
    min-height: 400px;

    @media (max-width: 920px) {
      min-height: auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }

  .swiper-pagination {
    display: flex;
    gap: 12px;

    @media (max-width: 920px) {
      justify-content: center;
    }

    @media (max-width: 560px) {
      bottom: 97%;
    }
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    opacity: 0.1744;
    background: #fff;

    @media (max-width: 920px) {
      width: 10px;
      height: 10px;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
  }

  .swiperSlide {
    @media (max-width: 920px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    span {
      color: ${(props) => props.theme.colors.light};
      font-family: 'Bellefair', sans-serif;
      font-size: 32px;
      font-style: normal;
      opacity: 0.5042;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;

      @media (max-width: 920px) {
        font-size: 24px;
      }

      @media (max-width: 560px) {
        font-size: 16px;
      }
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

      @media (max-width: 920px) {
        font-size: 40px;
      }

      @media (max-width: 560px) {
        font-size: 24px;
      }
    }

    p {
      color: ${(props) => props.theme.colors.lighter};
      font-family: 'Barlow', sans-serif;
      max-width: 444px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px;

      @media (max-width: 920px) {
        font-size: 16px;
        line-height: 28px;
      }

      @media (max-width: 560px) {
        font-size: 15px;
        line-height: 25px;
      }
    }
  }
`

export const Image = styled.img`
  max-width: 360px;
  width: 100%;
  max-height: 490px;
  object-fit: contain;
  border-bottom: 1px solid ${(props) => props.theme.colors.lighter};

  @media (max-width: 920px) {
    margin-top: 40px;
    max-width: 450px;
    max-height: none;
  }

  @media (max-width: 560px) {
    max-width: 180px;
    margin-top: 32px;
    margin-bottom: 33px;
  }
`
