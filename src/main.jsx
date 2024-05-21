import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter, Form} from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { light,Dark } from './constants/theme.js'
import transformPlugin  from "./containers"

const routes = transformPlugin()

console.log(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={light}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
   
  </React.StrictMode>,
)
