import { motion } from 'framer-motion'
import {
  Container,
  ContentContainer,
  ImageContainer,
  SelectorBtnContainer,
  TechnologyInfoContainer,
  TechnologyInfoData,
  TechnologyInfoDataContainer,
  TechnologyInfoDataSelector,
} from './style'
import { Purpose } from '../../components/Purpose'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import launch from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import launchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import capsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'

const images = [
  {
    portrait: launch,
    landscape: launchLandscape,
  },
  {
    portrait: spaceport,
    landscape: spaceportLandscape,
  },
  {
    portrait: capsule,
    landscape: capsuleLandscape,
  },
]

interface TechnolgyProps {
  name: string
  description: string
}

export default function Technology() {
  const [tech, setTech] = useState(0)

  const { data } = useQuery<TechnolgyProps[]>({
    queryKey: ['technology-data'],
    queryFn: async () => {
      const { data } = await axios.get('data.json')
      return data.technology
    },
  })

  return (
    <Container>
      <ContentContainer>
        <Purpose.Root margin="0px">
          <Purpose.Number number={'03'} />
          <Purpose.Text text={'Space Launch 101'} />
        </Purpose.Root>

        <TechnologyInfoContainer>
          <TechnologyInfoDataContainer>
            <TechnologyInfoDataSelector
              as={motion.ul}
              initial={{ opacity: 0, x: '-40%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SelectorBtnContainer selected={tech === 0}>
                <button onClick={() => setTech(0)}>1</button>
              </SelectorBtnContainer>

              <SelectorBtnContainer selected={tech === 1}>
                <button onClick={() => setTech(1)}>2</button>
              </SelectorBtnContainer>

              <SelectorBtnContainer selected={tech === 2}>
                <button onClick={() => setTech(2)}>3</button>
              </SelectorBtnContainer>
            </TechnologyInfoDataSelector>

            <TechnologyInfoData>
              <motion.span
                initial={{ opacity: 0, x: '-40%' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                The Terminology…
              </motion.span>
              {data?.map((technology, index) => {
                if (index === tech) {
                  return (
                    <React.Fragment key={index}>
                      <motion.h1
                        initial={{ opacity: 0, y: '40%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {technology.name}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: '40%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        {technology.description}
                      </motion.p>
                    </React.Fragment>
                  )
                }

                return null
              })}
            </TechnologyInfoData>
          </TechnologyInfoDataContainer>

          <ImageContainer>
            {images.map((img, index) => {
              if (index === tech) {
                return (
                  <React.Fragment key={index}>
                    <source srcSet={img.landscape} media="(max-width: 920px)" />
                    <motion.img
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={img.portrait}
                      alt=""
                    />
                  </React.Fragment>
                )
              }

              return null
            })}
          </ImageContainer>
        </TechnologyInfoContainer>
      </ContentContainer>
    </Container>
  )
}
