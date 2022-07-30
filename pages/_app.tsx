import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components'

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
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp
