import { forwardRef, memo, Ref, useMemo } from 'react'
import styles from '~/styles/components/header.module.css'
import Sidebar from './Sidebar'
import { ListProps } from './Sidebar/Menu/List'

function Header(_props: object, ref: Ref<unknown>) {
   const menuChildren: ListProps[] = useMemo(
      () => [
         {
            active: true,
            icon: 'fa-solid fa-house-chimney',
            path: '#',
            children: 'Home',
         },
         {
            icon: 'fa-solid fa-cart-flatbed',
            path: '#',
            children: {
               content: 'Products',
               submenuChildren: [
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '1',
                     children: 'Asus',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '2',
                     children: 'Acer',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '3',
                     children: 'Hp',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '4',
                     children: 'Lenovo',
                  },
                  {
                     icon: 'fa-solid fa-cart-flatbed',
                     path: '#',
                     key: '5',
                     children: 'Macbook',
                  },
               ],
            },
         },
         {
            icon: 'fa-solid fa-address-book',
            path: '#',
            children: 'Contact',
         },
         {
            icon: 'fa-solid fa-address-card',
            path: '#',
            children: 'About',
         },
      ],
      []
   )

   return (
      <header className={styles.header}>
         <Sidebar menuChildren={menuChildren} />
      </header>
   )
}

const ForwardRefToHeader = forwardRef(Header)

const MemoOfHeader = memo(ForwardRefToHeader)

export default MemoOfHeader
