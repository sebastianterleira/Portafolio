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
          <Route path={"about"} element={<AboutPage/>}/>
          <Route path={"blog"} element={<BlogPage/>}/>
          <Route path={"work"} element={<WorkPage/>}/>
          <Route path={"skills"} element={<MySkillsPage/>}/>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
