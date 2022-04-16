/* eslint-disable @next/next/no-img-element */
import Image, { ImageProps } from 'next/image'
import { forwardRef, memo, Ref } from 'react'

// Import Swiper React components
import {
   Swiper as SwiperReact,
   SwiperSlide as SwiperSlideReact,
} from 'swiper/react'

// import required modules
import {
   Autoplay,
   FreeMode,
   Keyboard,
   Mousewheel,
   Navigation,
   Pagination,
} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface CarouselWithAutoSwipeProps {
   className?: string
   slideChildren: string[] | ImageProps[]
}

function CarouselWithAutoSwipe(
   { className, slideChildren }: CarouselWithAutoSwipeProps,
   ref: Ref<HTMLDivElement>
) {
   return (
      <div ref={ref} className={className}>
         {/* Slides */}
         <SwiperReact
            style={{
               // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-ignore
               // eslint-disable-next-line no-param-reassign
               '--swiper-navigation-color': 'rgba(255,255,255,0.5)',
               '--swiper-pagination-color': 'rgba(255,255,255,0.5)',
            }}
            grabCursor={true}
            spaceBetween={10}
            navigation={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            loop={true}
            mousewheel={{ releaseOnEdges: true }}
            keyboard={{ enabled: true }}
            modules={[
               Autoplay,
               Navigation,
               Pagination,
               FreeMode,
               Keyboard,
               Mousewheel,
            ]}
         >
            {slideChildren.map((child, index) => (
               <SwiperSlideReact key={index}>
                  {typeof child === 'string' ? (
                     child
                  ) : (
                     /* eslint-disable-next-line jsx-a11y/alt-text */
                     <Image {...child} />
                  )}
               </SwiperSlideReact>
            ))}
         </SwiperReact>
      </div>
   )
}

const ForwardRefToCarouselWithAutoSwipe = forwardRef(CarouselWithAutoSwipe)

const MemoOfCarouselWithAutoSwipe = memo(ForwardRefToCarouselWithAutoSwipe)

export default MemoOfCarouselWithAutoSwipe
