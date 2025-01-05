import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
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

type Props = {
  theme: string
}

const Contact = ({ theme }: Props) => (
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
        <InputField type="text" placeholder="Subject" />
        <InputField type="email" placeholder="Email" />
        <TextArea placeholder="Message" />
        <ButtonEmail type="submit">Send e-mail</ButtonEmail>
      </CardContact>
    </ContactContainer>
    <FooterStyle>
      <Paragraph type="principal">
        © 2025 Ana Bueno. All rights reserved.
      </Paragraph>
    </FooterStyle>
  </section>
)

export default Contact
