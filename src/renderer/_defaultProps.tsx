import {
  DesktopOutlined,
  DashboardOutlined,
  ExperimentOutlined,
  SettingOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/server',
        name: '服务器',
        icon: <DesktopOutlined />,
        component: './pages/Server'
      },
      {
        path: '/monitor',
        name: '性能监控',
        icon: <DashboardOutlined />,
        component: './pages/Monitor'
      },
      {
        path: '/tools',
        name: '实用工具',
        icon: <ExperimentOutlined />,
        component: './pages/Tools'
      },
      {
        path: '/settings',
        name: '设置',
        icon: <SettingOutlined />,
        component: './pages/Settings'
      },
      {
        path: '/about',
        name: '关于',
        icon: <InfoCircleOutlined />,
        component: './pages/About'
      }
    ]
  },
  location: {
    pathname: '/'
  },
  appList: []
}
