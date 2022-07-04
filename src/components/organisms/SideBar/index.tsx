import {
  HiOutlineHome,
  HiOutlineChartPie,
  HiOutlineCalendar,
  HiChevronRight
} from 'react-icons/hi'

import useGlobal from 'context/GlobalContext/useGlobal'

import * as S from './styles'
import ToggleSideBar from 'components/molecules/ToggleSideBar'
import ImageCustom from 'components/molecules/ImageCustom'
import CustomLink from 'components/atoms/CustomLink'
import React from 'react'
import { IconType } from 'react-icons/lib'
import { useRouter } from 'next/router'

type LiType = {
  name: string
  icon: IconType
  info?: string
  link?: string
  data?: LiType[]
}

const dataList = [
  {
    name: 'Dashboard',
    describe: 'Telas iniciais',
    data: [
      {
        name: 'inicio',
        icon: HiOutlineHome,
        link: '/'
      },
      {
        name: 'teste',
        icon: HiOutlineChartPie,
        data: [
          {
            name: 'teste',
            icon: HiOutlineHome,
            link: '/teste'
          }
        ]
      },
      {
        name: 'teste',
        info: 'testando...',
        icon: HiOutlineCalendar
      },
      {
        name: 'teste',
        icon: HiOutlineCalendar
      }
    ]
  }
]

const SideBar = () => {
  const { menu } = useGlobal()
  const router = useRouter()

  function controlRender(
    children: React.ReactNode | string,
    link?: string,
    active?: boolean
  ) {
    if (link) {
      return (
        <CustomLink href={link} className="container" activeClass="active">
          {children}
        </CustomLink>
      )
    }

    return (
      <div className={`container ${active ? 'active' : ''}`}>{children}</div>
    )
  }

  function renderChildrenList(list: LiType, titleActive: boolean) {
    return (
      <>
        <S.Icon menu={titleActive}>{<list.icon fontSize={24} />}</S.Icon>
        {titleActive && (
          <div className="content">
            <div className="text">
              <p className="title">{list.name}</p>
              <p>{list?.info}</p>
            </div>
            {list.data && <HiChevronRight />}
          </div>
        )}
      </>
    )
  }

  function renderList(list: LiType, index: number, title = menu) {
    const activeLink = list.data?.some(function (el) {
      return el.link?.toLowerCase() === router.asPath.toLowerCase()
    })

    return (
      <S.Li menu={title} key={list.name + index}>
        {controlRender(renderChildrenList(list, title), list.link, activeLink)}

        {list.data && (
          <div className="menuContainer">
            <ul className="list">
              {list.data.map((item, i) => renderList(item, i, true))}
            </ul>
          </div>
        )}
      </S.Li>
    )
  }

  return (
    <S.Container className="shadow-md transition-all text-gray-100" menu={menu}>
      <S.Head>
        <ImageCustom
          className="m-auto"
          src="/img/logo-sm.svg"
          alt=""
          height={40}
          width={40}
        />

        <div className="title">
          <h3>Admin System</h3>
          <p className="text-gray-400">Made in NexJS</p>
        </div>

        {menu && <ToggleSideBar />}
      </S.Head>

      <S.User>
        <div className="photo">
          <ImageCustom
            width={menu ? 90 : 44}
            height={menu ? 90 : 44}
            alt=""
            src="/img/user/profile.jpg"
            objectFit="cover"
            className="transition-all"
          />
        </div>

        {menu && (
          <div className="info pb-7">
            <h2>Amanda Nunes</h2>
            <p className="text-gray-500">admin@gmail.com</p>
          </div>
        )}
      </S.User>

      <S.List>
        {dataList.map((item, i) => (
          <S.Nav key={item.name + i}>
            {menu && (
              <div className="describe">
                <h6>{item.name}</h6>
                <p>{item.describe}</p>
              </div>
            )}
            {item.data.map((li, i) => renderList(li, i))}
          </S.Nav>
        ))}
      </S.List>
    </S.Container>
  )
}

export default SideBar
