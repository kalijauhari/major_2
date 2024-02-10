import { ThemeProvider, createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { Box, CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Handbook from "@/scenes/Handbook";
import About from "@/scenes/About";
function App() {
  const theme = useMemo( () => createTheme (themeSettings), [])
  return (
      <div className='app'>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar/>
             <Routes>
             <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<div> predictions page</div>}/>
              <Route path="/about" element={<About/>} /> 
              <Route path="/handbook" element={<Handbook/>} />
             </Routes>
          </Box>
        </ThemeProvider>
        </BrowserRouter>
      </div>
  )
}

export default App
