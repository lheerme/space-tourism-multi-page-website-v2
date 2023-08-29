import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.light};

    &::-webkit-scrollbar {
      width: 4px;
      background: transparent;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.light};

      &:hover {
        background: ${(props) => props.theme.colors.lighter};
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
