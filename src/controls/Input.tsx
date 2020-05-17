import React, { FC, ChangeEvent, ReactNode } from "react"
import { css, cx } from "linaria"

const Input: FC<{
  label: ReactNode
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  type?: "password"
}> = ({ value, onChange, type = "text", label }) => {
  const active = !!(value ?? "" !== value)
  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={css`
          width: 100%;
          border: 0;
          border-bottom: 1px solid #ced4da;
          outline: 0;
          @keyframes autofill {
            0%,
            100% {
              color: #495057;
              background: transparent;
            }
          }
          :-webkit-autofill::first-line {
            font-size: 16px;
            font-family: Sans-Serif;
          }
          animation-delay: 1s; /* Safari support - any positive time runs instantly */
          animation-name: autofill;
          animation-fill-mode: both;
          :focus {
            border-bottom: 1px solid #77cbe7;
            box-shadow: 0 1px 0 0 #77cbe7;
            & + label {
              color: var(--color-primary);
              transform: translateY(-1.2rem) scale(0.8);
            }
          }
          :-internal-autofill-selected + label {
            transform: translateY(-1.2rem) scale(0.8);
          }
        `}
      />
      <label
        className={cx(
          css`
            position: absolute;
            top: 0;
            left: 0;
            color: #757575;
            cursor: text;
            transform: translateY(8px);
            transition: transform 0.2s ease-out, color 0.2s ease-out,
              -webkit-transform 0.2s ease-out;
            transform-origin: 0 100%;
          `,
          active &&
            css`
              transform: translateY(-16px) scale(0.8);
            `
        )}
      >
        {label}
      </label>
    </div>
  )
}

export default Input
