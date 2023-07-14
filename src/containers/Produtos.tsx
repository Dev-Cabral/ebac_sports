/* eslint-disable react/jsx-key */
import { Produtos as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produto: ProdutoType[]
  estaNosFavoritos: ProdutoType[]
}

const ProdutosComponent = ({ produto }: Props) => {
  return (
    <>
      <S.Produtos>
        {produto.map(() => (
          <Produto produto={produto} estaNosFavoritos={false} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
