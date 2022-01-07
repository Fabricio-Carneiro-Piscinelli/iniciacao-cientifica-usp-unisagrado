import { useState } from 'react';
import { Menu } from 'antd';
import { ReactComponent as HomeItem } from 'assets/icons/components/SideMenu/Home.svg';
import { ReactComponent as AvaliatorsItem } from 'assets/icons/components/SideMenu/Avaliadores.svg';
import { ReactComponent as RecordsItem } from 'assets/icons/components/SideMenu/Gravacoes.svg';
import { ReactComponent as TasksItem } from 'assets/icons/components/SideMenu/Tarefas.svg';
import { ReactComponent as SpeakersItem } from 'assets/icons/components/SideMenu/Falantes.svg';
import { ReactComponent as PlacesItem } from 'assets/icons/components/SideMenu/Locais.svg';
import { ReactComponent as MyAccountItem } from 'assets/icons/components/SideMenu/MinhaConta.svg';
import { ReactComponent as AboutItem } from 'assets/icons/components/SideMenu/Sobre.svg';
import { ReactComponent as HelpItem } from 'assets/icons/components/SideMenu/Ajuda.svg';
import { ReactComponent as ExitItem } from 'assets/icons/components/SideMenu/Exit.svg';
import { ReactComponent as IconLogo } from 'assets/icons/components/SideMenu/Icon-sys-img.svg';
import { ReactComponent as LogoSys } from 'Image-general/logo.svg';

import './side-menu-style.scss';

const itemsMenu = [
  {
    key: 1,
    path: '/home',
    title: 'Inicio',
    icon: <HomeItem />,
  },
  {
    key: 2,
    path: '/',
    title: 'Avaliadores',
    icon: <AvaliatorsItem />,
  },
  {
    key: 3,
    path: '/',
    title: 'Gravações',
    icon: <RecordsItem />,
  },
  {
    key: 4,
    path: '/',
    title: 'Tarefas',
    icon: <TasksItem />,
  },
  {
    key: 5,
    path: '/',
    title: 'Falantes',
    icon: <SpeakersItem />,
  },
  {
    key: 6,
    path: '/',
    title: 'Locais',
    icon: <PlacesItem />,
  },
  {
    key: 7,
    path: '/',
    title: 'Minha Conta',
    icon: <MyAccountItem />,
  },
  {
    key: 8,
    path: '/about',
    title: 'Sobre',
    icon: <AboutItem />,
  },
  {
    key: 9,
    path: '/',
    title: 'Ajuda',
    icon: <HelpItem />,
  },
  {
    key: 10,
    path: '/',
    title: 'Sair',
    icon: <ExitItem />,
  },
];

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <div>
      <Menu
        className="container_side_menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        onMouseOver={() => toggleCollapsed()}
      >
        <div>
          {collapsed ? <IconLogo className="container_side_menu__icon_img align" /> : <LogoSys className="container_side_menu__icon" />}
        </div>
        {itemsMenu.map((item) => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.title}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
