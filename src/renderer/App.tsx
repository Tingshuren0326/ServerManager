import { QqOutlined } from '@ant-design/icons'

import { PageContainer, ProLayout } from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-provider'

import { Modal, Layout } from 'antd'
const { Header } = Layout

import { useState, useEffect, useRef } from 'react'

import axios from 'axios'

import defaultProps from '@renderer/_defaultProps'
import Server from '@renderer/pages/Server'
import './App.css'
import { json } from 'stream/consumers'

const useModal = () => {
  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const hideModal = () => {
    setVisible(false)
  }

  return { visible, showModal, hideModal }
}

function App(): JSX.Element {
  const [pathname, setPathname] = useState('/server')

  const { visible, showModal, hideModal } = useModal()

  const [currentTime, setCurrentTime] = useState(new Date())

  const [publicIP, setPublicIP] = useState('0.0.0.0')

  const [version, setVersion] = useState('V0.0.0')

  const intervalTimeRef = useRef<number>()

  const intervalIPRef = useRef<number>()

  const getPublicIP = () => {
    axios
      .get('http://whatismyip.akamai.com/')
      .then((res) => {
        setPublicIP(res.data)
      })
      .catch((err) => {
        console.log('error : ' + err)
      })
  }

  const getVersion = async () => {
    setVersion('V1.0.0')
  }

  const rendererConfigFrom = () => {
    return (
      <>
        <Modal title="选择程序数据目录" open={visible} onOk={hideModal} onCancel={hideModal}>
          这是一个弹窗示例。
        </Modal>
      </>
    )
  }

  if(window.mainApi){
    window.mainApi.mainDownloadCallback((event, state, item) => {
      console.log(item)
    })
  }

  if(window.mainApi){
    window.mainApi.mainUnzipCallback((event, state, item) => {
      console.log(item)
    })
  }

  useEffect(() => {
    intervalTimeRef.current = window.setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    intervalIPRef.current = window.setInterval(() => {
      getPublicIP()
    }, 1000)

    return () => {
      clearInterval(intervalTimeRef.current)
      clearInterval(intervalIPRef.current)
    }
  }, [])

  return (
    <ProConfigProvider dark={false}>
      {rendererConfigFrom()}
      <ProLayout
        token={{
          bgLayout: '#212529',
          sider: {
            colorMenuBackground: 'Transparent',
            colorTextMenuTitle: '#FFF',
            colorMenuItemDivider: '#343a40',
            colorTextMenu: '#dee2e6',
            colorTextMenuItemHover: '#f0f2f5',
            colorTextMenuActive: '"#f8f9fa',
            colorTextMenuSelected: '#FFF',
            colorBgMenuItemActive: '#495057',
            colorBgMenuItemHover: '#343a40',
            colorBgMenuItemSelected: '#1A73E8'
          },
          pageContainer: {
            colorBgPageContainer: 'Transparent'
          }
        }}
        theme="dark"
        contentStyle={{ backgroundColor: 'aliceblue' }}
        style={{ backgroundColor: 'aliceblue', width: '100vw' }}
        {...defaultProps}
        location={{
          pathname
        }}
        title={'Server Manager'}
        logo={'./common/images/icon.png'}
        layout="side"
        disableMobile
        fixedHeader={true}
        siderWidth={216}
        locale={'zh-CN'}
        bgLayoutImgList={[
          {
            src: './common/images/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px'
          },
          {
            src: './common/images/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px'
          },
          {
            src: './common/images/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px'
          }
        ]}
        actionsRender={(props) => {
          if (props.isMobile) return []
          return [
            <QqOutlined key="GithubFilled" style={{ textAlign: 'center', color: '#dee2e6' }} />
          ]
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined
          return (
            <p
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
                color: 'white'
              }}
            >
              <div>©{new Date().getFullYear()} Made For RiruArk</div>
              <div>By 听书人</div>
            </p>
          )
        }}
        onMenuHeaderClick={(e) => {
          console.log(e)
        }}
        menuItemRender={(item, dom) => (
          <a
            onClick={() => {
              setPathname(item.path || '/server')
            }}
          >
            {dom}
          </a>
        )}
      >
        <Header className="win-title-bar"></Header>
        <PageContainer style={{ backgroundColor: 'aliceblue' }}>
          <Server />
        </PageContainer>
      </ProLayout>
    </ProConfigProvider>
  )
}

export default App
