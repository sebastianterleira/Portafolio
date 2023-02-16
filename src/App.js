import { ThemeProvider } from "styled-components"
import { LightTheme, DarkTheme } from "./components/Themes"
import GlobalStyle from "./globalStyles"

function App() {
  return (
    <>
    
    <GlobalStyle />

      <ThemeProvider theme={LightTheme}>|
        App File
      </ThemeProvider>
    </>
  )
}

export default App
