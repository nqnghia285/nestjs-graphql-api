import clsx from 'clsx'
import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/alert.module.css'

export interface AlertProps {
   title: string
   content: string
   type?: 'success' | 'info' | 'warning' | 'error'
}

export interface AlertMethods {
   readonly hidden: () => void
   readonly show: () => void
   readonly toggle: () => void
}

function Alert(
   { content, title, type = 'info' }: AlertProps,
   ref: Ref<AlertMethods>
) {
   const alertRef = useRef<HTMLDivElement>(null)

   useImperativeHandle(
      ref,
      () => ({
         hidden() {
            const alert = alertRef.current
            alert?.classList.remove(styles.show)
         },
         show() {
            const alert = alertRef.current
            alert?.classList.add(styles.show)
         },
         toggle() {
            const alert = alertRef.current
            alert?.classList.toggle(styles.show)
         },
      }),
      [alertRef]
   )
   return (
      <div ref={alertRef} className={styles.alert}>
         <div className={clsx(styles.icon, styles[`${type}-icon`])}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
               src={`/images/${type}-icon.svg`}
               alt='Alert Icon'
               width='48px'
               height='48px'
            />
         </div>

         <div className='px-4 py-2 -mx-3'>
            <div className='mx-3'>
               <span className={clsx(styles.title, styles[`${type}-title`])}>
                  {title}
               </span>
               <p className={styles.content}>{content}</p>
            </div>
         </div>
      </div>
   )
}

const ForwardRefToAlert = forwardRef(Alert)

const MemoOfAlert = memo(ForwardRefToAlert)

export default MemoOfAlert
