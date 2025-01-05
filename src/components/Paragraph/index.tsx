import { Paragraph as StyleParagraph } from './styles'

export type Props = {
  children: React.ReactNode
  type?: 'principal' | 'secundary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => (
  <StyleParagraph fontSize={fontSize} type={type}>
    {children}
  </StyleParagraph>
)

export default Paragraph
