import { memo, useCallback, useEffect, useRef } from 'react'
import styles from '~/styles/components/header/bottom-header/sidebar/index.module.css'
import { theme } from '~/tailwind.config'
import Menu, { MenuMethods } from './Menu'
import { ListProps } from './Menu/List'
import MenuIcon, { MenuIconMethods } from './MenuIcon'

export interface SidebarProps {
   menuChildren: ListProps[]
}

function Sidebar({ menuChildren }: SidebarProps) {
   const menuIconMethodsRef = useRef<MenuIconMethods>(null)
   const menuMethodsRef = useRef<MenuMethods>(null)

   const handleMouseDownOutside = useCallback(() => {
      const menuMethods = menuMethodsRef.current
      menuMethods?.close()
   }, [menuMethodsRef])

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
   }, [menuIconMethodsRef, menuMethodsRef])

   return (
      <nav className={styles.navigation}>
         <MenuIcon
            handleMouseDown={handleMouseDownOutside}
            ref={menuIconMethodsRef}
         />
         <Menu ref={menuMethodsRef}>{menuChildren}</Menu>
      </nav>
   )
}

const MemoOfSidebar = memo(Sidebar)

export default MemoOfSidebar
