import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import StickyNode from 'react-stickynode'
import React, { useState, useEffect } from 'react'

import {
  Description,
  ButtonTheme,
  SocialMedias,
  SidebarContainer
} from './styles'

type Props = {
  changeTheme: () => void
  theme: string
}

const Sidebar = ({ changeTheme, theme }: Props) => {
  const [scrolled, setScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    const handleScroll = () => {
      if (isDesktop && window.scrollY > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDesktop])

  return (
    <StickyNode enabled={isDesktop}>
      <SidebarContainer style={{ padding: scrolled ? '20px 0 530px 0' : '0' }}>
        <Avatar />
        <Title fontSize={20}>Ana Bueno</Title>
        <Paragraph type="secundary" fontSize={12}>
          Transforming complex ideas into beautiful and functional digital
          experiences.
        </Paragraph>
        <Description type="principal" fontSize={12}>
          Front-End Developer
        </Description>
        <ButtonTheme onClick={changeTheme}>Change Theme</ButtonTheme>
        <SocialMedias>
          <a
            href="https://github.com/lyannabueno"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color={theme === 'dark' ? 'white' : 'black'} size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/anabuenogomes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              style={{ margin: '0 10px' }}
              color={theme === 'dark' ? 'white' : 'black'}
              size={25}
            />
          </a>
          <a
            href="mailto:seuemail@example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail color={theme === 'dark' ? 'white' : 'black'} size={28} />
          </a>
        </SocialMedias>
      </SidebarContainer>
    </StickyNode>
  )
}

export default Sidebar
