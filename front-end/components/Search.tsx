import { Ref, useRef } from 'react'
import styles from '~/styles/components/search.module.css'

function Search(_props: object, ref: Ref<unknown>) {
   const searchRef = useRef<HTMLDivElement | null>(null)

   return (
      <>
         <div ref={searchRef} className={styles.search}>
            <i className='fa-solid fa-magnifying-glass'></i>
         </div>
      </>
   )
}
