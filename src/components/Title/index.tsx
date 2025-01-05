import { Title as StyleTitle } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Title = ({ children, fontSize }: Props) => (
  <StyleTitle fontSize={fontSize}>{children}</StyleTitle>
)

export default Title
