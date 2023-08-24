import { ReactNode } from 'react'
import { Container } from './style'
import { motion } from 'framer-motion'

interface PurposeRootProps {
  children: ReactNode
  margin?: string
}

export function PurposeRoot({ children, margin }: PurposeRootProps) {
  return (
    <Container
      as={motion.h2}
      initial={{ opacity: 0, x: '-40%' }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      margin={margin}
    >
      {children}
    </Container>
  )
}
