import { motion } from 'framer-motion'
import {
  Container,
  ContentContainer,
  DestinationContainer,
  DestinationInfo,
  DestinationInfoData,
  DestinationNumbers,
  DestinationSelector,
  DestinationSelectorItem,
  Image,
} from './style'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { Purpose } from '../../components/Purpose'
import moonImg from '../../assets/destination/image-moon.png'
import marsImg from '../../assets/destination/image-mars.png'
import europaImg from '../../assets/destination/image-europa.png'
import titanImg from '../../assets/destination/image-titan.png'

const images = [moonImg, marsImg, europaImg, titanImg]
interface DestinationsProps {
  description: string
  distance: string
  name: string
  travel: string
}

export default function Destination() {
  const [destination, setDestination] = useState(0)

  const { data } = useQuery<DestinationsProps[]>({
    queryKey: ['destination-data'],
    queryFn: async () => {
      const { data } = await axios.get('data.json')
      return data.destinations
    },
  })

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
        <Purpose.Root>
          <Purpose.Number number={'01'} />
          <Purpose.Text text={'Pick your destination'} />
        </Purpose.Root>

        <DestinationContainer>
          {images.map((image, index) => {
            if (index === destination) {
              return (
                <Image
                  key={index}
                  as={motion.img}
                  initial={{ opacity: 0, scale: 0.5, rotate: 360 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  src={image}
                  alt="planet image"
                />
              )
            }

            return null
          })}

          <DestinationInfo>
            <DestinationSelector
              as={motion.ul}
              initial={{ opacity: 0, x: '40%' }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DestinationSelectorItem
                selected={destination === 0}
                onClick={() => setDestination(0)}
              >
                moon
              </DestinationSelectorItem>
              <DestinationSelectorItem
                selected={destination === 1}
                onClick={() => setDestination(1)}
              >
                mars
              </DestinationSelectorItem>
              <DestinationSelectorItem
                selected={destination === 2}
                onClick={() => setDestination(2)}
              >
                europa
              </DestinationSelectorItem>
              <DestinationSelectorItem
                selected={destination === 3}
                onClick={() => setDestination(3)}
              >
                titan
              </DestinationSelectorItem>
            </DestinationSelector>

            {data?.map((dest, index) => {
              if (index === destination) {
                return (
                  <DestinationInfoData
                    key={dest.name}
                    as={motion.div}
                    initial={{ opacity: 0, x: '10%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1>{dest.name}</h1>
                    <p>{dest.description}</p>
                    <DestinationNumbers>
                      <div>
                        <span>AVG. DISTANCE</span>
                        <p>{dest.distance}</p>
                      </div>
                      <div>
                        <span>Est. travel time</span>
                        <p>{dest.travel}</p>
                      </div>
                    </DestinationNumbers>
                  </DestinationInfoData>
                )
              }

              return null
            })}
          </DestinationInfo>
        </DestinationContainer>
      </ContentContainer>
    </Container>
  )
}
