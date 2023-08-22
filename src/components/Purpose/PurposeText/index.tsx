import { Text } from './style'

interface PurposeTextPorps {
  text: string
}

export function PurposeText({ text }: PurposeTextPorps) {
  return <Text>{text}</Text>
}
