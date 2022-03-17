import clsx from 'clsx'
import {
   forwardRef,
   memo,
   Ref,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from 'react'
import styles from '~/styles/components/Sidebar/index.module.css'
import Menu, { MenuMethods } from './Menu'
import { ListProps } from './Menu/List'
import MenuIcon, { MenuIconMethods } from './MenuIcon'

export interface SidebarProps {
   menuChildren: ListProps[]
}

export interface SidebarMethods {
   hidden: () => void
   show: () => void
   toggle: () => void
}

function Sidebar({ menuChildren }: SidebarProps, ref: Ref<SidebarMethods>) {
   const sidebarRef = useRef<HTMLElement | null>(null)
   const menuIconRef = useRef<MenuIconMethods | null>(null)
   const menuRef = useRef<MenuMethods | null>(null)

   const [count, setCount] = useState(0)

   useImperativeHandle(
      ref,
      (): SidebarMethods => ({
         hidden() {
            const sidebar = sidebarRef.current
            if (sidebar) {
               sidebar.classList.remove(styles.show)
            }
         },
         show() {
            const sidebar = sidebarRef.current
            if (sidebar) {
               sidebar.classList.add(styles.show)
            }
         },
         toggle() {
            const sidebar = sidebarRef.current
            if (sidebar) {
               sidebar.classList.toggle(styles.show)
            }
         },
      }),
      [sidebarRef]
   )

   useEffect(() => {
      if (sidebarRef.current && menuIconRef.current && menuRef.current) {
         // const nav = navRef.current
         const menuIcon = menuIconRef.current
         const menu = menuRef.current

         menuIcon.setOnClick(() => {
            menu.toggle()
         })

         menuIcon.setOnMouseLeave(() => {
            menu.close()
         })

         menuIcon.setOnMouseOver(() => {
            menu.open()
         })

         console.log('menuIcon', menuIcon)
         console.log('menu', menu)
      }
   }, [menuIconRef, menuRef])

   return (
      <nav ref={sidebarRef} className={clsx(styles.navigation, styles.show)}>
         <MenuIcon ref={menuIconRef} />
         <Menu ref={menuRef}>{menuChildren}</Menu>
         <h1>{count}</h1>
         <button
            className='fixed top-60 left-60 w-40 h-8 bg-blue-600 active:bg-red-500'
            onClick={() => setCount((prevCount) => prevCount + 1)}
         >
            Increase
         </button>
      </nav>
   )
}

const ForwardRefToSidebar = forwardRef(Sidebar)

const MemoOfSidebar = memo(ForwardRefToSidebar)

export default MemoOfSidebar
