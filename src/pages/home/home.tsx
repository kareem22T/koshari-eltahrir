import React, { useEffect, useState } from 'react';
import DefaultLayout from "../../layout/DefaultLayout";

import plateEmpty from "./../../images/plate-empty.png";
import plateFUll from "./../../images/plate-full.png";

import rice1 from "../../images/rice-1.png";
import rice2 from "../../images/rice-2.png";
import rice3 from "../../images/rice-3.png";
import rice4 from "../../images/rice-4.png";
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

import onion from "./../../images/onion.png";

import salsa from "./../../images/salsa.png";
import shata from "./../../images/shata.png";
import garlic from "./../../images/garlic sauce .png";

const Home = () => {
  const [scrolledRice, setScrolledRice] = useState(false);
  const [scrolledPasta, setScrolledPasta] = useState(false);
  const [scrolledLentils, setScrolledLentils] = useState(false);
  const [scrolledChickpeas, setScrolledChickpeas] = useState(false);
  const [scrolledOnions, setScrolledOnions] = useState(false);
  const [scrolledSalsa, setscrolledSalsa] = useState(false);
  const [scrolledshata, setscrolledshata] = useState(false);
  const [scrolledgarlic, setsetscrolledGarlic] = useState(false);
  const [isShowCompleteDish, setIsShowCompleteDish] = useState(false);

  // Handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 300) {
        setScrolledRice(true);
      } else {
        setScrolledRice(false);
      }

      if (scrollPosition > 600) {
        setScrolledPasta(true);
      } else {
        setScrolledPasta(false);
      }

      if (scrollPosition > 900) {
        setScrolledLentils(true);
      } else {
        setScrolledLentils(false);
      }

      if (scrollPosition > 1200) {
        setScrolledChickpeas(true);
      } else {
        setScrolledChickpeas(false);
      }
      if (scrollPosition > 1500) {
        setScrolledOnions(true);
      } else {
        setScrolledOnions(false);
      }
      if (scrollPosition > 1800) {
        setscrolledSalsa(true);
      } else {
        setscrolledSalsa(false);
      }
      if (scrollPosition > 1800) {
        setscrolledshata(true);
      } else {
        setscrolledshata(false);
      }
      if (scrollPosition > 1800) {
        setsetscrolledGarlic(true);
      } else {
        setsetscrolledGarlic(false);
      }
      if (scrollPosition > 2000) {
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
  }, []);
  
  return (
    <DefaultLayout>
      <div style={{
            marginBottom: '500vh'
      }}></div>
      <section className="hero">
        <div className="container">
          <div className="ingreadiants">
            {
              !isShowCompleteDish && (
                <>
                  <div className="rice">
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
                      src={rice8}
                      alt="rice"
                      className={scrolledRice ? 'rice-8 rice-8-final' : 'rice-8 rice-8-initial'}
                    />
                  </div>
                  <div className="pasta">
                    <img
                      src={pasta1}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-1 pasta-1-final' : 'pasta-1 pasta-1-initial'}
                    />
                    <img
                      src={pasta2}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-2 pasta-2-final' : 'pasta-2 pasta-2-initial'}
                    />
                    <img
                      src={pasta3}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-3 pasta-3-final' : 'pasta-3 pasta-3-initial'}
                    />
                    <img
                      src={pasta4}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-4 pasta-4-final' : 'pasta-4 pasta-4-initial'}
                    />
                    <img
                      src={pasta5}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-5 pasta-5-final' : 'pasta-5 pasta-5-initial'}
                    />
                    <img
                      src={pasta6}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-6 pasta-6-final' : 'pasta-6 pasta-6-initial'}
                    />
                    <img
                      src={pasta7}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-7 pasta-7-final' : 'pasta-7 pasta-7-initial'}
                    />
                    <img
                      src={pasta8}
                      alt="pasta"
                      className={scrolledPasta ? 'pasta-8 pasta-8-final' : 'pasta-8 pasta-8-initial'}
                    />
                  </div>
                  <div className="lentils">
                    <img
                      src={lentils1}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-1 lentils-1-final' : 'lentils-1 lentils-1-initial'}
                    />
                    <img
                      src={lentils2}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-2 lentils-2-final' : 'lentils-2 lentils-2-initial'}
                    />
                    <img
                      src={lentils3}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-3 lentils-3-final' : 'lentils-3 lentils-3-initial'}
                    />
                    <img
                      src={lentils4}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-4 lentils-4-final' : 'lentils-4 lentils-4-initial'}
                    />
                    <img
                      src={lentils5}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-5 lentils-5-final' : 'lentils-5 lentils-5-initial'}
                    />
                    <img
                      src={lentils6}
                      alt="lentils"
                      className={scrolledLentils ? 'lentils-6 lentils-6-final' : 'lentils-6 lentils-6-initial'}
                    />
                  </div>
                  <div className="chickpeas">
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={scrolledChickpeas ? 'chickpeas-1 chickpeas-1-final' : 'chickpeas-1 chickpeas-1-initial'}
                    />
                    <img src={chickpeas2} 
                      alt="chickpeas"
                      className={scrolledChickpeas ? 'chickpeas-2 chickpeas-2-final' : 'chickpeas-2 chickpeas-2-initial'}
                    />
                    <img src={chickpeas3} 
                      alt="chickpeas"
                      className={scrolledChickpeas ? 'chickpeas-3 chickpeas-3-final' : 'chickpeas-3 chickpeas-3-initial'}
                    />
                    <img src={chickpeas1} 
                      alt="chickpeas"
                      className={scrolledChickpeas ? 'chickpeas-3 chickpeas-3-final' : 'chickpeas-3 chickpeas-3-initial'}
                    />
                  </div>
                  <div className="onion">
                    <img src={onion}
                      className={scrolledOnions ? 'onion-1 onion-1-final' : 'onion-1 onion-1-initial'}
                    />
                    <img src={onion}
                      className={scrolledOnions ? 'onion-2 onion-2-final' : 'onion-2 onion-2-initial'}
                    />
                    <img src={onion}
                      className={scrolledOnions ? 'onion-3 onion-3-final' : 'onion-3 onion-3-initial'}
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
    className={`${scrolledshata ? (isShowCompleteDish ? 'animate__animated animate__bounceOutRight' : 'animate__animated animate__bounceInRight') : 'hidden'}`}
  />
</div>

<div className="garlic">
  <img
    src={garlic}
    className={`${scrolledgarlic ? (isShowCompleteDish ? 'animate__animated animate__bounceOutLeft' : 'animate__animated animate__bounceInLeft') : 'hidden'}`}
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
