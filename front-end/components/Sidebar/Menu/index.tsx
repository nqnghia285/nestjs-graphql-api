import {
   createRef,
   forwardRef,
   memo,
   Ref,
   RefObject,
   useCallback,
   useEffect,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/Sidebar/menu.module.css'
import List, { ListMethods, ListProps } from './List'

export interface MenuProps {
   children?: ListProps[]
}

export interface MenuMethods {
   readonly open: () => void
   readonly close: () => void
   readonly toggle: () => void
   readonly setOnMouseLeave: (callback: () => void) => void
   readonly setOnMouseOver: (callback: () => void) => void
}

function Menu({ children }: MenuProps, ref: Ref<MenuMethods>) {
   const menuRef = useRef<HTMLUListElement | null>(null)
   const listMethodsRefs = useRef<RefObject<ListMethods>[] | undefined>(
      children?.map(() => createRef())
   )

   const handleActiveList = useCallback(
      (index: number) => {
         const listMethodsList = listMethodsRefs.current
         if (listMethodsList) {
            listMethodsList.forEach((listMethods, i) => {
               if (i !== index) {
                  listMethods.current?.inactive()
               } else {
                  listMethods.current?.active()
               }
            })
         }
      },
      [listMethodsRefs]
   )

   useEffect(() => {
      const listMethodsList = listMethodsRefs.current
      if (listMethodsList) {
         listMethodsList.forEach((listMethods, i) => {
            listMethods.current?.setOnClick(() => handleActiveList(i))
         })
      }
   }, [listMethodsRefs, handleActiveList])

   useImperativeHandle(
      ref,
      () => ({
         open() {
            const menu = menuRef.current
            if (menu) {
               menu.classList.add(styles.open)
            }
         },
         close() {
            const menu = menuRef.current
            if (menu) {
               menu.classList.remove(styles.open)
            }
         },
         toggle() {
            const menu = menuRef.current
            if (menu) {
               menu.classList.toggle(styles.open)
            }
         },
         setOnMouseLeave(callback) {
            const menu = menuRef.current
            if (menu) {
               menu.onmouseleave = callback
            }
         },
         setOnMouseOver(callback) {
            const menu = menuRef.current
            if (menu) {
               menu.onmouseover = callback
            }
         },
      }),
      [menuRef]
   )

   return (
      <ul ref={menuRef} className={styles.menu}>
         {children?.map((e, i) => (
            <List
               ref={listMethodsRefs.current?.[i]}
               key={i}
               icon={e.icon}
               path={e.path}
               active={i === 0}
            >
               {e.children}
            </List>
         ))}
      </ul>
   )
}

const ForwardRefToMenu = forwardRef(Menu)

const MemoOfMenu = memo(ForwardRefToMenu)

export default MemoOfMenu
