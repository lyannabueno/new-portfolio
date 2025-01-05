import styled from 'styled-components'
import { Props } from '.'

export const Title = styled.h3<Props>`
  color: ${(props) => props.theme.principalColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    padding-top: 40px;
  }
`
export const TitleProjects = styled.h3<Props>`
  color: ${(props) => props.theme.thirdColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`
