/* eslint-disable react/style-prop-object */
import React from 'react'
import { motion } from "framer-motion";
const Section = ({
     h3,
    text,
    hasBtn = true,
    btnTxt,
    imgSrc,
    imgSize = "70%",
    backgroundColor,
    headingColor,
    textColor,
    btnBgColor,
    btnColor,}) => {
      const headingOptions = {
        initial: {
          y: "-100%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
      };
    
      const textOptions = {
        ...headingOptions,
        transition: {
          delay: 0.3,
        },
      };
      const buttonOptions = {
        initial: {
          y: "100%",
          opacity: 0,
        },
        whileInView: {
          y: 0,
          opacity: 1,
        },
        transition: {
          delay: 0.3,
          ease: "easeIn",
        },
      };
      const imgOptions = {
        initial: {
          scale: 0.1,
          opacity: 0,
        },
        whileInView: {
          scale: 1,
          opacity: 1,
        },
        transition: {
          delay: 0.3,
        },
      };
  return (
    <section className='section'
    style={{
        backgroundColor,
      }}
    >
        <div>
        <motion.h3
          style={{
            color: headingColor,
          }}
          data-cursorpointer={true}
          {...headingOptions}
        >
          {h3}
        </motion.h3>

        <motion.p
          style={{
            color: textColor,
          }}
          data-cursorpointer={true}
          {...textOptions}
        >
          {text}
        </motion.p>

        {hasBtn && (
          <motion.button
            style={{
              color: btnColor,
              backgroundColor: btnBgColor,
            }}
            data-cursorpointer={true}
            {...buttonOptions}
          >
            {btnTxt}
          </motion.button>
        )}

        <motion.div {...imgOptions}>
          <img
            src={imgSrc}
            alt="ImgSrc"
            style={{
              width: imgSize,
            }}
          />
                      {/* <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    <defs>                         <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        </linearGradient>                    </defs>                <path fill="url(#sw-gradient)" d="M30.5,-28.4C38.4,-22.6,42.9,-11.3,42.1,-0.8C41.3,9.8,35.3,19.6,27.4,26.5C19.6,33.4,9.8,37.5,0,37.6C-9.9,37.6,-19.7,33.6,-28,26.6C-36.2,19.7,-42.9,9.9,-42,0.9C-41.2,-8.1,-32.8,-16.3,-24.5,-22.1C-16.3,-27.9,-8.1,-31.3,1.6,-32.9C11.3,-34.4,22.6,-34.2,30.5,-28.4Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path>              </svg> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Section