'use client'
import { useRef } from "react"

const InputWithFocus: React.FC = () => {
  const inputElement = useRef<HTMLInputElement>(null)

  const onFocusClick = () => {
    if(inputElement && inputElement.current) {
      inputElement.current.focus()
    }
  }

  return (
  <div>
    <input type="text" ref={inputElement} />
    <button onClick={onFocusClick}>Click and focus the input field</button>
  </div>
  )

}

export default InputWithFocus