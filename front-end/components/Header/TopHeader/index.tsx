import { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/header/top-header/index.module.css'
import Logo, { LogoMethods } from './Logo'
import Search, { SearchMethods } from './Search'
import User from './User'

export interface TopHeaderProps {
   brandName: string
}

export interface TopHeaderMethods {
   readonly logoMethods: LogoMethods | null
   readonly searchMethods: SearchMethods | null
}

function TopHeader({ brandName }: TopHeaderProps, ref: Ref<TopHeaderMethods>) {
   const logoMethodsRef = useRef<LogoMethods>(null)
   const searchMethodsRef = useRef<SearchMethods>(null)

   useImperativeHandle(
      ref,
      () => ({
         logoMethods: logoMethodsRef.current,
         searchMethods: searchMethodsRef.current,
      }),
      [logoMethodsRef, searchMethodsRef]
   )

   return (
      <div className={styles['top-header']}>
         <Logo
            ref={logoMethodsRef}
            icon={'fa-solid fa-atom'}
            brandName={brandName}
         />
         <Search ref={searchMethodsRef} />
         <User icon={'fa-solid fa-user'} />
      </div>
   )
}

const ForwardRefToTopHeader = forwardRef(TopHeader)

export default ForwardRefToTopHeader
