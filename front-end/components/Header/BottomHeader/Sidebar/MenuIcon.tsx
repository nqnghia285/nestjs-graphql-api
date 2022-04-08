import {
   forwardRef,
   memo,
   Ref,
   useEffect,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/header/bottom-header/sidebar/menu-icon.module.css'
import { theme } from '~/tailwind.config'

export interface MenuIconMethods {
   readonly setOnClick: (callback: () => void) => void
   readonly setOnMouseLeave: (callback: () => void) => void
   readonly setOnMouseOver: (callback: () => void) => void
}

export interface MenuIconProps {
   handleMouseDown: () => void
}

function MenuIcon(
   { handleMouseDown }: MenuIconProps,
   ref: Ref<MenuIconMethods>
) {
   const menuIconRef = useRef<HTMLDivElement>(null)

   useImperativeHandle(
      ref,
      () => ({
         setOnClick(callback: () => void) {
            const menuIcon = menuIconRef.current
            if (menuIcon) {
               menuIcon.onclick = callback
            }
         },
         setOnMouseLeave(callback: () => void) {
            const menuIcon = menuIconRef.current
            if (menuIcon) {
               menuIcon.onmouseleave = callback
            }
         },
         setOnMouseOver(callback: () => void) {
            const menuIcon = menuIconRef.current
            if (menuIcon) {
               menuIcon.onmouseover = callback
            }
         },
      }),
      [menuIconRef]
   )

   useEffect(() => {
      const menuIcon = menuIconRef.current
      function handleMouseDownOutside(ev: Event) {
         const element = ev.target as Element
         if (element !== menuIcon) {
            handleMouseDown()
         }
      }

      if (screen.width < Number(theme.screens.laptop.replace('px', ''))) {
         document.addEventListener('mousedown', handleMouseDownOutside, true)
      }

      return () => {
         if (screen.width < Number(theme.screens.laptop.replace('px', ''))) {
            document.removeEventListener('mousedown', handleMouseDownOutside)
         }
      }
   }, [menuIconRef, handleMouseDown])

   return <div ref={menuIconRef} className={styles['menu-icon']} />
}

const ForwardRefToMenuIcon = forwardRef(MenuIcon)

const MemoOfMenuIcon = memo(ForwardRefToMenuIcon)

export default MemoOfMenuIcon
