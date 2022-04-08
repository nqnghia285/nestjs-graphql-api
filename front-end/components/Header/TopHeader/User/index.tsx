import { memo, useEffect, useLayoutEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import Link from '~/components/Link'
import UserIcon from '~/components/Header/TopHeader/User/UserIcon'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/components/header/top-header/user/index.module.css'

export interface UserProps {
   icon: string
}

export interface UserMethods {
   readonly hidden: () => void
   readonly show: () => void
   readonly toggle: () => void
}

function User({ icon }: UserProps) {
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )

   const [children, setChildren] = useState<JSX.Element | null>(null)

   /**
    * Since this code is run in both CS and SS
    */
   const func = typeof window === 'undefined' ? useEffect : useLayoutEffect

   func(() => {
      setChildren(() =>
         profile ? <UserIcon icon={icon} /> : <Link path='/login'>Log in</Link>
      )
   }, [profile, icon])

   return <div className={styles.user}>{children}</div>
}

const MemoOfUser = memo(User)

export default MemoOfUser
