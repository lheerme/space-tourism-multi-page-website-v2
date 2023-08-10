import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContentContainer,
  ExploreButton,
  LeftContainer,
  RightContainer,
} from './style'
import { motion } from 'framer-motion'

export default function Home() {
  const navigate = useNavigate()

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
      <ContentContainer>
        <LeftContainer>
          <motion.span
            initial={{ opacity: 0, x: '-30%', display: 'block' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, x: '-60%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            SPACE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: '-90%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1 }}
          >
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </motion.p>
        </LeftContainer>
        <RightContainer>
          <ExploreButton
            as={motion.button}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            onClick={() => navigate('/destination')}
          >
            EXPLORE
          </ExploreButton>
        </RightContainer>
      </ContentContainer>
    </Container>
  )
}
