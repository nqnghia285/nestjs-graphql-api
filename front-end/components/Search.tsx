import clsx from 'clsx'
import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/search.module.css'

export interface SearchMethods {
   readonly setOnChange: (callback: (event: Event) => void) => void
   readonly setOnKeyDown: (callback: (event: KeyboardEvent) => void) => any
   readonly setOnClick: (callback: (event: Event) => void) => void
   readonly value: () => string | undefined
}

function Search(_props: object, ref: Ref<SearchMethods>) {
   const searchTextRef = useRef<HTMLInputElement | null>(null)
   const searchIconRef = useRef<HTMLElement | null>(null)

   useImperativeHandle(
      ref,
      () => ({
         setOnChange(calllback) {
            const searchText = searchTextRef.current
            if (searchText) {
               searchText.onchange = calllback
            }
         },
         setOnKeyDown(callback) {
            const searchText = searchTextRef.current
            if (searchText) {
               searchText.onkeydown = callback
            }
         },
         setOnClick(callback) {
            const searchIcon = searchIconRef.current
            if (searchIcon) {
               searchIcon.onclick = callback
            }
         },
         value() {
            const searchText = searchTextRef.current
            return searchText?.value
         },
      }),
      [searchTextRef]
   )

   return (
      <>
         <form role='search' className={styles.search}>
            <input
               ref={searchTextRef}
               type='search'
               spellCheck={false}
               placeholder='Laptop model...'
               aria-autocomplete='both'
               className={styles['search-text']}
            />
            <span>
               <i
                  ref={searchIconRef}
                  className={clsx(
                     styles['search-icon'],
                     'fa-solid',
                     'fa-magnifying-glass'
                  )}
               ></i>
            </span>
         </form>
      </>
   )
}

const ForwardRefToSearch = forwardRef(Search)

const MemoOfSearch = memo(ForwardRefToSearch)

export default MemoOfSearch
