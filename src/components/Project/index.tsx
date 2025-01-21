import Paragraph from '../Paragraph'

import {
  Card,
  LinkButton,
  Skill,
  SkillImage,
  SkillName,
  SkillsContainer
} from './styles'
import { TitleProjects } from '../Title/styles'

export type Props = {
  image: string
  title: string
  description: string
  link: string
  skills: { image: string; name: string; id?: string }[] // skills deve ser um array de objetos
}

const Project = ({ image, title, description, link, skills }: Props) => (
  <Card image={image} data-aos="flip-left">
    <TitleProjects>{title}</TitleProjects>
    <Paragraph type="principal">{description}</Paragraph>
    <SkillsContainer>
      <LinkButton href={link}>View</LinkButton>
      {skills.map((skill, index) => (
        <Skill key={index}>
          <SkillImage src={skill.image} alt={skill.name} id={skill.id} />
          <SkillName>{skill.name}</SkillName>
        </Skill>
      ))}
    </SkillsContainer>
  </Card>
)

export default Project
