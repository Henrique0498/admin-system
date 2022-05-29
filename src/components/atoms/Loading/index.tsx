import * as S from './styles'

const Loading = () => {
  return (
    <S.Container>
      <S.SizeLoading>
        <S.Loader />
        <S.Loader />
        <S.Loader />
      </S.SizeLoading>
    </S.Container>
  )
}

export default Loading
