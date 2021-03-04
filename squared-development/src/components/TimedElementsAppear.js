import React, { useState, useEffect, useRef } from "react"

import { animated, useTransition } from "react-spring"
import styled from "styled-components"

const StyledContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const HeightPlaceholderContainer = styled.div`
  position: relative;
  margin-top: ${props => props.size && props.size};
`

const AnimatedStyledContainer = animated(StyledContainer)

const TimedElementsAppear = ({ elements }) => {
  let textRef = useRef(null)

  const [items, setItems] = useState(elements)
  const [currentItem, setCurrentItem] = useState(elements[0])
  const [fontSize, setFontSize] = useState(null)

  useEffect(() => {
    const elementChangeInterval = setInterval(() => {
      let numOfElements = items.length
      let currentElementIndex = items.findIndex(item => item === currentItem)

      if (currentElementIndex == -1) {
        setCurrentItem(items[0])
      } else {
        let nextElementIndex = currentElementIndex + 1

        if (nextElementIndex === numOfElements) {
          setCurrentItem(items[0])
        } else {
          setCurrentItem(items[nextElementIndex])
        }
      }
    }, 3000)

    return () => clearInterval(elementChangeInterval)
  }, [currentItem])

  const transitions = useTransition(currentItem, item => item, {
    from: {
      transform: "translate3d(0,50px,0)",
      opacity: 0,
    },
    enter: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
    },
    leave: {
      transform: "translate3d(0,50px,0)",
      opacity: 0,
    },
  })

  useEffect(() => {
    if (typeof window !== "undefined" && textRef.current) {
      let computedStyles = window.getComputedStyle(textRef.current)
      console.log(computedStyles.marginBottom)
      setFontSize(computedStyles.getPropertyValue("font-size"))
    }
  }, [textRef])

  return transitions.map(({ item, props, key }) => {
    return (
      <HeightPlaceholderContainer size={fontSize}>
        <AnimatedStyledContainer ref={textRef} key={key} style={props}>
          {item}
        </AnimatedStyledContainer>
      </HeightPlaceholderContainer>
    )
  })
}

export default TimedElementsAppear
