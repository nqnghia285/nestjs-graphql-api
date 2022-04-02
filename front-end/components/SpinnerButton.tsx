import clsx from 'clsx'
import {
   forwardRef,
   memo,
   ReactChildren,
   Ref,
   useImperativeHandle,
   useRef,
} from 'react'
import styles from '~/styles/components/spinner-button.module.css'

export interface SpinnerButtonProps {
   children?: string | ReactChildren
   type?: 'button' | 'submit' | 'reset'
   color?: 'info' | 'success' | 'warning' | 'error' | 'default'
   size?: 'fit' | 'half' | 'full'
   fontSize?:
      | 'xs'
      | 'sm'
      | 'md'
      | 'lg'
      | 'xl'
      | '2xl'
      | '3xl'
      | '4xl'
      | '5xl'
      | '6xl'
      | '7xl'
      | '8xl'
      | '9xl'
   padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export interface SpinnerButtonMethods {
   readonly setOnclick: (callback: (ev: MouseEvent) => any) => void
   readonly showSpinner: () => void
   readonly hiddenSpinner: () => void
   readonly toggleSpinner: () => void
   readonly disabled: () => void
   readonly enabled: () => void
}

function SpinnerButton(
   {
      children,
      type = 'button',
      color = 'default',
      size = 'fit',
      fontSize = 'md',
      padding = 'md',
   }: SpinnerButtonProps,
   ref: Ref<SpinnerButtonMethods>
) {
   const spinnerRef = useRef<HTMLImageElement>(null)
   const btnRef = useRef<HTMLButtonElement>(null)

   useImperativeHandle(
      ref,
      () => ({
         hiddenSpinner() {
            const spinner = spinnerRef.current
            spinner?.classList.remove(styles['show-spinner'])
         },
         setOnclick(callback) {
            const btn = btnRef.current
            if (btn) {
               btn.onclick = callback
            }
         },
         showSpinner() {
            const spinner = spinnerRef.current
            spinner?.classList.add(styles['show-spinner'])
         },
         toggleSpinner() {
            const spinner = spinnerRef.current
            spinner?.classList.toggle(styles['show-spinner'])
         },
         disabled() {
            const btn = btnRef.current
            if (btn) {
               btn.disabled = true
               btn.classList.add(styles.disabled)
            }
         },
         enabled() {
            const btn = btnRef.current
            if (btn) {
               btn.disabled = false
               btn.classList.remove(styles.disabled)
            }
         },
      }),
      [btnRef, spinnerRef]
   )

   return (
      <button
         ref={btnRef}
         type={type}
         className={clsx(
            styles.btn,
            styles[`btn-${color}`],
            styles[`btn-${size}`],
            styles[`btn-${fontSize}`],
            styles[`btn-p-${padding}`]
         )}
      >
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            ref={spinnerRef}
            width='20px'
            height='20px'
            className={styles.spinner}
            src='/images/spinner-solid.svg'
            alt='Spinner'
         />
         <span>{children}</span>
      </button>
   )
}

const ForwardRefToSpinnerButton = forwardRef(SpinnerButton)

const MemoOfSpinnerButton = memo(ForwardRefToSpinnerButton)

export default MemoOfSpinnerButton
