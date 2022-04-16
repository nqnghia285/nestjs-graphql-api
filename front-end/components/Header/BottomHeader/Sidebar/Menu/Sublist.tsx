import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/header/bottom-header/sidebar/sublist.module.css'

export interface SublistProps {
   active?: boolean
   path: string
   icon: string
   children: string
}

export interface SublistMethods {
   readonly active: () => void
   readonly inactive: () => void
   readonly setOnClick: (callback: () => void) => void
}

function Sublist(
   { active, path, icon, children }: SublistProps,
   ref: Ref<SublistMethods>
) {
   const sublistRef = useRef<HTMLLIElement>(null)

   useImperativeHandle(
      ref,
      () => ({
         active() {
            const sublist = sublistRef.current
            if (sublist) {
               sublist.classList.add(styles.active)
            }
         },
         inactive() {
            const sublist = sublistRef.current
            if (sublist) {
               sublist.classList.remove(styles.active)
            }
         },
         setOnClick(callback) {
            const sublist = sublistRef.current
            if (sublist) {
               sublist.onclick = callback
            }
         },
      }),
      [sublistRef]
   )

   return (
      <li
         ref={sublistRef}
         className={clsx(styles.sublist, { [styles.active]: active })}
      >
         <Link href={path} passHref>
            <a>
               <span className={styles.subicon}>
                  <i className={icon}></i>
               </span>
               <span className={styles.subtext}>{children}</span>
            </a>
         </Link>
      </li>
   )
}

const ForwardRefToSublist = forwardRef(Sublist)

export default ForwardRefToSublist
