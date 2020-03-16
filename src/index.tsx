/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
import React from "react"
import ReactDOM from "react-dom"
import { css } from "linaria"
import "sanitize.css"

const root = document.createElement("div")
document.body.appendChild(root)

const App = () => (
  <div
    className={css`
      height: 100vh;
    `}
  >
    Hello World!
  </div>
)

ReactDOM.createRoot(root).render(<App />)
