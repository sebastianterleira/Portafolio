import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

// Componentes
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import Main from "./components/Main";
import MySkillsPage from "./components/MySkillsPage";
import WorkPage from "./components/WorkPage";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();
  return (
    <>
    <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        {/* For Framer-motion animation on page change */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path={"/"} element={<Main/>}/>
            <Route path={"about"} element={<AboutPage/>}/>
            <Route path={"blog"} element={<BlogPage/>}/>
            <Route path={"work"} element={<WorkPage/>}/>
            <Route path={"skills"} element={<MySkillsPage/>}/>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App
