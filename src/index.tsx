/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
import React, { useState } from "react"
import ReactDOM from "react-dom"
import { css } from "linaria"
import "sanitize.css"
import "sanitize.css/forms.css"
import { Input } from "./controls"

const root = document.createElement("div")
document.body.appendChild(root)

const App = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div
      className={css`
        height: 100vh;
        background: #f6f8fa;
        font-family: Sans-Serif;
        color: #495057;
        --color-primary: #77cbe7;
      `}
    >
      <div
        className={css`
          height: 100%;
          background: #006eb7;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          className={css`
            width: 300px;
            height: 400px;
            background: #f6f8fa;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding: 20px;
          `}
        >
          <div
            className={css`
              text-align: center;
              color: var(--color-primary);
            `}
          >
            Magic Flow
          </div>
          <Input
            label="Username"
            value={username}
            onChange={({ target: { value } }) => {
              setUsername(value)
            }}
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={({ target: { value } }) => {
              setPassword(value)
            }}
          />
        </div>
      </div>
    </div>
  )
}

ReactDOM.createRoot(root).render(<App />)
