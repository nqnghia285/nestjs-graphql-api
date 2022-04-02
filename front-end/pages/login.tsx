import { ApolloError } from '@apollo/client'
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
import { generateErrorMessage, login } from '~/utilities'

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
               padding='md'
               placeholder='Username'
               required
            />
            <IconInputBox
               ref={passwordRef}
               id='password'
               icon='fa-solid fa-key'
               type='password'
               color='info'
               size='full'
               fontSize='md'
               padding='md'
               placeholder='Password'
               required
            />
            <div className='flex flex-row w-full h-fit space-x-2'>
               <SpinnerButton
                  ref={spinnerButtonMethodsRef}
                  type='submit'
                  color='info'
                  size='fit'
                  fontSize='md'
                  padding='xl'
               >
                  Login
               </SpinnerButton>
               <span className='flex text-white h-full w-1/2 justify-end self-center'>
                  <Link href={'/'} passHref>
                     <a className='flex hover:text-sky-400 active:text-red-500 space-x-1'>
                        <i className='fa-solid fa-house-chimney'></i>
                        <i className='fa-solid fa-reply self-center'></i>
                     </a>
                  </Link>
               </span>
            </div>
            <Alert
               ref={alertMethodsRef}
               type='error'
               title='Error'
               content={generateErrorMessage(errorMessage)}
            />
         </form>
      </div>
   )
}

export default Login
