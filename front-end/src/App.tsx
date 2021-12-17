import { gql } from '@apollo/client'
import React from 'react'
import { mutate } from './apollo_client'
import './App.css'
import logo from './logo.svg'
import { CreateOneLaptopArgs } from './prisma-nestjs-graphql'
import { Response } from './typedefs'

function App() {
   function createLaptop() {
      const args: CreateOneLaptopArgs = {
         data: {
            brand: 'Lenovo',
            cpu: 'Ryzen 7 5800H',
            model: 'Lenovo Ideapad 5 Pro 16"',
         },
      }

      const doc = gql`
         mutation ($data: LaptopCreateInput!) {
            createLaptop(data: $data) {
               isSuccess
               message
               data
               errors
            }
         }
      `

      mutate(doc, args)
         .then((data) => {
            console.log('Response: ', data)
            const response: Response = data.data.createLaptop
            console.log('data: ', JSON.parse(response.data || ''))
         })
         .catch((errors) => console.log('Errors: ', errors))
   }

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <button onClick={createLaptop}>Create Laptop</button>
         </header>
      </div>
   )
}

export default App
