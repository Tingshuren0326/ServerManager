import React, { useState } from 'react';
import {
  DatabaseFilled,
  DashboardFilled,
  ProductFilled,
  RestFilled,
  RocketFilled,
  SettingFilled
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ServerPage from './components/ServerPage';
import { Color } from 'antd/es/color-picker';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('服务器', '1', <DatabaseFilled />),
  getItem('性能监控', '2', <DashboardFilled />),
  getItem('常用工具', 'sub1', <ProductFilled />),
  getItem('设置', 'sub2', <SettingFilled />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100vw', background : colorBgContainer}}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content>
          <ServerPage></ServerPage>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Server Manager ©{new Date().getFullYear()} Created by 听书人
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;