import clsx from 'clsx'
import { forwardRef, ReactChildren, Ref } from 'react'
import styles from '~/styles/components/button.module.css'

export interface ButtonProps {
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

function Button(
   {
      children,
      type = 'button',
      color = 'default',
      size = 'fit',
      fontSize = 'md',
      padding = 'md',
   }: ButtonProps,
   ref: Ref<HTMLButtonElement>
) {
   return (
      <button
         ref={ref}
         type={type}
         className={clsx(
            styles.btn,
            styles[`btn-${color}`],
            styles[`btn-${size}`],
            styles[`btn-${fontSize}`],
            styles[`btn-p-${padding}`]
         )}
      >
         {children}
      </button>
   )
}

export default forwardRef(Button)
