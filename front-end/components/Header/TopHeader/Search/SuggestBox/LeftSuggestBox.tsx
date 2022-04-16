import Link from '~/components/Link'

export interface BrandOrModel {
   name: string
   path: string
}

export interface LeftSuggestBoxProps {
   brands: BrandOrModel[]
   models: BrandOrModel[]
}

function LeftSuggestBox({ brands, models }: LeftSuggestBoxProps) {
   return (
      <div className='flex flex-col w-full tablet:basis-1/4 pr-3 space-y-1 divide-y divide-solid divide-slate-500'>
         <div className='flex flex-col'>
            <h3 className='text-slate-500'>Brands</h3>
            {brands.map((brand, index) => (
               <Link
                  key={brand.name + index}
                  path={brand.path}
                  className='hover:text-blue-500'
               >
                  {brand.name}
               </Link>
            ))}
         </div>
         <div className='flex flex-col'>
            <h3 className='text-slate-500'>Models</h3>
            {models.map((model, index) => (
               <Link
                  key={model.name + index}
                  path={model.path}
                  className='hover:text-blue-500'
               >
                  {model.name}
               </Link>
            ))}
         </div>
      </div>
   )
}

export default LeftSuggestBox
