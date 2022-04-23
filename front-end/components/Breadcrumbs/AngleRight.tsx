import clsx from 'clsx'

function AngleRight({ className }: { className?: string }) {
   return (
      <span
         className={clsx(
            'mx-1 tablet:mx-3 laptop:mx-5 desktop:mx-5 text-slate-300',
            className
         )}
      >
         <i className='fa-solid fa-angle-right'></i>
      </span>
   )
}

export default AngleRight
