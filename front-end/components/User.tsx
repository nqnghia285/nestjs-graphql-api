import Link from 'next/link'
import {
   forwardRef,
   memo,
   Ref,
   useEffect,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/user.module.css'

export interface UserProps {
   icon: string
   logined: boolean
}

export interface UserMethods {
   readonly hidden: () => void
   readonly show: () => void
   readonly toggle: () => void
}

function User({ icon, logined }: UserProps, ref: Ref<UserMethods>) {
   const userRef = useRef<HTMLDivElement | null>(null)
   const userIconRef = useRef<HTMLElement | null>(null)
   const userMenuRef = useRef<HTMLUListElement | null>(null)

   useImperativeHandle(
      ref,
      () => ({
         hidden() {
            const userMenu = userMenuRef.current
            if (userMenu) {
               userMenu.classList.remove(styles['show-user-menu'])
            }
         },
         show() {
            const userMenu = userMenuRef.current
            if (userMenu) {
               userMenu.classList.add(styles['show-user-menu'])
            }
         },
         toggle() {
            const userMenu = userMenuRef.current
            if (userMenu) {
               userMenu.classList.toggle(styles['show-user-menu'])
            }
         },
      }),
      [userMenuRef]
   )

   useEffect(() => {
      const userIcon = userIconRef.current
      const userMenu = userMenuRef.current

      if (userIcon && userMenu) {
         userIcon.onclick = () =>
            userMenu.classList.toggle(styles['show-user-menu'])
      }

      function handleMouseDownOutside(ev: Event) {
         const element = ev.target as Element

         const hidden = element !== userIcon && !userMenu?.contains(element)

         if (hidden) {
            userMenu?.classList.remove(styles['show-user-menu'])
         }
      }

      document.body.addEventListener('mousedown', handleMouseDownOutside, true)

      return () => {
         document.body.removeEventListener('mousedown', handleMouseDownOutside)
      }
   }, [userRef, userIconRef, userMenuRef])

   return (
      <div ref={userRef} className={styles.user}>
         {logined ? (
            <>
               <i ref={userIconRef} className={icon}></i>
               <ul ref={userMenuRef} className={styles['user-menu']}>
                  <li>
                     <Link href={`/user/profile`} passHref>
                        <a>Profile</a>
                     </Link>
                  </li>
                  <li>
                     <Link href={`/`} passHref>
                        <a>Log out</a>
                     </Link>
                  </li>
               </ul>
            </>
         ) : (
            <>
               <Link href={`/user/login`} passHref>
                  <a>Log in</a>
               </Link>
            </>
         )}
      </div>
   )
}

const ForwardRefToUser = forwardRef(User)

const MemoOfUser = memo(ForwardRefToUser)

export default MemoOfUser
