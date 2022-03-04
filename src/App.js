import { Route,Routes } from 'react-router-dom'

// theme.js

// 1. import `extendTheme` function
import { extendTheme,ChakraProvider } from '@chakra-ui/react'
import Main from './views/Main'
// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })
export default function App() {
  return(
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="/" element={<Main />} />  
      </Routes>
    </ChakraProvider>
  )
}