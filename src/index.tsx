/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
import React from "react"
import ReactDOM from "react-dom"

const root = document.createElement("div")
document.body.appendChild(root)

const App = () => <div>Hello World!</div>

ReactDOM.createRoot(root).render(<App />)
