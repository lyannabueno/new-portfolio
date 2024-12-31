import Paragraph from '../Paragraph'
import Title from '../Title'

import { Card, LinkButton } from './styles'

const Project = () => (
  <Card>
    <Title>To-do List</Title>
    <Paragraph type="secundary">
      This to-do list app allows users to easily add, edit, and delete tasks. It
      features a simple and user-friendly interface where tasks can be marked as
      completed, helping users stay organized and manage their tasks
      efficiently. The design prioritizes ease of use and accessibility,
      offering a smooth task management experience.
    </Paragraph>
    <LinkButton>View</LinkButton>
  </Card>
)

export default Project
