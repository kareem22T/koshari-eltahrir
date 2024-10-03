import React, { useEffect, useState } from 'react';
import DefaultLayout from "../../layout/DefaultLayout";

import plateEmpty from "./../../images/plate-empty.png";
import plateFUll from "./../../images/plate-full.png";

import rice1 from "../../images/rice-1.png";
import rice2 from "../../images/rice-2.png";
import rice3 from "../../images/rice-3.png";
import rice4 from "../../images/rice-4.png";
import rice5 from "../../images/rice-5.png";
import rice6 from "../../images/rice-6.png";
import rice8 from "../../images/rice-8 (2).png";

import pasta1 from "./../../images/pasta-1.png";
import pasta2 from "./../../images/pasta-2.png";
import pasta3 from "./../../images/pasta-3.png";
import pasta4 from "./../../images/pasta-4.png";
import pasta5 from "./../../images/pasta-5.png";
import pasta6 from "./../../images/pasta-6.png";
import pasta7 from "./../../images/pasta-7.png";
import pasta8 from "./../../images/pasta-8.png";

import lentils1 from "./../../images/lentils-1.png";
import lentils2 from "./../../images/lentils-2.png";
import lentils3 from "./../../images/lentils-3.png";
import lentils4 from "./../../images/lentils-4.png";
import lentils5 from "./../../images/lentils-5.png";
import lentils6 from "./../../images/lentils-6.png";

import chickpeas1 from "./../../images/chickpeas-1.png";
import chickpeas2 from "./../../images/chickpeas-2.png";
import chickpeas3 from "./../../images/chickpeas-3.png";
import chickpeas4 from "./../../images/CHEK.png";
import chickpeas5 from "./../../images/CHEK2.png";

import onion from "./../../images/onion-1.png";
import onion2 from "./../../images/onion-2.png";
import onion3 from "./../../images/onion-3.png";

import salsa from "./../../images/salsa.png";
import shata from "./../../images/shata.png";
import garlic from "./../../images/garlic sauce .png";

