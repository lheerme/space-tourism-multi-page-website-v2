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
  background-position: center;
  padding-top: 180px;
`
