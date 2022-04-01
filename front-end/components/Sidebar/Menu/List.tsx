import clsx from 'clsx'
import Link from 'next/link'
import {
   forwardRef,
   memo,
   Ref,
   useEffect,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/sidebar/list.module.css'
import { theme } from '~/tailwind.config'
import { SublistProps } from './Sublist'
import Submenu, { SubmenuMethods } from './Submenu'

export interface ListProps {
   active?: boolean
   path: string
   icon: string
   children:
      | string
      | {
           content: string
           submenuChildren: (SublistProps & { key?: string })[]
        }
}

export interface ListMethods {
   readonly active: () => void
   readonly inactive: () => void
   readonly toggle: () => void
   readonly openSubmenu: () => void
   readonly closeSubmenu: () => void
   readonly toggleSubmenu: () => void
   readonly inactiveSublistAll: () => void
   readonly setOnClick: (callback: () => void) => void
}

function List(
   { active, path, icon, children }: ListProps,
   ref: Ref<ListMethods>
) {
   const listRef = useRef<HTMLLIElement>(null)
   const submenuMethodsRef = useRef<SubmenuMethods>(null)

   useImperativeHandle(
      ref,
      () => ({
         active() {
            const list = listRef.current
            if (list) {
               list.classList.add(styles.active)
            }

            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.open()
            }
         },
         inactive() {
            const list = listRef.current
            if (list) {
               list.classList.remove(styles.active)
            }

            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.inactiveSublistAll()
               submenuMethods.close()
            }
         },
         toggle() {
            const list = listRef.current
            if (list) {
               list.classList.toggle(styles.active)
            }
         },
         closeSubmenu() {
            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.close()
            }
         },
         openSubmenu() {
            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.open()
            }
         },
         toggleSubmenu() {
            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.toggle()
            }
         },
         inactiveSublistAll() {
            const submenuMethods = submenuMethodsRef.current
            if (submenuMethods) {
               submenuMethods.inactiveSublistAll()
            }
         },
         setOnClick(callback) {
            const list = listRef.current
            if (list) {
               list.onclick = callback
            }
         },
      }),
      []
   )

   useEffect(() => {
      const list = listRef.current
      if (list) {
         list.onmouseleave = () => {
            if (
               screen.width >= Number(theme.screens.laptop.replace('px', ''))
            ) {
               const submenuMethods = submenuMethodsRef.current
               if (submenuMethods) {
                  submenuMethods.close()
               }
            }
         }

         list.onmouseover = () => {
            if (
               screen.width >= Number(theme.screens.laptop.replace('px', ''))
            ) {
               const submenuMethods = submenuMethodsRef.current
               if (submenuMethods) {
                  submenuMethods.open()
               }
            }
         }
      }
   }, [listRef, submenuMethodsRef])

   return (
      <li
         ref={listRef}
         className={clsx(styles.list, { [styles.active]: active })}
      >
         <Link href={path} passHref>
            <a>
               <span className={styles.icon}>
                  <i className={icon}></i>
               </span>
               <span className={styles.text}>
                  {typeof children === 'string' ? children : children.content}
               </span>
            </a>
         </Link>

         {typeof children === 'object' ? (
            <Submenu ref={submenuMethodsRef}>
               {children.submenuChildren}
            </Submenu>
         ) : (
            false
         )}
      </li>
   )
}

const ForwardRefToList = forwardRef(List)

const MemoOfList = memo(ForwardRefToList)

export default MemoOfList
