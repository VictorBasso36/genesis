import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { hydrate, render } from "react-dom";


const APP = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   )
const rootElement = document.getElementById("root")
if (rootElement.hasChildNodes()) {
  hydrate(APP, rootElement);
} else {
  render(APP, rootElement);
}
