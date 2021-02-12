import React, {useEffect, useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import swiperStyles from 'swiper/swiper.scss';
import styled from 'styled-components'
import IconCard from "./Cards/IconCard"

console.log(swiperStyles)

const CardContainer = styled.div`
  display:flex;
  width:100%;
  flex-direction:column;
  align-items:center;
  transition:0.25s;
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(0.85)'};
`

SwiperCore.use([Autoplay])

const ReferencesSlider = ({data, setImageToParent}) => {
  
  const [activeSlide, setActiveSlide] = useState(1)
  const [background, setBackground] = useState()
  const [swiperReference, setSwiperReference] = useState()

  useEffect(() => {
    setImageToParent(background)
  }, [background])

  return(
    <VisibilitySensor partialVisibility>
    {({isVisible}) => {
      if(swiperReference){
        if(isVisible){
          swiperReference.autoplay.start()
        }else{
          swiperReference.autoplay.stop()
        }
      }
      return <Swiper
        style={{padding:'100px 0'}}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides
        initialSlide={1}
        breakpoints= {
          {
            768: {
              slidesPerView: 3,
              spaceBetween: 20
            },
          }
        }
        autoplay={{delay:6000}}
        loop
        onInit={(swiper) => setSwiperReference(swiper)}
        onSlideChange={swiper => {
          setActiveSlide(swiper.realIndex)
          setBackground(data[swiper.realIndex].projectImg)
        }}
      >
          {
            data && 
            data.length > 0 &&
            data.map((reference, index) => {
              return(
                <SwiperSlide key={index}>
                  <CardContainer active={activeSlide === index}>
                    <IconCard 
                      icon={reference.icon}
                      title={reference.title}
                      text={reference.text}
                      button={reference.button}
                    />
                  </CardContainer>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
    }}
    </VisibilitySensor>
  )
}

export default ReferencesSlider