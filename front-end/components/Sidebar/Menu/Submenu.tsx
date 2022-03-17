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
import styles from '~/styles/components/Sidebar/submenu.module.css'
import Sublist, { SublistMethods, SublistProps } from './Sublist'

export interface SubmenuProps {
   children?: (SublistProps & { key?: string })[]
}

export interface SubmenuMethods {
   readonly open: () => void
   readonly close: () => void
   readonly toggle: () => void
   readonly inactiveSublistAll: () => void
}

function Submenu({ children }: SubmenuProps, ref: Ref<SubmenuMethods>) {
   const submenuRef = useRef<HTMLUListElement | null>(null)
   const sublistMethodsRefs = useRef<RefObject<SublistMethods>[] | undefined>(
      children?.map(() => createRef())
   )

   const handleActiveList = useCallback(
      (index: number) => {
         const sublistMethodsList = sublistMethodsRefs.current
         if (sublistMethodsList) {
            sublistMethodsList.forEach((sublistMethods, i) => {
               if (i !== index) {
                  sublistMethods.current?.inactive()
               } else {
                  sublistMethods.current?.active()
               }
            })
         }
      },
      [sublistMethodsRefs]
   )

   useEffect(() => {
      const sublistMethodsList = sublistMethodsRefs.current
      if (sublistMethodsList) {
         sublistMethodsList.forEach((sublistMethods, i) => {
            sublistMethods.current?.setOnClick(() => handleActiveList(i))
         })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sublistMethodsRefs])

   useImperativeHandle(
      ref,
      (): SubmenuMethods => ({
         close() {
            const submenu = submenuRef.current
            if (submenu) {
               submenu.classList.remove(styles.open)
            }
         },
         open() {
            const submenu = submenuRef.current
            if (submenu) {
               submenu.classList.add(styles.open)
            }
         },
         toggle() {
            const submenu = submenuRef.current
            if (submenu) {
               submenu.classList.toggle(styles.open)
            }
         },
         inactiveSublistAll() {
            const sublistMethodsList = sublistMethodsRefs.current
            if (sublistMethodsList) {
               sublistMethodsList.forEach((sublistMethods) =>
                  sublistMethods.current?.inactive()
               )
            }
         },
      }),
      [submenuRef]
   )

   console.log('re-render Submenu')

   return (
      <ul ref={submenuRef} className={styles.submenu}>
         {children?.map((e, i) => (
            <Sublist
               ref={sublistMethodsRefs.current?.[i]}
               icon={e.icon}
               path={e.path}
               active={e.active}
               key={e.key ?? i}
            >
               {e.children}
            </Sublist>
         ))}
      </ul>
   )
}

const ForwardRefToSubmenu = forwardRef(Submenu)

const MemoOfSubmenu = memo(ForwardRefToSubmenu)

export default MemoOfSubmenu
