import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineCalendar,
  HiChevronRight
} from 'react-icons/hi'
import Image from 'next/image'

import useGlobal from 'data/useContext/useGlobal'

import * as S from './styles'

// const dataList = [
//   {
//     name: 'Home',
//     id: 1,
//     icon: HiOutlineHome,
//     subMenu: [{ name: 'Home', id: 1, icon: HiOutlineHome }]
//   },
//   {
//     name: 'Home',
//     id: 1,
//     icon: HiOutlineHome,
//     subMenu: [{ name: 'Home', id: 1, icon: HiOutlineHome }]
//   }
// ]

const SideBar = () => {
  const { menu, setMenu } = useGlobal()

  return (
    <S.Container className="bg-indigo-900 shadow-lg transition-all" menu={menu}>
      <div className="icon transition-all">
        <div className="logo transition-all">
          <Image src="/img/icon-192.png" width={40} height={40} />
        </div>
        <h2 className=" transition-all">Adm System</h2>
        {menu && (
          <button
            onClick={() => setMenu(!menu)}
            className="bg-gray-200 shadow-md transition-all m-auto px-5 py-4"
          >
            x
          </button>
        )}
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

        {menu && (
          <div className="info">
            <h2>Amanda</h2>
          </div>
        )}
      </div>

      <S.List>
        {menu && <p>Principal</p>}
        <S.Nav menu={menu}>
          <li className="active">
            <div className="content">
              <div className="iconLi">
                <HiOutlineHome fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="iconLi">
                <HiOutlineChartPie fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="iconLi">
                <HiOutlineCalendar fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div className="shadow-sm"></div>
              </div>
            </div>
          </li>
        </S.Nav>
      </S.List>

      <S.List>
        {menu && <p>Principal</p>}
        <S.Nav menu={menu}>
          <li className="">
            <div className="content">
              <div className="iconLi">
                <HiOutlineHome fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="iconLi">
                <HiOutlineChartPie fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div></div>
              </div>
            </div>
          </li>
          <li>
            <div className="content">
              <div className="iconLi">
                <HiOutlineCalendar fontSize={menu ? 24 : 30} />
              </div>
              {menu && (
                <div className="container">
                  Teste
                  <HiChevronRight />
                </div>
              )}
              <div className="list">
                <div className="shadow-sm"></div>
              </div>
            </div>
          </li>
        </S.Nav>
      </S.List>
    </S.Container>
  )
}

export default SideBar
