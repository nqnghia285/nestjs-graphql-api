import Breadcrumbs, { BreadcrumbsPath } from '~/components/Breadcrumbs'
import styles from '~/styles/components/header/bottom-header/index.module.css'
import Sidebar from './Sidebar'
import { ListProps } from './Sidebar/Menu/List'

export interface BottomHeaderProps {
   menuChildren: ListProps[]
   breadcrumbsPath: BreadcrumbsPath
}

function BottomHeader({ menuChildren, breadcrumbsPath }: BottomHeaderProps) {
   return (
      <div className={styles['bottom-header']}>
         <Sidebar menuChildren={menuChildren} />
         <Breadcrumbs breadcrumbsPath={breadcrumbsPath} />
      </div>
   )
}

export default BottomHeader
