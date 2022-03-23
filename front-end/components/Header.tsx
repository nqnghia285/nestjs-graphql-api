import clsx from 'clsx'
import {
   forwardRef,
   memo,
   Ref,
   useImperativeHandle,
   useMemo,
   useRef,
} from 'react'
import styles from '~/styles/components/header.module.css'
import Logo, { LogoMethods } from './Logo'
import Search, { SearchMethods } from './Search'
import Sidebar, { SidebarMethods } from './Sidebar'
import { ListProps } from './Sidebar/Menu/List'
import User, { UserMethods } from './User'

export interface HeaderMethods {
   readonly hidden: () => void
   readonly show: () => void
   readonly toggle: () => void
}

function Header(_props: object, ref: Ref<HeaderMethods>) {
   const brandName = useMemo(() => 'Atom', [])
   const menuChildren: ListProps[] = useMemo(
      () => [
         {
            active: true,
            icon: 'fa-solid fa-house-chimney',
            path: '#',
            children: 'Home',
         },
         {
            icon: 'fa-solid fa-cart-flatbed',
            path: '#',
            children: {
               content: 'Products',
               submenuChildren: [
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '1',
                     children: 'Asus',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '2',
                     children: 'Acer',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '3',
                     children: 'Hp',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '4',
                     children: 'Lenovo',
                  },
                  {
                     icon: 'fa-brands fa-apple',
                     path: '#',
                     key: '5',
                     children: 'Macbook',
                  },
               ],
            },
         },
         {
            icon: 'fa-solid fa-address-book',
            path: '#',
            children: 'Contact',
         },
         {
            icon: 'fa-solid fa-address-card',
            path: '#',
            children: 'About',
         },
      ],
      []
   )

   const headerRef = useRef<HTMLElement | null>(null)
   const sidebarMethodsRef = useRef<SidebarMethods | null>(null)
   const logoMethodsRef = useRef<LogoMethods | null>(null)
   const searchMethodsRef = useRef<SearchMethods | null>(null)
   const userMethodsRef = useRef<UserMethods | null>(null)

   useImperativeHandle(
      ref,
      () => ({
         hidden() {
            const header = headerRef.current
            header?.classList.remove(styles.show)
         },
         show() {
            const header = headerRef.current
            header?.classList.add(styles.show)
         },
         toggle() {
            const header = headerRef.current
            header?.classList.toggle(styles.show)
         },
      }),
      [headerRef]
   )

   return (
      <header ref={headerRef} className={clsx(styles.header, styles.show)}>
         <Sidebar ref={sidebarMethodsRef} menuChildren={menuChildren} />
         <Logo
            ref={logoMethodsRef}
            icon={'fa-solid fa-atom'}
            brandName={brandName}
         />
         <Search ref={searchMethodsRef} />
         <User ref={userMethodsRef} icon={'fa-solid fa-user'} logined={true} />
      </header>
   )
}

const ForwardRefToHeader = forwardRef(Header)

const MemoOfHeader = memo(ForwardRefToHeader)

export default MemoOfHeader
