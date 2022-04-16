import Link from '~/components/Link'
import Item, { ItemProps } from './Item'

export interface MatchingItem {
   itemProps: ItemProps
   path: string
}

export interface RightSuggestBoxProps {
   items: MatchingItem[]
}

function RightSuggestBox({ items }: RightSuggestBoxProps) {
   return (
      <div className='flex flex-col w-full space-y-1 tablet:basis-3/4 items-start tablet:pl-3'>
         <h3 className='text-slate-500'>Matching products</h3>
         <div className='flex flex-col justify-center items-start divide-y divide-solid divide-slate-500'>
            {items.map((item, index) => (
               <Link key={index} path={item.path}>
                  <Item key={'item' + index} {...item.itemProps} />
               </Link>
            ))}
         </div>
      </div>
   )
}

export default RightSuggestBox
