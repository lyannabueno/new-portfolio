import styled from 'styled-components'

export const CardContact = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  width: 450px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }

  @media (min-width: 769px) and (max-width: 1023px) {
    width: 350px;
  }
`
export const InputField = styled.input`
  border-radius: 7px;
  padding: 8px;
  width: 100%;
  color: ${(props) => props.theme.principalColor};
  font-size: 10px;
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundButtonColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 10px;
  box-sizing: border-box;
`
export const TextArea = styled.textarea`
  border-radius: 7px;
  padding: 8px;
  width: 100%;
  height: 100px;
  color: ${(props) => props.theme.principalColor};
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => props.theme.backgroundButtonColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 25px;
  resize: none;
  box-sizing: border-box;
`
export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    padding: 0 30px;
  }

  @media (min-width: 901px) and (max-width: 1023px) {
    padding: 0 30px 0 100px;
  }
`
export const ButtonEmail = styled.button`
  border-radius: 7px;
  padding: 10px 20px;
  width: 100%;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) => props.theme.thirdColor};
  cursor: pointer;
  border: ${(props) => props.theme.thirdColor};

  &:hover {
    background-color: ${(props) => props.theme.buttonColor};
  }
`
export const FooterStyle = styled.footer`
  margin-top: 20px;
  width: 500px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`
