import clsx from 'clsx'
import { forwardRef, memo, Ref, useImperativeHandle, useRef } from 'react'
import styles from '~/styles/components/header/index.module.css'
import BottomHeader from './BottomHeader'
import { ListProps } from './BottomHeader/Sidebar/Menu/List'
import TopHeader, { TopHeaderMethods } from './TopHeader'
import { LogoMethods } from './TopHeader/Logo'
import { SearchMethods } from './TopHeader/Search'

export interface HeaderMethods {
   readonly hidden: () => void
   readonly show: () => void
   readonly toggle: () => void
   readonly logoMethods?: LogoMethods | null
   readonly searchMethods?: SearchMethods | null
}

function Header(_props: any, ref: Ref<HeaderMethods>) {
   const brandName = 'Atom'
   const menuChildren: ListProps[] = [
      {
         active: true,
         icon: 'fa-solid fa-house-chimney',
         path: '/',
         children: 'Home',
      },
      {
         icon: 'fa-solid fa-cart-flatbed',
         path: '/products',
         children: {
            content: 'Products',
            submenuChildren: [
               {
                  icon: 'fa-solid fa-cart-flatbed',
                  path: '/products/asus',
                  key: '1',
                  children: 'Asus',
               },
               {
                  icon: 'fa-solid fa-cart-flatbed',
                  path: '/products/acer',
                  key: '2',
                  children: 'Acer',
               },
               {
                  icon: 'fa-solid fa-cart-flatbed',
                  path: '/products/hp',
                  key: '3',
                  children: 'Hp',
               },
               {
                  icon: 'fa-solid fa-cart-flatbed',
                  path: '/products/lenovo',
                  key: '4',
                  children: 'Lenovo',
               },
               {
                  icon: 'fa-brands fa-apple',
                  path: '/products/macbook',
                  key: '5',
                  children: 'Macbook',
               },
            ],
         },
      },
      {
         icon: 'fa-solid fa-address-book',
         path: '/contact',
         children: 'Contact',
      },
      {
         icon: 'fa-solid fa-address-card',
         path: '/about',
         children: 'About',
      },
   ]

   const headerRef = useRef<HTMLElement>(null)
   const topHeaderMethodsRef = useRef<TopHeaderMethods>(null)

   useImperativeHandle(
      ref,
      () => ({
         hidden() {
            const header = headerRef.current
            header?.classList.remove(styles.show)
         },
         show() {
            const header = headerRef.current
            header?.classList.add(styles.show)
         },
         toggle() {
            const header = headerRef.current
            header?.classList.toggle(styles.show)
         },
         logoMethods: topHeaderMethodsRef.current?.logoMethods,
         searchMethods: topHeaderMethodsRef.current?.searchMethods,
      }),
      [headerRef, topHeaderMethodsRef]
   )

   return (
      <header ref={headerRef} className={clsx(styles.header, styles.show)}>
         <TopHeader ref={topHeaderMethodsRef} brandName={brandName} />
         <BottomHeader menuChildren={menuChildren} />
      </header>
   )
}

const ForwardRefToHeader = forwardRef(Header)

const MemoOfHeader = memo(ForwardRefToHeader)

export default MemoOfHeader
