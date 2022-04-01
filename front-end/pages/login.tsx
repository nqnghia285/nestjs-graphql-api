import { ApolloError } from '@apollo/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useRef, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import Alert, { AlertMethods } from '~/components/Alert'
import IconInputBox from '~/components/IconInputBox'
import SpinnerButton, { SpinnerButtonMethods } from '~/components/SpinnerButton'
import { IUserInfo, LSKeys } from '~/interface'
import styles from '~/styles/pages/login.module.css'
import { login } from '~/utilities'

export const getStaticProps: GetStaticProps = async () => {
   return {
      props: {},
   }
}

const Login: NextPage = () => {
   const userrnameRef = useRef<HTMLInputElement>(null)
   const passwordRef = useRef<HTMLInputElement>(null)
   const spinnerButtonMethodsRef = useRef<SpinnerButtonMethods>(null)
   const btnRef = useRef<HTMLButtonElement>(null)
   const alertMethodsRef = useRef<AlertMethods>(null)
   const router = useRouter()
   const [errorMessage, setErrorMessage] = useState<ApolloError>()
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [profile, setProfile] = useLocalStorage<IUserInfo | null>(
      LSKeys.PROFILE,
      null
   )

   if (profile) {
      router.push('/')
   }

   function generateErrorMessage() {
      return errorMessage
         ? errorMessage.clientErrors.length > 0
            ? `[Client error]: ${errorMessage.clientErrors[0].name}: ${errorMessage.clientErrors[0].message}`
            : errorMessage.graphQLErrors.length > 0
            ? `[Graphql error]: ${errorMessage.graphQLErrors[0].name}: ${errorMessage.graphQLErrors[0].message}`
            : errorMessage.networkError
            ? `[Networt error]: ${errorMessage.networkError.name}: ${errorMessage.networkError.message}`
            : `[Error]: ${errorMessage.name}: ${errorMessage.message}`
         : 'None'
   }

   function handleSubmit(ev: FormEvent) {
      ev.preventDefault()

      const spinnerButtonMethods = spinnerButtonMethodsRef.current
      const alertMethods = alertMethodsRef.current
      const username = userrnameRef.current
      const password = passwordRef.current

      alertMethods?.hidden()

      spinnerButtonMethods?.showSpinner()
      spinnerButtonMethods?.disabled()

      if (username && password) {
         login(username.value, password.value)
            .then((res) => {
               if (res.isSuccess) {
                  setProfile(res.data as IUserInfo)
                  router.push('/')
               } else {
                  setErrorMessage({
                     name: 'Message',
                     message: res.message ?? '',
                     clientErrors: [],
                     extraInfo: [],
                     graphQLErrors: [],
                     networkError: null,
                  })
                  spinnerButtonMethods?.hiddenSpinner()
                  spinnerButtonMethods?.enabled()
                  alertMethods?.show()
               }
            })
            .catch((errors: ApolloError) => {
               setErrorMessage(errors)
               spinnerButtonMethods?.hiddenSpinner()
               spinnerButtonMethods?.enabled()
               alertMethods?.show()
            })
      }
   }

   useEffect(() => {
      const username = userrnameRef.current
      const password = passwordRef.current
      const alertMethods = alertMethodsRef.current
      const btn = btnRef.current

      function hiddenAlert() {
         alertMethods?.hidden()
      }

      if (btn) {
         btn.onclick = () => {
            router.push('/')
         }
      }

      if (username && password) {
         username.onkeydown = hiddenAlert

         password.onkeydown = hiddenAlert
      }
   }, [userrnameRef, passwordRef, alertMethodsRef, btnRef, router])

   return (
      <div className={styles['login-container']}>
         <Head>
            <title>Log In</title>
            <meta name='description' content='Login form of Atom website' />
         </Head>

         <form className={styles.login} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Log In</h2>
            <IconInputBox
               ref={userrnameRef}
               id='username'
               icon='fa-solid fa-user'
               type='text'
               color='info'
               size='full'
               fontSize='md'
               placeholder='Username'
               required
            />
            <IconInputBox
               ref={passwordRef}
               id='password'
               icon='fa-solid fa-key'
               type='password'
               placeholder='Password'
               required
            />
            <div className='flex flex-row w-full h-fit space-x-2'>
               <SpinnerButton
                  ref={spinnerButtonMethodsRef}
                  type='submit'
                  color='info'
                  size='half'
               >
                  Login
               </SpinnerButton>
               <span className='flex text-white h-full w-1/2 justify-end self-center'>
                  <Link href={'/'} passHref>
                     <a className='hover:text-sky-400 active:text-red-500'>
                        Go home
                     </a>
                  </Link>
               </span>
            </div>
            <Alert
               ref={alertMethodsRef}
               type='error'
               title='Error'
               content={generateErrorMessage()}
            />
         </form>
      </div>
   )
}

export default Login
