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

   socket.on('staff-joins-support-team-room', (payload: unknown) => {
      console.log('ClientId: ', socket.id)
      console.log('Message: ', payload)
   })

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

   let message: string
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

   function onChangedMessage(e: ChangeEvent<HTMLInputElement>) {
      message = e.target.value
   }

   function sendMessage() {
      if (!socket.disconnected) {
         socket.emit('message', message)
      }
   }

   function joinSTR() {
      if (!socket.disconnected) {
         socket.emit('staff-joins-support-team-room')
      }
   }

   return (
      <div className='App'>
         <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <img src={imgSrc} hidden={hidden} alt='Nothing' />
            <input type='file' onChange={onChangedFile} />
            <input type='button' value='Upload' onClick={uploadFile} />
            <input type='button' value='Join STR' onClick={joinSTR} />
            <input type='text' onChange={onChangedMessage} />
            <input type='button' value='Send' onClick={sendMessage} />
         </header>
      </div>
   )
}

export default App
