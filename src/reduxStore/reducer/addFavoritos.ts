import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarAosFavoritos: (state, action: PayloadAction<Produto>) => {
      const favoritos = action.payload

      if (state.itens.find((p) => p.id === favoritos.id)) {
        const FavoritosSemProduto = state.itens.filter(
          (p) => p.id !== favoritos.id
        )
        state.itens = FavoritosSemProduto
      } else {
        state.itens.push(favoritos)
      }
    }
  }
})

export const { adicionarAosFavoritos } = favoritoSlice.actions
export default favoritoSlice.reducer
