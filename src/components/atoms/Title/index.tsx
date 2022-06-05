import ImageCustom from 'components/molecules/ImageCustom'

import * as S from './styles'

const Title = () => {
  return (
    <S.Container className="dark:text-gray-200">
      <ImageCustom
        src="/img/logo-sm.svg"
        alt=""
        width={40}
        height={40}
        className="mr-2 "
      />
      <h2>Admin System</h2>
    </S.Container>
  )
}

export default Title
