import { Paragraph as StyleParagraph } from './styles'

export type Props = {
  children: string
  type?: 'principal' | 'secundary'
}

const Paragraph = ({ children, type = 'principal' }: Props) => (
  <StyleParagraph type={type}>{children}</StyleParagraph>
)

export default Paragraph
