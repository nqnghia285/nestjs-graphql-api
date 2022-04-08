import clsx from 'clsx'
import { memo, useEffect, useRef } from 'react'
import useLocalStorage from 'use-local-storage'
import Link from '~/components/Link'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/components/header/top-header/user/user-icon.module.css'
import { generateErrorMessage, logout } from '~/utilities'

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
      logout()
         .then((res) => (res.isSuccess ? setProfile(null) : null))
         .catch((errors) => console.log(generateErrorMessage(errors)))
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
               <Link path='/user/profile'>Profile</Link>
            </li>
            <li onClick={handleLogout}>
               <Link path='/login'>Log out</Link>
            </li>
         </ul>
      </>
   )
}

const MemoOfUserIcon = memo(UserIcon)

export default MemoOfUserIcon
