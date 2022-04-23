/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HomeProps } from '~/components/Breadcrumbs/Home'
import { PieceProps } from '~/components/Breadcrumbs/Piece'

interface BreadcrumbsPath {
   homePiece: HomeProps
   angleClassName?: string
   pieces?: PieceProps[]
}

const initialState = {
   homePiece: {
      icon: 'fa-solid fa-house-chimney text-sky-400',
      path: '/',
      className: 'text-gray-900',
   },
   angleClassName: 'text-white',
   pieces: [],
} as BreadcrumbsPath

const breadcrumbsSlice = createSlice({
   name: 'breadcrumbs',
   initialState,
   reducers: {
      setBreadCrumbs(state, action: PayloadAction<BreadcrumbsPath>) {
         return action.payload
      },
      reset(state) {
         return initialState
      },
   },
})

const breadcrumbsReducer = breadcrumbsSlice.reducer

export const { reset, setBreadCrumbs } = breadcrumbsSlice.actions
export default breadcrumbsReducer
