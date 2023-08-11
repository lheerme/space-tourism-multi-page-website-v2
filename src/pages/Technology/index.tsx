import { motion } from 'framer-motion'
import { Container } from './style'

export default function Technology() {
  return (
    <Container
      as={motion.main}
      initial={{ backgroundSize: '150%' }}
      animate={{ backgroundSize: '100%' }}
      transition={{
        duration: 5,
        ease: 'easeOut',
      }}
    >
      <h1>technology</h1>
    </Container>
  )
}
