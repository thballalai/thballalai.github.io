import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import Home from './containers/home'
import Header from './components/header'
import Footer from './components/footer'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme/theme'
import { BrowserRouter, Route, Routes } from "react-router";
import Contato from './containers/contato'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

        <Footer />  
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>,
)
