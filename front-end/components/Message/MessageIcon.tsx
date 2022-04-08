import clsx from 'clsx'
import { forwardRef, memo, Ref } from 'react'

export interface MessageIconProps {
   className?: string
   ping?: string
   icon?: string
}

function MessageIcon(
   { icon, className, ping }: MessageIconProps,
   ref: Ref<HTMLElement>
) {
   return (
      <span
         className={clsx(
            'fixed bottom-12 right-8 desktop:bottom-20 desktop:right-16  flex w-12 h-12',
            className
         )}
      >
         <span
            className={clsx(
               'animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75',
               ping
            )}
         />
         <i
            ref={ref}
            className={clsx(
               'fa-solid fa-comment-dots text-5xl text-gray-900 dark:text-slate-700 relative flex-inline cursor-pointer active:text-red-400',
               icon
            )}
         />
      </span>
   )
}

const ForwardRefToMessageIcon = forwardRef(MessageIcon)

const MemoOfMessageIcon = memo(ForwardRefToMessageIcon)

export default MemoOfMessageIcon
