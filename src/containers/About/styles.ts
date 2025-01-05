import styled from 'styled-components'

export const GithubSection = styled.div`
  margin: 32px 0 64px 0;
  text-align: center;

  img {
    height: 157px;
    margin-right: 15px;
    cursor: pointer;

    @media (max-width: 1023px) {
      height: auto;
      width: 100%;
      margin: 20px 0 0 0;
    }
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`
