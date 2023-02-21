import React, {Suspense, lazy} from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import LazyLoading from "./components/LazyLoading";
import { AnimatePresence } from "framer-motion";

// Componentes
import SoundBar from "./subComponents/SoundBar";
const Main = lazy(() => import("./components/Main"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const MySkillsPage = lazy(() => import("./components/MySkillsPage"));
const BlogPage = lazy(() => import("./components/BlogPage"));
const WorkPage = lazy(() => import("./components/WorkPage"));


function App() {
    return (
      <>
      <GlobalStyle />
        <ThemeProvider theme={LightTheme}>
          <SoundBar />
          {/* For Framer-motion animation on page change */}
          <AnimatePresence exitBeforeEnter>
            <Routes >
              <Route exact path={"/"} element={
              <Suspense fallback={<LazyLoading />}>
                <Main/>
              </Suspense>
              }/>
              <Route path={"about"} element={
              <Suspense fallback={<LazyLoading />}>
                <AboutPage/>
              </Suspense>
              }/>
              <Route path={"skills"} element={
              <Suspense fallback={<LazyLoading />}>
                <MySkillsPage/>
              </Suspense>
              }/>
              <Route path={"blog"} element={<BlogPage/>}/>
              <Route path={"work"} element={<WorkPage/>}/>
            </Routes>
          </AnimatePresence>
        </ThemeProvider>
      </>
    )
}

export default App
