import { useState } from 'react'
import Image from 'next/image'

import * as S from './styles'
import Loading from 'components/atoms/Loading'

interface ImageCustomProps {
  width?: number
  height?: number
  src: string
  alt: string
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill'
}

const ImageCustom = ({
  width,
  height,
  className,
  ...data
}: ImageCustomProps) => {
  const [skeleton, setSkeleton] = useState(true)

  return (
    <S.Container className={`${className}`} width={width} height={height}>
      {skeleton && (
        <S.Skeleton>
          <Loading />
        </S.Skeleton>
      )}

      <Image
        {...data}
        onLoadingComplete={() => setSkeleton(false)}
        layout="fill"
      />
    </S.Container>
  )
}

export default ImageCustom
