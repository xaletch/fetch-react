import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";
import './app/styles/global.css'
import App from './app/App'
import { Providers } from './app/providers'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>,
)
