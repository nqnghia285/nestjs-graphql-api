import { gql } from '@apollo/client'
import React, { ChangeEvent, useState } from 'react'
import { io } from 'socket.io-client'
import { mutate } from './apollo-client'
import './App.css'
import logo from './logo.svg'
import { Image } from './prisma-nestjs-graphql'

function App() {
   const socket = io('/support', { withCredentials: true })

   socket.on('message', (payload: unknown) => {
      console.log('Message: ', payload)
   })

   socket.on('connection', (payload: unknown) => {
      console.log('Message: ', payload)
   })

   setInterval(() => {
      if (socket.connected) {
         socket.emit('message', 'Hello Server!')
      }
   }, 3000)

   const upload = gql`
      mutation ($data: ImageCreateInput!) {
         createImage(data: $data) {
            createdAt
            data
            id
            mimeType
            title
            updatedAt
         }
      }
   `

   let file: File
   const [hidden, setHidden] = useState(true)
   const [imgSrc, setImgSrc] = useState('')

   function onChangedFile(e: ChangeEvent<HTMLInputElement>) {
      file = e.target.files![0]
   }

   async function uploadFile() {
      console.log('filename', file.name)
      const buffer = await file.arrayBuffer()
      const data = btoa(String.fromCharCode(...new Uint8Array(buffer)))
      console.log(data)
      await mutate(upload, { data: { title: 'File', mimeType: 'jpeg', data } })
         .then((res) => {
            console.log(res)
            const { data } = res
            const createImage = data.createImage as Image
            const src = `data:image/${
               createImage?.mimeType === 'svg'
                  ? 'svg+xml'
                  : createImage?.mimeType
            };base64,${createImage?.data}`
            setImgSrc(src)
            setHidden(false)
         })
         .catch((err) => console.log(err))
   }

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <img src={imgSrc} hidden={hidden} alt='Nothing' />
            <input type='file' onChange={onChangedFile} />
            <input type='button' value='Upload' onClick={uploadFile} />
         </header>
      </div>
   )
}

export default App
