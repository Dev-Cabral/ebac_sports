import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'

import { store } from './reduxStore'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => Produtos(res))
  }, [])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={[]} />
        <Produtos
          produtos={[]}
          favoritos={[]}
          favoritar={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
    </Provider>
  )
}

export default App