const Home = () => {
    const [scrolledRice, setScrolledRice] = useState(0);
    const [scrolledPasta, setScrolledPasta] = useState(0);
    const [scrolledLentils, setScrolledLentils] = useState(0);
    const [scrolledChickpeas, setScrolledChickpeas] = useState(0);
    const [scrolledOnions, setScrolledOnions] = useState(0);
    const [scrolledSalsa, setScrolledSalsa] = useState(0);
    const [scrolledShata, setScrolledShata] = useState(0);
    const [scrolledGarlic, setScrolledGarlic] = useState(0);
    const [isShowCompleteDish, setIsShowCompleteDish] = useState(false);
  
    // Handle the scroll event
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        const handleScrollState = (scrollValue:any, setScrollValue:any, start:any, mid:any, end:any) => {
          if (scrollPosition > end) {
            setScrollValue(2); // fully scrolled
          } else if (scrollPosition > mid) {
            setScrollValue(1); // partially scrolled
          } else if (scrollPosition < start) {
            setScrollValue(0); // not scrolled into view
          }
        };
        handleScrollState(scrolledRice, setScrolledRice, 300, 600, 900);
        handleScrollState(scrolledPasta, setScrolledPasta, 900, 1200, 1500);
        handleScrollState(scrolledLentils, setScrolledLentils, 1500, 1800, 2100);
        handleScrollState(scrolledChickpeas, setScrolledChickpeas, 2100, 2400, 2700);
        handleScrollState(scrolledOnions, setScrolledOnions, 2700, 3000, 3300);
        handleScrollState(scrolledSalsa, setScrolledSalsa, 3300, 3600, 4200);
        handleScrollState(scrolledShata, setScrolledShata, 3300, 3600, 4200);
        handleScrollState(scrolledGarlic, setScrolledGarlic, 3300, 3600, 4200);

        if (scrollPosition > 4200) {
          setIsShowCompleteDish(true);
        } else {
          setIsShowCompleteDish(false);
        }
      };
  
      // Add the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolledRice, scrolledPasta, scrolledLentils, scrolledChickpeas, scrolledOnions, scrolledSalsa, scrolledShata, scrolledGarlic]);
  
  return (
    <DefaultLayout>
      <div style={{
            marginBottom: '1000vh'
      }}></div>
      <section className="hero">
        <div className="container">
          <div className="ingreadiants">
            {
              !isShowCompleteDish && (
                <>
                  <div 
                  className={scrolledRice ? 'rice' : 'rice initial'}>
                    <img
                      src={rice1}
                      alt="rice"
                      className={scrolledRice ? 'rice-1 rice-1-final' : 'rice-1 rice-1-initial'}
                    />
                    <img
                      src={rice2}
                      alt="rice"
                      className={scrolledRice ? 'rice-2 rice-2-final' : 'rice-2 rice-2-initial'}
                    />
                    <img
                      src={rice3}
                      alt="rice"
                      className={scrolledRice ? 'rice-3 rice-3-final' : 'rice-3 rice-3-initial'}
                    />
                    <img
                      src={rice4}
                      alt="rice"
                      style={{display: (scrolledLentils == 2 ? "none" : "block")}}
                      className={scrolledRice ? 'rice-4 rice-4-final' : 'rice-4 rice-4-initial'}
                    />
                    <img
                      src={rice1}
                      alt="rice"
                      className={scrolledRice ? 'rice-5 rice-5-final' : 'rice-5 rice-5-initial'}
                    />
                    <img
                      src={rice2}
                      alt="rice"
                      className={scrolledRice ? 'rice-6 rice-6-final' : 'rice-6 rice-6-initial'}
                    />
                    <img
                      src={rice3}
                      alt="rice"
                      className={scrolledRice ? 'rice-7 rice-7-final' : 'rice-7 rice-7-initial'}
                    />
                    <img
                      src={rice6}
                      alt="rice"
                      className={scrolledRice ? 'rice-9 rice-9-final' : 'rice-9 rice-9-initial'}
                    />
                    <img
                      src={rice5}
                      alt="rice"
                      className={scrolledRice ? 'rice-10 rice-10-final' : 'rice-10 rice-10-initial'}
                    />
                    <img
                      src={rice8}
                      alt="rice"
                      className={scrolledRice ? 'rice-8 rice-8-final' : 'rice-8 rice-8-initial'}
                    />
                  </div>
                  <div
                  className={(scrolledPasta == 1 || scrolledPasta == 2) ? 'pasta' : 'pasta initial'}>
                    <img
                      src={pasta1}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-1 pasta-1-final' : 'pasta-1 pasta-1-initial'}
                    />
                    <img
                      src={pasta2}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-2 pasta-2-final' : 'pasta-2 pasta-2-initial'}
                    />
                    <img
                      src={pasta3}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-3 pasta-3-final' : 'pasta-3 pasta-3-initial'}
                    />
                    <img
                      src={pasta4}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-4 pasta-4-final' : 'pasta-4 pasta-4-initial'}
                    />
                    <img
                      src={pasta3}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-3 pasta-3-final' : 'pasta-3 pasta-3-initial'}
                    />
                    <img
                      src={pasta4}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-4 pasta-4-final' : 'pasta-4 pasta-4-initial'}
                    />
                    <img
                      src={pasta5}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-5 pasta-5-final' : 'pasta-5 pasta-5-initial'}
                    />
                    <img
                      src={pasta6}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-6 pasta-6-final' : 'pasta-6 pasta-6-initial'}
                    />
                    <img
                      src={pasta5}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-5 pasta-5-final' : 'pasta-5 pasta-5-initial'}
                    />
                    <img
                      src={pasta6}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-6 pasta-6-final' : 'pasta-6 pasta-6-initial'}
                    />
                    <img
                      src={pasta7}
                      alt="pasta"
                      className={(scrolledPasta == 2) ? 'pasta-7 pasta-7-final' : 'pasta-7 pasta-7-initial'}
                    />
                    <img
                      src={pasta8}
                      alt="pasta"
                      style={{display: (scrolledLentils == 2 ? "none" : "block")}}
                      className={(scrolledPasta == 2) ? 'pasta-8 pasta-8-final' : 'pasta-8 pasta-8-initial'}
                    />
                  </div>
                  <div
                  className={(scrolledLentils == 1 || scrolledLentils == 2) ? 'lentils' : 'lentils initial'}>
                    <img
                      src={lentils1}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-1 lentils-1-final' : 'lentils-1 lentils-1-initial'}
                    />
                    <img
                      src={lentils2}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-2 lentils-2-final' : 'lentils-2 lentils-2-initial'}
                    />
                    <img
                      src={lentils3}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-3 lentils-3-final' : 'lentils-3 lentils-3-initial'}
                    />
                    <img
                      src={lentils4}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-4 lentils-4-final' : 'lentils-4 lentils-4-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-5 lentils-5-final' : 'lentils-5 lentils-5-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-8 lentils-8-final' : 'lentils-8 lentils-8-initial'}
                    />
                    <img
                      src={lentils6}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-7 lentils-7-final' : 'lentils-7 lentils-7-initial'}
                    />
                    <img
                      src={lentils6}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-6 lentils-6-final' : 'lentils-6 lentils-6-initial'}
                    />
                    <img
                      src={lentils6}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-1-static-final lentils-static-final' : 'lentils-static-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-2-static-final lentils-static-final' : 'lentils-static-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-3-static-final lentils-static-final' : 'lentils-static-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-4-static-final lentils-static-final' : 'lentils-static-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={(scrolledLentils == 2) ? 'lentils-5-static-final ' : 'lentils-static-initial'}
                    />
                  </div>
                  <div
                  className={(scrolledChickpeas == 1 || scrolledChickpeas == 2) ? 'chickpeas' : 'chickpeas initial'}>

                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-1 chickpeas-1-final' : 'chickpeas-1 chickpeas-1-initial'}
                    />
                    <img src={chickpeas2} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-2 chickpeas-2-final' : 'chickpeas-2 chickpeas-2-initial'}
                    />
                    <img src={chickpeas3} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-3 chickpeas-3-final' : 'chickpeas-3 chickpeas-3-initial'}
                    />
                    <img src={chickpeas4} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-4 chickpeas-4-final' : 'chickpeas-4 chickpeas-4-initial'}
                    />
                    <img src={chickpeas5} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-5 chickpeas-5-final' : 'chickpeas-5 chickpeas-5-initial'}
                    />
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-3 chickpeas-3-final' : 'chickpeas-3 chickpeas-3-initial'}
                    />
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-1-static-final' : 'chickpeas-static-initial'}
                    />
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-2-static-final' : 'chickpeas-static-initial'}
                    />
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-3-static-final' : 'chickpeas-static-initial'}
                    />
                    <img src={chickpeas3} 
                      alt="chickpeas"
                      className={(scrolledChickpeas == 2) ? 'chickpeas-4-static-final' : 'chickpeas-static-initial'}
                    />
                  </div>
                  <div
                  className={(scrolledOnions == 1 || scrolledOnions == 2) ? 'onion' : 'onion initial'}>

                    <img src={onion}
                      className={(scrolledOnions == 2) ? 'onion-1 onion-1-final' : 'onion-1 onion-1-initial'}
                    />
                    <img src={onion3}
                      className={(scrolledOnions == 2) ? 'onion-2 onion-2-final' : 'onion-2 onion-2-initial'}
                    />
                    <img src={onion2}
                      className={(scrolledOnions == 2) ? 'onion-3 onion-3-final' : 'onion-3 onion-3-initial'}
                    />
                    <img src={onion3}
                      className={(scrolledOnions == 2) ? 'onion-4 onion-4-final' : 'onion-4 onion-4-initial'}
                    />
                    <img src={onion2}
                      className={(scrolledOnions == 2) ? 'onion-5 onion-5-final' : 'onion-5 onion-5-initial'}
                    />
                  </div>
                </>
              ) 
            }
<div className="salsa">
  <img
    src={salsa}
    className={`${scrolledSalsa ? (isShowCompleteDish ? 'animate__animated animate__bounceOutUp' : 'animate__animated animate__bounceInDown') : 'hidden'}`}
  />
</div>

<div className="shata">
  <img
    src={shata}
    className={`${scrolledShata ? (isShowCompleteDish ? 'animate__animated animate__bounceOutRight' : 'animate__animated animate__bounceInRight') : 'hidden'}`}
  />
</div>

<div className="garlic">
  <img
    src={garlic}
    className={`${scrolledGarlic ? (isShowCompleteDish ? 'animate__animated animate__bounceOutLeft' : 'animate__animated animate__bounceInLeft') : 'hidden'}`}
  />
</div>
</div>

  <img
    src={plateFUll}
    alt="Full Plate"
    className={`${isShowCompleteDish ? 'animate__animated animate__bounceIn' : 'hidden'}`}
  />
  <img
    src={plateEmpty}
    alt="Empty Plate"
    className={`${!isShowCompleteDish ? 'animate__animated animate__fadeIn' : 'hidden'}`}
  />

        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
