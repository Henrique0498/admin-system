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

      <div className="user transition-all">
        <div className="userPhoto transition-all">
          <div className="photo transition-all">
            <Image
              src="/img/user/profile.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {menu && <h2>Amanda</h2>}
      </div>

      <ul>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
        <li>A</li>
      </ul>
    </S.Container>
  )
}

export default SideBar
