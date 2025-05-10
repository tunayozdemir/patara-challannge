import { ChangeEvent, HTMLInputTypeAttribute } from "react"

export interface InputSearchProps {
  type?: HTMLInputTypeAttribute
  placeholder?: string
  className?: string
  value?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}