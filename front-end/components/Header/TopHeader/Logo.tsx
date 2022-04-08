import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/header/top-header/logo.module.css'

export interface LogoProps {
   icon: string
   brandName: string
}

export interface LogoMethods {
   readonly setOnClick: (callback: (event: MouseEvent) => any) => void
}

function Logo({ icon, brandName }: LogoProps, ref: Ref<LogoMethods>) {
   const logoRef = useRef<HTMLAnchorElement>(null)

   useImperativeHandle(
      ref,
      () => ({
         setOnClick(callback) {
            const logo = logoRef.current
            if (logo) {
               logo.onclick = callback
            }
         },
      }),
      [logoRef]
   )

   return (
      <div className={styles.wrap}>
         <Link href={`/`} passHref>
            <a ref={logoRef} className={styles.logo}>
               <i className={clsx(styles.icon, icon)}></i>
               <span className={styles['brand-name']}>{brandName}</span>
            </a>
         </Link>
      </div>
   )
}

const ForwardRefToLogo = forwardRef(Logo)

const MemoOfLogo = memo(ForwardRefToLogo)

export default MemoOfLogo
