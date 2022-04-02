import clsx from 'clsx'
import { forwardRef, Ref, useRef } from 'react'
import styles from '~/styles/components/icon-input-box.module.css'

export interface IconInputBoxProps {
   id: string
   icon: string | string[]
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

function IconInputBox(
   {
      id,
      placeholder = '',
      disabled = false,
      type = 'text',
      required = false,
      icon,
      color = 'info',
      size = 'fit',
      fontSize = 'md',
      padding = 'md',
   }: IconInputBoxProps,
   ref: Ref<HTMLInputElement>
) {
   const iconRef = useRef<HTMLElement>(null)

   function handleFocusInput() {
      const icon = iconRef.current
      icon?.classList.add(styles['text-sky'])
   }

   function handleBlurInput() {
      const icon = iconRef.current
      const input = document.getElementById(id) as HTMLInputElement | null

      if (!input?.value) {
         icon?.classList.remove(styles['text-sky'])
      }
   }

   return (
      <div className={styles['icon-input-box']}>
         <span className={styles['icon-wrap']}>
            <i ref={iconRef} className={clsx(icon, styles.icon)}></i>
         </span>
         <input
            id={id}
            ref={ref}
            type={type}
            className={clsx(
               styles.input,
               styles[`input-${color}`],
               styles[`input-${size}`],
               styles[`input-${fontSize}`],
               styles[`input-p-${padding}`],
               { [styles.disabled]: disabled }
            )}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            onFocus={handleFocusInput}
            onBlur={handleBlurInput}
         />
      </div>
   )
}

export default forwardRef(IconInputBox)
