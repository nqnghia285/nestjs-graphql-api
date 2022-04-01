import clsx from 'clsx'
import Link from 'next/link'
import { memo, useEffect, useRef } from 'react'
import useLocalStorage from 'use-local-storage'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/components/user/user-icon.module.css'

export interface UserIconProps {
   icon: string
}

function UserIcon({ icon }: UserIconProps) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )
   const userIconRef = useRef<HTMLElement>(null)
   const userMenuRef = useRef<HTMLUListElement>(null)

   function handleToggleUserIcon() {
      const userMenu = userMenuRef.current
      userMenu?.classList.toggle(styles['show-user-menu'])
   }

   function handleLogout() {
      setProfile(null)
   }

   useEffect(() => {
      const userIcon = userIconRef.current
      const userMenu = userMenuRef.current

      function handleMouseDownOutside(ev: Event) {
         const element = ev.target as Element

         const hidden = element !== userIcon && !userMenu?.contains(element)

         if (hidden) {
            userMenu?.classList.remove(styles['show-user-menu'])
         }
      }

      document.addEventListener('mousedown', handleMouseDownOutside, true)

      return () => {
         document.removeEventListener('mousedown', handleMouseDownOutside)
      }
   }, [userIconRef, userMenuRef])

   return (
      <>
         <i
            ref={userIconRef}
            className={clsx(icon, styles['user-icon'])}
            onClick={handleToggleUserIcon}
         ></i>
         <ul ref={userMenuRef} className={styles['user-menu']}>
            <li>
               <Link href={`/user/profile`} passHref>
                  <a>Profile</a>
               </Link>
            </li>
            <li onClick={handleLogout}>
               <Link href={`/login`} passHref>
                  <a>Log out</a>
               </Link>
            </li>
         </ul>
      </>
   )
}

const MemoOfUserIcon = memo(UserIcon)

export default MemoOfUserIcon