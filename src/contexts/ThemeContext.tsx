import {createContext, useEffect, useState} from 'react'
import { ThemeProvider } from 'styled-components'

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: any) => {
  const [lightMode, setLightMode] = useState<boolean>(false);
  const darkTheme: object = {
    colors: {
      background: "#0D1117",
      themeBtn: "#fff",
      card: "#161B22",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme: object = {
    colors: {
      background: "#F3F2EF",
      themeBtn: "#0D1117",
      card: "#FEFEFE",
      textNorm: "#161B22",
      textBolded: "#2B3442",
    },
  };

  function changeTheme(): void {
    setLightMode(prev => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true);

  }, [])

  useEffect(() => {
    const mode = lightMode ? "light" : "dark"

    localStorage.setItem("theme", mode)
  })

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode}}>
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};