import { useState } from 'react'
import emailjs from 'emailjs-com'
import {
  CardContact,
  ButtonEmail,
  TextArea,
  InputField,
  ContactContainer,
  FooterStyle
} from './styles'
import { Description } from '../Sidebar/styles'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'

type Props = {
  theme: string
}

const Contact = ({ theme }: Props) => {
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [subjectError, setSubjectError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let hasError = false
    if (!subject) {
      setSubjectError(true)
      hasError = true
    } else {
      setSubjectError(false)
    }

    if (!email) {
      setEmailError(true)
      hasError = true
    } else {
      setEmailError(false)
    }

    if (!message) {
      setMessageError(true)
      hasError = true
    } else {
      setMessageError(false)
    }

    if (hasError) {
      return
    }

    setError('')

    emailjs
      .sendForm(
        'service_d9pti69',
        'template_tpp4cd6',
        e.target as HTMLFormElement,
        '1nWRalWpODWiAltIz'
      )
      .then(
        (result) => {
          console.log(result.text)

          setSubject('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message.')
        }
      )
  }

  return (
    <section>
      <Title fontSize={16}>Contact me</Title>
      <ContactContainer>
        <CardContact>
          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaLocationDot
                color={theme === 'dark' ? 'white' : 'black'}
                size={15}
                style={{ marginRight: '10px' }}
              />
              <Paragraph type="principal" fontSize={15}>
                Location:
              </Paragraph>
            </div>
            <Description type="secundary" fontSize={13}>
              Lisbon, Portugal
            </Description>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <FaPhoneAlt
                color={theme === 'dark' ? 'white' : 'black'}
                size={15}
                style={{ marginRight: '10px' }}
              />
              <Paragraph type="principal" fontSize={15}>
                Phone:
              </Paragraph>
            </div>
            <Description type="secundary" fontSize={13}>
              +351 932 338 188
            </Description>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IoMdMail
                color={theme === 'dark' ? 'white' : 'black'}
                size={15}
                style={{ marginRight: '10px' }}
              />
              <Paragraph type="principal" fontSize={15}>
                Email:
              </Paragraph>
            </div>
            <Description type="secundary" fontSize={13}>
              anabuenogomes@hotmail.com
            </Description>
          </div>
        </CardContact>

        <CardContact style={{ paddingTop: '40px' }}>
          <form onSubmit={handleSubmit}>
            <InputField
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              style={{ borderColor: subjectError ? 'red' : '' }}
            />
            <InputField
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              style={{ borderColor: emailError ? 'red' : '' }}
            />
            <TextArea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              style={{ borderColor: messageError ? 'red' : '' }}
            />
            <ButtonEmail type="submit">Send e-mail</ButtonEmail>
          </form>
        </CardContact>
      </ContactContainer>
      <FooterStyle>
        <Paragraph type="principal">
          © 2025 Ana Bueno. All rights reserved.
        </Paragraph>
      </FooterStyle>
    </section>
  )
}

export default Contact
