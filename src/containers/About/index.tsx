import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph type="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      blanditiis adipisci numquam veniam aspernatur enim ut doloremque
      cupiditate, sequi quis sint minus fugit voluptas odio iusto modi? Placeat,
      accusantium dolores?
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=lyannabueno&show_icons=true&locale=en&theme=moltack&rank_icon=github" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lyannabueno&hide_progress=true&theme=moltack&langs_count=7" />
    </GithubSection>
  </section>
)

export default About
