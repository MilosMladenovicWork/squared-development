import React, { useState } from "react"

import styled from "styled-components"
import Button from "./Buttons/Button"
import EmailInput from "./Inputs/EmailInput"
import TextareaInput from "./Inputs/TextareaInput"
import TextInput from "./Inputs/TextInput"
import VerticalMarginSeparator from "./LayoutComponents/VerticalMarginSeparator"

const StyledContactForm = styled.form`
  margin: auto;
  width: 30vw;
  min-width: 450px;
  background: ${props => props.theme.colors.light};
  padding: 40px;
  border-radius: 5px;
  & > * {
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    min-width: 90%;
    & > * {
      margin-top: 20px;
    }
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`

const StatusMessage = styled.p`
  width: 100%;
  padding: 15px 10px;
  text-align: center;
  background: ${props =>
    props.fillColor
      ? props.theme.colors[props.fillColor]
        ? props.theme.colors[props.fillColor]
        : props.theme.colors.primary
      : props.theme.colors.primary};
  color: ${props => props.theme.colors.textLight};
`

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(undefined)
  const [successMessage, setSuccessMessage] = useState(undefined)

  const handleSubmit = e => {
    e.preventDefault()
    setErrorMessage("")
    setSuccessMessage("")
    if (
      !name ||
      !message ||
      !(
        email &&
        email.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      )
    ) {
      setErrorMessage("Required fields not filled!")
    } else {
      setErrorMessage(undefined)
      fetch(
        `/.netlify/functions/contactForm?name=${name}&email=${email}&message=${message}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        }
      )
        .then(response => response.json())
        .then(data => {
          if (data.status == "success") {
            return setSuccessMessage(data.message)
          } else if (data.status == "error") {
            return setErrorMessage(data.message)
          }
        })
        .catch(error => {
          console.log(error)
          setErrorMessage(
            "There was some error while trying to send your email. Try later!"
          )
        })
    }
  }

  return (
    <StyledContactForm>
      <TextInput placeholder="Name" value={name} onChange={setName} />
      <EmailInput placeholder="Email" value={email} onChange={setEmail} />
      <TextareaInput
        placeholder="Message"
        value={message}
        onChange={setMessage}
      />
      <ButtonContainer>
        <Button
          primary
          onClick={e => {
            e.preventDefault()
            handleSubmit(e)
          }}
        >
          Send
        </Button>
      </ButtonContainer>
      {errorMessage && (
        <StatusMessage fillColor={"error"}>{errorMessage}</StatusMessage>
      )}
      {successMessage && (
        <StatusMessage fillColor={"success"}>{successMessage}</StatusMessage>
      )}
    </StyledContactForm>
  )
}

export default ContactForm
