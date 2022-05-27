import useGlobal from 'data/useContext/useGlobal'
import Image from 'next/image'
import * as S from './styles'

const SideBar = () => {
  const { menu } = useGlobal()

  return (
    <S.Container className="bg-indigo-900 shadow-lg transition-all" menu={menu}>
      <div className="icon">
        <Image src="/img/icon-192.png" width={40} height={40} />
        {menu && <h2>Adm System</h2>}
      </div>
    </S.Container>
  )
}

export default SideBar
