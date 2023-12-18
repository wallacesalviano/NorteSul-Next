"use client"

import { useEffect } from 'react'
import { Banner } from './components/banner';
import { Carousel } from './components/carousel';
import { Introduction } from './components/introduction';
import { Benefits } from './components/benefits';
import { Operation } from './components/operation';
import AOS from 'aos';
import ScrollToTopButton from './components/Styles/scrollToTopButton';


const Page = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-out',
      delay: 100,
    });

    return () => {
      AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-out',
        delay: 100,
      })
    }

  }, []);


  return (
    <main>

      <Banner />
      <Carousel />
      <Introduction />
      <Benefits />
      <Operation />
      <ScrollToTopButton/>
    </main>
  )
}

export default Page;