import React, {useState} from 'react'

import styled from 'styled-components'
import Button from './Buttons/Button'
import EmailInput from './Inputs/EmailInput'
import TextareaInput from './Inputs/TextareaInput'
import TextInput from './Inputs/TextInput'
import VerticalMarginSeparator from './LayoutComponents/VerticalMarginSeparator'

const StyledContactForm = styled.form`
  margin:auto;
  width:30vw;
  min-width:450px;
  background:${props => props.theme.colors.light};
  padding:40px;
  border-radius:5px;
`

const ButtonContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  margin-top:10px;
`

const ContactForm = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return(
    <StyledContactForm>
      <TextInput placeholder='Name' value={name} onChange={setName}/>
      <EmailInput placeholder='Email' value={email} onChange={setEmail}/>
      <VerticalMarginSeparator marginSize={1.5}/>
      <TextareaInput placeholder='Message' value={message} onChange={setMessage}/>
      <VerticalMarginSeparator marginSize={5}/>
      <ButtonContainer>
        <Button primary>Send</Button>
      </ButtonContainer>
    </StyledContactForm>
  )
}

export default ContactForm