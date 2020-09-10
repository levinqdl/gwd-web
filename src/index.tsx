/// <reference types="react-dom/experimental" />
/// <reference types="react/experimental" />
import React from "react"
import ReactDOM from "react-dom"
import { css } from "linaria"
import "sanitize.css"
import "sanitize.css/forms.css"
import { Button, Input, SystemProvider } from "@mana/ui"
import * as md from "@mana-ui/material"
import "regenerator-runtime/runtime"
import { Form, Field } from "@mana-ui/form"

const root = document.createElement("div")
document.body.appendChild(root)

const App = () => {
  return (
    <SystemProvider system={md}>
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
            <Form
              init={{}}
              onSubmit={({ value }) => {
                console.log(value)
              }}
              fieldRender={({ Control, labelElem }) => (
                <Control label={labelElem} />
              )}
            >
              {({ submit }) => (
                <>
                  <Field label="Username" name="username" control={<Input />} />
                  <Field
                    label="Password"
                    name="password"
                    control={<Input type="password" />}
                  />
                  <Button onClick={submit}>Login</Button>
                </>
              )}
            </Form>
          </div>
        </div>
      </div>
    </SystemProvider>
  )
}

ReactDOM.unstable_createRoot(root).render(<App />)
