/* eslint-disable react/jsx-key */
import { Produtos as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map(() => (
          <Produto produto={produtos} estaNosFavoritos={false} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
