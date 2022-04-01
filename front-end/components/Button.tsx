import clsx from 'clsx'
import { forwardRef, ReactChildren, Ref } from 'react'
import styles from '~/styles/components/button.module.css'

export interface ButtonProps {
   children?: string | ReactChildren
   type?: 'button' | 'submit' | 'reset'
   color?: 'info' | 'success' | 'warning' | 'error' | 'default'
   size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'half'
}

function Button(
   { children, type = 'button', color = 'default', size = 'md' }: ButtonProps,
   ref: Ref<HTMLButtonElement>
) {
   return (
      <button
         ref={ref}
         type={type}
         className={clsx(
            styles.btn,
            styles[`btn-${color}`],
            styles[`btn-${size}`]
         )}
      >
         {children}
      </button>
   )
}

export default forwardRef(Button)
