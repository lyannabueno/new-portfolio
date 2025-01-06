import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => {
  const [isImage1Animating, setIsImage1Animating] = useState(false)
  const [isImage2Animating, setIsImage2Animating] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const handleClickImage1 = () => {
    setIsImage1Animating(true)
    setTimeout(() => {
      setIsImage1Animating(false)
    }, 1000)
  }

  const handleClickImage2 = () => {
    setIsImage2Animating(true)
    setTimeout(() => {
      setIsImage2Animating(false)
    }, 1000)
  }

  return (
    <section>
      <Title fontSize={16}>About</Title>

      <Paragraph type="principal">
        Detail-oriented Front-End Developer with over{' '}
        <strong>2 years of experience </strong>
        in creating modern and efficient interfaces. Focused on{' '}
        <strong>
          performance optimization and process automation
        </strong>, always striving to deliver solutions aligned with user needs
        and company goals. Experienced in developing dynamic interfaces, as well
        as<strong> collaborating in teams and solving complex problems</strong>.
        With a history of participation in academic and competitive projects,
        always seeks to learn new technologies and apply them to face unique
        challenges and improve development efficiency.
      </Paragraph>

      <GithubSection>
        <img
          key="image1"
          data-aos={isImage1Animating ? 'fade-right' : undefined}
          src="https://github-readme-stats.vercel.app/api?username=lyannabueno&show_icons=true&locale=en&theme=moltack&rank_icon=github"
          onClick={handleClickImage1}
          alt="GitHub Stats"
        />
        <img
          key="image2"
          data-aos={isImage2Animating ? 'fade-left' : undefined}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=lyannabueno&hide_progress=true&theme=moltack&langs_count=7"
          onClick={handleClickImage2}
          alt="Top Languages"
        />
      </GithubSection>
    </section>
  )
}

export default About
