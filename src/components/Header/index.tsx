import { useSelector } from 'react-redux'
import * as S from './styles'

import { Produtos } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootReducer } from '../../reduxStore'

type Props = {
  favoritos: Produtos[]
}

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const fav = useSelector((state: RootReducer) => state.favoritos.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{fav.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
