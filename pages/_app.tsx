import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'
import { ThemeContextProvider } from '../src/contexts/ThemeContext'

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body, 
input, 
button, 
textarea, 
select {
  font-family: 'Space Mono', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyle/>
    </ThemeContextProvider>
  )
}

export default MyApp
