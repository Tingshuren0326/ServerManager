import { PlusOutlined } from '@ant-design/icons';
import {
    DrawerForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormSlider,
    ProFormSelect,
    ProFormText,
} from '@ant-design/pro-components';
import { Button, Space, message, Slider, Row, Col } from 'antd';
import { useEffect, useState } from 'react';

type ServerItem = {
    id: number
    title: string
    des: string
}


type ServerConfigProps = {
    drawShow: boolean,
    onOpenChage: Function,
    item: ServerItem
}

const ServerConfig: React.FC<ServerConfigProps> = ({ drawShow, item, onOpenChage }) => {

    const [maxPlayerCount, setMaxPlayerCount] = useState<number>(12);

    const [formWidth, setFormWidth] = useState<number>(document.documentElement.clientWidth - 300 || document.body.clientWidth - 300);

    const onMaxPlayerCountChanged = (playerCount: number) => {
        setMaxPlayerCount(playerCount);
    }

    const handleWindowsResize = () => {
        setFormWidth(document.documentElement.clientWidth - 300 || document.body.clientWidth - 300);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowsResize);
        return () => {
            window.removeEventListener('resize', handleWindowsResize);
        }
    }, [])

    return (
        <DrawerForm
            onOpenChange={(visibe) => {
                onOpenChage(visibe)
            }}
            title="新建服务器"
            open={drawShow}
            onFinish={async () => {
                return true;
            }}
            width={formWidth}
        >
            <ProForm.Group
                title="基础配置"
                collapsible
            >
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="server_name"
                        label="服务器名称"
                        placeholder="请输入服务器名称"
                        initialValue={"Server"}
                        rules={[{ required: true, message: '必须输入服务器名称' }]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        name="server_port"
                        label="服务器端口"
                        placeholder="请输入服务器端口"
                        initialValue={"7777"}
                        rules={[{ required: true, message: '必须输入服务器端口' }]}
                    />
                    <ProFormText
                        name="server_query_port"
                        label="服务器查询端口"
                        placeholder="请输入服务器查询端口"
                        initialValue={"27015"}
                        rules={[{ required: true, message: '必须输入服务器查询端口' }]}
                    />
                    <ProFormSelect
                        name="map"
                        width='md'
                        label="地图"
                        valueEnum={{
                            TheIsland_WP: '孤岛',
                            ScorchedEarth_WP: '焦土',
                            TheCenter_WP: '中心岛',
                            Aberration_WP: '畸变',
                            Extinction_WP: '灭绝',
                            Club: '酒馆'
                        }}
                        placeholder="请选择地图"
                        rules={[{ required: true, message: '请选择地图' }]}
                    />
                    <ProFormSlider
                        name="max_player_count"
                        label={"最大玩家数"}
                        width={'md'}
                        step={1}
                        min={12}
                        max={256}
                        marks={{
                            12: '12人',
                            32: '32人',
                            70: '70人',
                            100: '100人',
                            128: '128人',
                            256: '256人'
                        }}
                        placeholder="请设置服务器最大玩家数量"
                        initialValue={maxPlayerCount}
                    />
                </ProForm.Group>
            </ProForm.Group>

        </DrawerForm>
    );
}

export default ServerConfig;
