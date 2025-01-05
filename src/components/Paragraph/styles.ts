import styled from 'styled-components'
import { Props } from '.'

export const Paragraph = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'principal'
      ? props.theme.principalColor
      : props.theme.secundaryColor};
  line-height: 22px;
`
