import Breadcrumbs from '~/components/Breadcrumbs'
import styles from '~/styles/components/header/bottom-header/index.module.css'
import Sidebar from './Sidebar'
import { ListProps } from './Sidebar/Menu/List'

export interface BottomHeaderProps {
   menuChildren: ListProps[]
}

function BottomHeader({ menuChildren }: BottomHeaderProps) {
   return (
      <div className={styles['bottom-header']}>
         <Sidebar menuChildren={menuChildren} />
         <Breadcrumbs />
      </div>
   )
}

export default BottomHeader
