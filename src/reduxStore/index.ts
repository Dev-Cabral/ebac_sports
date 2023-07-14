import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducer/carrinho'
import favoritosReducer from './reducer/addFavoritos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
