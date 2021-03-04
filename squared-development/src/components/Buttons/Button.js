import React from "react"

import styled, { css, keyframes } from "styled-components"
import VisibilitySensor from "react-visibility-sensor"

const clippingAnimation = keyframes`
  0%{
    clip-path:polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%); 
  }
  50%{
    clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%); 
  }
  100%{
    clip-path:polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%); 
  }
  `

const Overlay = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 0;
  height: 0;
  position: absolute;
  top: -6px;
  left: -6px;
  z-index: -1;
  transition: 0.3s;
  ${props =>
    props.secondary &&
    css`
      background: ${props => props.theme.colors.accent};
    `}
  ${props =>
    props.clipped &&
    css`
      background: ${props => props.theme.colors.accent};
    `}
    ${props =>
    props.link &&
    css`
      background: ${props => props.theme.colors.accent};
    `}
`

const StyledButton = styled.button`
  position: relative;
  background-color: ${props => props.theme.colors && props.theme.colors.accent};
  padding: 0.5em 2em;
  color: ${props => props.theme.colors && props.theme.colors.textLight};
  border: 3px solid ${props => props.theme.colors && props.theme.colors.accent};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  transition: 0.3s;
  &:hover {
    > ${Overlay} {
      width: calc(100% + 6px);
      height: calc(100% + 6px);
    }
  }
  ${props =>
    props.active &&
    css`
      > ${Overlay} {
        width: calc(100% + 6px);
        height: calc(100% + 6px);
      }
    `}
  ${props =>
    props.display &&
    css`
      font-family: ${props => props.theme.font.display};
    `};
  ${props =>
    props.secondary &&
    css`
      background: ${props => props.theme.colors.light};
      border-color: ${props =>
        props.theme.colors && props.theme.colors.primary};
      color: ${props => props.theme.colors && props.theme.colors.textDark};
    `}
  ${props =>
    props.clipped &&
    css`
      clip-path: polygon(1.5em 0%, 100% 0%, calc(100% - 1.5em) 100%, 0% 100%);
      ${props =>
        props.isVisible &&
        css`
          animation: ${clippingAnimation} 8s forwards;
        `}
      animation-iteration-count:infinite;
      > ${Overlay} {
        top: unset;
        left: unset;
        bottom: -3px;
        left: 0;
        background: ${props => props.theme.colors.accent};
      }
      &:hover {
        background-color: ${props => props.theme.colors.primary};
        border: 3px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.accent};
        > ${Overlay} {
          width: 100%;
          height: 3px;
        }
      }
      ${props.active &&
      css`
        background-color: ${props => props.theme.colors.primary};
        border: 3px solid ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.accent};
        > ${Overlay} {
          width: 100%;
          height: 3px;
        }
      `}
    `}
  ${props =>
    props.link &&
    css`
      background: transparent;
      border-color: transparent;
      > ${Overlay} {
        top: unset;
        left: unset;
        bottom: -3px;
        left: 0;
      }
      &:hover {
        color: ${props => props.theme.colors.accent};
        > ${Overlay} {
          width: 100%;
          height: 3px;
        }
      }
      ${props =>
        props.active &&
        css`
          color: ${props => props.theme.colors.accent};
          > ${Overlay} {
            width: 100%;
            height: 3px;
          }
        `}
    `}
`

const Button = ({ children, secondary, clipped, link, ...rest }) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => {
        return (
          <StyledButton
            data-testid="button"
            {...rest}
            secondary={secondary}
            clipped={clipped}
            link={link}
            isVisible={isVisible}
          >
            <Overlay secondary={secondary} clipped={clipped} link={link} />
            {children}
          </StyledButton>
        )
      }}
    </VisibilitySensor>
  )
}

export default Button
