import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import Home from './containers/home'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme/theme'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />  
    </ThemeProvider>
  </StrictMode>,
)
