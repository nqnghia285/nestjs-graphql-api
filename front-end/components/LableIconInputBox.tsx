import clsx from 'clsx'
import { forwardRef, Ref, useRef } from 'react'
import styles from '~/styles/components/label-icon-input-box.module.css'

export interface LabelIconInputBoxProps {
   id: string
   label: string
   icon: string | string[]
   placeholder?: string
   disabled?: boolean
   type?: 'text' | 'password' | 'number' | 'email'
   required?: boolean
}

function LabelIconInputBox(
   {
      id,
      label,
      placeholder = '',
      disabled = false,
      type = 'text',
      required = false,
      icon,
   }: LabelIconInputBoxProps,
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
      <div className={styles['label-icon-input-box']}>
         <label className={styles.label} htmlFor={id}>
            {label}
         </label>
         <div className={styles['icon-input-box']}>
            <span className={styles['icon-wrap']}>
               <i ref={iconRef} className={clsx(icon, styles.icon)}></i>
            </span>
            <input
               id={id}
               ref={ref}
               type={type}
               className={clsx(styles.input)}
               required={required}
               disabled={disabled}
               placeholder={placeholder}
               onFocus={handleFocusInput}
               onBlur={handleBlurInput}
            />
         </div>
      </div>
   )
}

export default forwardRef(LabelIconInputBox)
