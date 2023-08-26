/* eslint-disable prettier/prettier */
import { styled } from 'styled-components'

interface ContainerProps {
  margin: string | undefined
}

export const Container = styled.h2<ContainerProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  gap: 28px;
  margin-bottom: 64px;
  ${({ margin }) => margin && `
    margin-bottom: ${margin};
  `}
`
