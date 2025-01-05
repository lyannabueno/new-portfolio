import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import About from './containers/About'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import lightTheme from './themes/light'
import darkTheme from './themes/dark'

function App() {
  const [getDarkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1200 })
  }, [])

  function changeTheme() {
    setDarkTheme(!getDarkTheme)
  }

  return (
    <ThemeProvider theme={getDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar
          changeTheme={changeTheme}
          theme={getDarkTheme ? 'dark' : 'light'}
        />
        <main>
          <About />
          <Projects />
        </main>
        <Contact theme={getDarkTheme ? 'dark' : 'light'} />
      </Container>
    </ThemeProvider>
  )
}

export default App
