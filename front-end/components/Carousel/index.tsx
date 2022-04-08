import { forwardRef, memo } from 'react'

function Carousel() {
   return (
      <div
         id='carouselExampleCaptions'
         className='carousel slide relative'
         data-bs-ride='carousel'
      ></div>
   )
}

const ForwardRefToCarousel = forwardRef(Carousel)

const MemoOfCarousel = memo(ForwardRefToCarousel)

export default MemoOfCarousel
