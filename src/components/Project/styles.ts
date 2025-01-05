import styled from 'styled-components'

interface CardProps {
  image: string // Define a prop 'image' que será passada para o styled-component
}

export const Card = styled.div<CardProps>`
  position: relative;
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px;
  border-radius: 10px;
  overflow: hidden; /* para garantir que o pseudo-elemento não ultrapasse os limites do card */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    background-position: center;
    filter: blur(20px);
    opacity: 0.2;
    background-size: cover;
    z-index: -1; /* coloca o pseudo-elemento atrás do conteúdo */
  }

  &:hover::before {
    filter: blur(2px);
  }
`
export const LinkButton = styled.a`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.thirdColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
  border-radius: 5px;

  &:hover {
    background-color: ${(props) => props.theme.buttonColor};
  }
`
