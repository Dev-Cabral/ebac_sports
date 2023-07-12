import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map(() => (
          <Produto />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
