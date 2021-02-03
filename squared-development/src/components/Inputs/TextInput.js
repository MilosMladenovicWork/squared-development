import React from 'react'

import styled from 'styled-components'

const StyledInput = styled.input`
  border:none;
  border-bottom:2px solid ${props => props.theme.colors.primary + '88'};
  width:100%;
  outline:none;
  font-family:${props => props.theme.font.display};
  color:${props => props.textColor ? (props.theme.colors[props.textColor] ? props.theme.colors[props.textColor] : props.theme.colors.textDark) : props.theme.colors.textDark};
  &&:focus{
    border-bottom:2px solid ${props => props.theme.colors.primary};
  }

  &&:valid{
    border-bottom:2px solid ${props => props.theme.colors.primary};
  }
`

const TextInput = ({name, value, onChange, placeholder, textColor, ...rest}) => {
  return(
    <StyledInput type='text' required name={name} textColor={textColor} onChange={e => onChange(e.target.value)} {...rest} placeholder={placeholder}/>
  )
}

export default TextInput