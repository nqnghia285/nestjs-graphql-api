import { NextPage } from 'next'
import { setBreadCrumbs } from '~/app/slices/breadcrumbs.slice'
import { useAppDispatch } from '~/app/store'
import { BreadcrumbsPath } from '~/components/Breadcrumbs'
import PageContainer from '~/components/PageContainer'

const Dashboard: NextPage = () => {
   const breadcrumbsPath = {
      homePiece: {
         icon: 'fa-solid fa-house-chimney',
         path: '/',
      },
      pieces: [
         {
            path: '/dashboard',
            children: 'Dashboard',
         },
      ],
   } as BreadcrumbsPath

   const dispath = useAppDispatch()

   dispath(setBreadCrumbs(breadcrumbsPath))

   return (
      <PageContainer
         head={
            <>
               <title>Dashboard</title>
               <meta name='description' content='Atom is a shop loptop' />
               <link rel='icon' href='/favicon.ico' />
            </>
         }
      ></PageContainer>
   )
}

export default Dashboard
