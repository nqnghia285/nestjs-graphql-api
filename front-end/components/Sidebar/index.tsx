import clsx from 'clsx'
import {
   forwardRef,
   memo,
   Ref,
   useCallback,
   useEffect,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/Sidebar/index.module.css'
import { theme } from '~/tailwind.config'
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
   const menuIconMethodsRef = useRef<MenuIconMethods | null>(null)
   const menuMethodsRef = useRef<MenuMethods | null>(null)

   const handleMouseDownOutside = useCallback(() => {
      const menuMethods = menuMethodsRef.current
      menuMethods?.close()
   }, [menuMethodsRef])

   useImperativeHandle(
      ref,
      () => ({
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
      const menuIcon = menuIconMethodsRef.current
      const menu = menuMethodsRef.current

      if (menuIcon && menu) {
         if (screen.width < Number(theme.screens.laptop.replace('px', ''))) {
            menuIcon.setOnClick(() => {
               menu.toggle()
            })
         } else {
            menuIcon.setOnMouseLeave(() => {
               menu.close()
            })

            menuIcon.setOnMouseOver(() => {
               menu.open()
            })
         }
      }
   }, [sidebarRef, menuIconMethodsRef, menuMethodsRef])

   return (
      <nav ref={sidebarRef} className={clsx(styles.navigation, styles.show)}>
         <MenuIcon
            handleMouseDown={handleMouseDownOutside}
            ref={menuIconMethodsRef}
         />
         <Menu ref={menuMethodsRef}>{menuChildren}</Menu>
      </nav>
   )
}

const ForwardRefToSidebar = forwardRef(Sidebar)

const MemoOfSidebar = memo(ForwardRefToSidebar)

export default MemoOfSidebar
