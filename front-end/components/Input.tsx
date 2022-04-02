import clsx from 'clsx'
import { forwardRef, Ref } from 'react'
import styles from '~/styles/components/input.module.css'

export interface InputProps {
   placeholder?: string
   disabled?: boolean
   type?: 'text' | 'password' | 'number' | 'email' | 'search'
   color?: 'error' | 'info' | 'success' | 'warning'
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
   required?: boolean
}

function Input(
   {
      placeholder = '',
      disabled = false,
      type = 'text',
      color = 'info',
      size = 'fit',
      fontSize = 'md',
      padding = 'md',
      required = false,
   }: InputProps,
   ref: Ref<HTMLInputElement>
) {
   return (
      <input
         ref={ref}
         type={type}
         placeholder={placeholder}
         className={clsx(
            styles.input,
            styles[`input-${color}`],
            styles[`input-${size}`],
            styles[`input-${fontSize}`],
            styles[`input-p-${padding}`],
            { [styles.disabled]: disabled }
         )}
         disabled={disabled}
         required={required}
      />
   )
}

export default forwardRef(Input)
