"use client";
import Image from "next/image";
import Loader from "./components/Loader";
import CoverVideo from "./components/CoverVideo";
import Main from "./components/Main";
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';
import { ThemeProvider } from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { AnimatePresence } from 'framer-motion';

import ScrollTriggerProxy from './components/ScrollTriggerProxy';
import About from "./components/sections/About";
import Grid from "./components/grid/grid";
import Para from "./components/sections/Para";
import Hero3 from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import End from "./components/sections/End";
import SomeText from "./components/sections/SomeText";
import Final from "./components/sections/Final";
import "./globals.css";

export default function Home() {

  const containerRef = useRef(null);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <AnimatePresence>
            {loaded ? null : <Loader />}
          </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main
              className="App change"
              data-scroll-container
              ref={containerRef}
            >
              <Main />
              <About />
              <Grid />
             
              <Hero3 />
              <Footer />
              <SomeText />
              <Final  />
               {/* <Para /> */}
               {/* <End /> */}
              {/* <About /> */}
             
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};
