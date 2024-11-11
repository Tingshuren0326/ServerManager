import React, { useMemo, useState } from 'react';
import { Layout, theme, Tooltip, Col, Divider, Row } from 'antd';

import { AppstoreAddOutlined } from '@ant-design/icons';
import { FloatButton, TooltipProps } from 'antd';

import ServerCard from './ServerCard'

const { Header, Content, } = Layout;

const items = [];

const ServerPage: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');

    const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }

        return {
            pointAtCenter: true,
        };
    }, [arrow]);


    return (
        <Layout style={{ minWidth: "100vw" }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
            </Header>
            <Content style={{ padding: '0 24px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: "100vh",
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Row justify="space-between" align="top">
                        <Col span={2}>
                            <ServerCard></ServerCard>
                        </Col>
                        <Col span={2}>
                            <ServerCard></ServerCard>
                        </Col>
                        <Col span={2}>
                            <ServerCard></ServerCard>
                        </Col>
                    </Row>
                </div>
            </Content>
            <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
                <Tooltip placement='left' title='新建服务器' arrow={mergedArrow}>
                    <FloatButton icon={<AppstoreAddOutlined />} />
                </Tooltip>
            </FloatButton.Group>
        </Layout>
    );
};

export default ServerPage;