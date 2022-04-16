/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'
import { forwardRef, memo, Ref, useState } from 'react'

// Import Swiper React components
import {
   Swiper as SwiperReact,
   SwiperSlide as SwiperSlideReact,
} from 'swiper/react'

// import required modules
import Swiper, {
   FreeMode,
   Keyboard,
   Mousewheel,
   Navigation,
   Thumbs,
} from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export interface CarouselWithThumbsControllerProps {
   className?: string
   slideChildren: string[] | ImageProps[]
}

function CarouselWithThumbsController(
   { className, slideChildren }: CarouselWithThumbsControllerProps,
   ref: Ref<HTMLDivElement>
) {
   const [thumbsSwiper, setThumbsSwiper] = useState<Swiper | null>(null)

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
            mousewheel={{ releaseOnEdges: true }}
            keyboard={{ enabled: true }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Navigation, FreeMode, Thumbs, Keyboard, Mousewheel]}
            onSlideChange={(swiper) => {
               thumbsSwiper?.slides.forEach((thumb) => {
                  thumb
                     .getElementsByTagName('span')
                     ?.item(0)
                     ?.classList?.remove('hidden')

                  thumb
                     .getElementsByTagName('span')
                     ?.item(0)
                     ?.classList?.add('block')
               })

               thumbsSwiper?.slides[swiper.activeIndex]
                  .getElementsByTagName('span')
                  ?.item(0)
                  ?.classList?.add('hidden')

               thumbsSwiper?.slides[swiper.activeIndex]
                  .getElementsByTagName('span')
                  ?.item(0)
                  ?.classList?.remove('block')
            }}
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

         {/* White space */}
         <div className='w-full h-3'></div>

         {/* Thumbs pagination */}
         <SwiperReact
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs, Keyboard, Mousewheel]}
         >
            {slideChildren.map((child, index) => (
               <SwiperSlideReact key={index}>
                  {typeof child === 'string' ? (
                     child
                  ) : (
                     <div className='relative'>
                        <span
                           className={clsx(
                              'absolute top-0 left-0 z-50 w-full h-full bg-slate-700 opacity-40 block',
                              { hidden: index === 0 }
                           )}
                        ></span>
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <Image {...child} />
                     </div>
                  )}
               </SwiperSlideReact>
            ))}
         </SwiperReact>
      </div>
   )
}

const ForwardRefToCarouselWithThumbsController = forwardRef(
   CarouselWithThumbsController
)

const MemoOfCarouselWithThumbsController = memo(
   ForwardRefToCarouselWithThumbsController
)

export default MemoOfCarouselWithThumbsController
