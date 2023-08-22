/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'
import desktopImg from '../../assets/destination/background-destination-desktop.jpg'

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


export const DestinationContainer = styled.article`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

export const Image = styled.img`
  max-width: 420px;
  width: 100%;
`

export const DestinationSelector = styled.ul`
  list-style: none;
  height: 34px;
  display: flex;
  width: 100%;
  gap: 35px;
`

interface DestinationSelectorItemProps {
  selected: boolean
}

export const DestinationSelectorItem = styled.li<DestinationSelectorItemProps>`
  color: ${(props) => props.theme.colors.lighter};
  ${({ selected, theme }) => selected && `
    color: ${theme.colors.light};
  `}
  text-transform: uppercase;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0%;
    ${({ selected }) => selected && `
      width: 100%;
    `}
    height: 3px;
    background: ${(props) => props.theme.colors.light};
    opacity: 0.5021;
    ${({ selected }) => selected && `
      opacity: 1;
    `}
    bottom: 0;
    left: 0;
    transition: all 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`

export const DestinationInfo = styled.div`
  max-width: 450px;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.light};
    font-family: 'Bellefair', sans-serif;
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
    text-transform: uppercase;
  }

  & > p {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 34px;
  }
`

export const DestinationInfoData = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.light};
    font-family: 'Bellefair', sans-serif;
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 12px;
    text-transform: uppercase;
  }

  & > p {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    margin-bottom: 34px;
  }
`

export const DestinationNumbers = styled.div`
  border-top: 1px solid #383b4b;
  display: flex;
  height: 89px;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
  }

  span {
    color: ${(props) => props.theme.colors.lighter};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
  }

  p {
    color: ${(props) => props.theme.colors.light};
    font-family: 'Bellefair', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
  }
`
