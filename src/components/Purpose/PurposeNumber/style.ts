import { styled } from 'styled-components'

export const Number = styled.span`
  color: ${(props) => props.theme.colors.light};
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;

  @media (max-width: 920px) {
    font-size: 20px;
    letter-spacing: 3.375px;
  }

  @media (max-width: 560px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`
