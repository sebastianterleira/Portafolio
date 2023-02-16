import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

// Componentes
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";

function App() {
  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Routes>
          <Route exact path={"/"} element={<Main/>}/>
          <Route path={"AboutPage"} element={<AboutPage/>}/>
          <Route path={"BlogPage"} element={<BlogPage/>}/>
          <Route path={"WorkPage"} element={<WorkPage/>}/>
          <Route path={"MySkillsPage"} element={<MySkillsPage/>}/>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
