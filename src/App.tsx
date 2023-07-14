import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Produto } from './components/Produto/styles'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './reduxStore'

export type Produtos = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={[]} />
        <Produtos produto={produtos} estaNosFavoritos={[]} />
      </div>
    </Provider>
  )
}

export default App
