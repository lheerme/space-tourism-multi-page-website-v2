import { Number } from './style'

interface PurposeNumberPorps {
  number: string
}

export function PurposeNumber({ number }: PurposeNumberPorps) {
  return <Number>{number}</Number>
}
