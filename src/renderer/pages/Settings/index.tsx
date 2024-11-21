import { PageContainer, ProCard } from '@ant-design/pro-components'
import { ProConfigProvider } from '@ant-design/pro-provider'
import { Button } from 'antd'

function Settings(): JSX.Element {

  return (
    <ProConfigProvider dark={false}>
      <PageContainer
        extra={[
          <Button icon={'../../common/images/Start.ico'} key="3"></Button>,
          <Button key="2">操作</Button>,
          <Button key="1" type="primary">
            主操作
          </Button>
        ]}
      >
        <ProCard
          style={{
            height: '300vh',
            minHeight: '80vw'
          }}
        >
          <div />
        </ProCard>
      </PageContainer>
    </ProConfigProvider>
  )
}

export default Settings
