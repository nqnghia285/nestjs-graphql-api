import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/Sidebar/menu-icon.module.css'

export interface MenuIconMethods {
   readonly setOnClick: (callback: () => void) => void
   readonly setOnMouseLeave: (callback: () => void) => void
   readonly setOnMouseOver: (callback: () => void) => void
}

function MenuIcon(_props: object, ref: Ref<MenuIconMethods>) {
   const menuIconRef = useRef<HTMLDivElement | null>(null)

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

   console.log('re-render MenuIcon')

   return <div ref={menuIconRef} className={styles['menu-icon']} />
}

const ForwardRefToMenuIcon = forwardRef(MenuIcon)

const MemoOfMenuIcon = memo(ForwardRefToMenuIcon)

export default MemoOfMenuIcon
