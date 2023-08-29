import { motion } from 'framer-motion'
import {
  Container,
  ContentContainer,
  CrewInfoContainer,
  Image,
  SwiperContainer,
} from './style'
import { Purpose } from '../../components/Purpose'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import douglasImg from '../../assets/crew/image-douglas-hurley.png'
import markImg from '../../assets/crew/image-mark-shuttleworth.png'
import victorImg from '../../assets/crew/image-victor-glover.png'
import anoushehImg from '../../assets/crew/image-anousheh-ansari.png'

const images = [douglasImg, markImg, victorImg, anoushehImg]
interface CrewProps {
  name: string
  role: string
  bio: string
}

export default function Crew() {
  const [member, setMember] = useState(0)

  const { data } = useQuery<CrewProps[]>({
    queryKey: ['crew-data'],
    queryFn: async () => {
      const { data } = await axios.get('data.json')
      return data.crew
    },
  })

  return (
    <Container>
      <ContentContainer>
        <Purpose.Root margin="0px">
          <Purpose.Number number={'02'} />
          <Purpose.Text text={'Meet your crew'} />
        </Purpose.Root>

        <CrewInfoContainer>
          <SwiperContainer>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Pagination]}
              pagination={{ clickable: true }}
              onSlideChange={({ activeIndex }) => setMember(activeIndex)}
            >
              {data?.map((person, index) => (
                <SwiperSlide className="swiperSlide" key={index}>
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                      display: 'inline-block',
                    }}
                    animate={{ opacity: 0.5042, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {person.role}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {person.name}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {person.bio}
                  </motion.p>
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperContainer>
          {images.map((image, index) => {
            if (index === member) {
              return (
                <Image
                  key={index}
                  as={motion.img}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src={image}
                  alt="member image"
                />
              )
            }
            return null
          })}
        </CrewInfoContainer>
      </ContentContainer>
    </Container>
  )
}
