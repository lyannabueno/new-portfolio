import styled from 'styled-components'
import { Paragraph as StyleParagraph } from '../../components/Paragraph/styles'

export const Description = styled(StyleParagraph)`
  margin: 24px 0;
`
export const ButtonTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.principalColor};
  cursor: pointer;
  border: none;
`
export const SidebarContainer = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  @media (max-width: 768px) {
    text-align: center;
  }
`
export const SocialMedias = styled.div`
  margin-top: 20px;
  cursor: pointer;
`
