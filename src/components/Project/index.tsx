import Paragraph from '../Paragraph'

import { Card, LinkButton } from './styles'
import { TitleProjects } from '../Title/styles'

export type Props = {
  image: string
  title: string
  description: string
  link: string
}

const Project = ({ image, title, description, link }: Props) => (
  <Card image={image} data-aos="flip-left">
    <TitleProjects>{title}</TitleProjects>
    <Paragraph type="principal">{description}</Paragraph>
    <LinkButton href={link}>View</LinkButton>
  </Card>
)

export default Project
