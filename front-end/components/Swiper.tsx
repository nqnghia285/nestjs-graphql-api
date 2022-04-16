import Image, { ImageProps } from 'next/image'
import { memo } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export interface SwiperProps {
   className?: string
   slideChildren: string[] | ImageProps[]
}

function Swiper({ className, slideChildren }: SwiperProps) {
   return (
      <SwiperReact
         className={className}
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         spaceBetween={50}
         slidesPerView={3}
         navigation
         pagination={{ clickable: true }}
         scrollbar={{ draggable: true }}
         autoplay={{ delay: 300 }}
         loop
         freeMode
         loopedSlides={3}
         mousewheel={{ releaseOnEdges: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
         {slideChildren.map((child, index) => (
            <SwiperSlide key={index}>
               {({ isActive }) =>
                  typeof child === 'string' ? (
                     child
                  ) : (
                     <Image alt={child.alt} {...child} />
                  )
               }
            </SwiperSlide>
         ))}
      </SwiperReact>
   )
}

const MemoOfSwiper = memo(Swiper)

export default MemoOfSwiper
