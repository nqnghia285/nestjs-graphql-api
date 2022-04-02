import clsx from 'clsx'
import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/search.module.css'
import Input from './Input'

export interface SearchMethods {
   readonly setOnChange: (callback: (event: Event) => any) => void
   readonly setOnKeyDown: (callback: (event: KeyboardEvent) => any) => any
   readonly setOnSubmit: (callback: (event: SubmitEvent) => any) => void
   readonly value: () => string | undefined
}

function Search(_props: object, ref: Ref<SearchMethods>) {
   const searchFormRef = useRef<HTMLFormElement>(null)
   const searchTextRef = useRef<HTMLInputElement>(null)

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
         setOnSubmit(callback) {
            const searchForm = searchFormRef.current
            if (searchForm) {
               searchForm.onsubmit = callback
            }
         },
         value() {
            const searchText = searchTextRef.current
            return searchText?.value
         },
      }),
      [searchFormRef, searchTextRef]
   )

   return (
      <>
         <form ref={searchFormRef} role='search' className={styles.search}>
            <div className={styles['search-text']}>
               <Input
                  ref={searchTextRef}
                  type='search'
                  color='info'
                  fontSize='sm'
                  size='full'
                  padding='md'
                  placeholder='Laptop model...'
                  aria-autocomplete='both'
               />
            </div>

            <button type={'submit'}>
               <i
                  className={clsx(
                     styles['search-icon'],
                     'fa-solid',
                     'fa-magnifying-glass'
                  )}
               ></i>
            </button>
         </form>
      </>
   )
}

const ForwardRefToSearch = forwardRef(Search)

const MemoOfSearch = memo(ForwardRefToSearch)

export default MemoOfSearch
