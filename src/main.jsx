import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import Home from './containers/home'
import Header from './components/header'
import Footer from './components/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Header />
    <Home />
    <Footer />
  </StrictMode>,
)
