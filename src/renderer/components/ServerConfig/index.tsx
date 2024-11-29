import { PlusOutlined } from '@ant-design/icons';
import {
    DrawerForm,
    ProForm,
    ProFormDateRangePicker,
    ProFormDigit,
    ProFormSlider,
    ProFormSelect,
    ProFormText,
    ProFormSwitch,
    ProFormUploadButton,
    CellEditorTable,
} from '@ant-design/pro-components';
import { Button, Input, Space, message, Slider, Row, Col } from 'antd';
import { title } from 'process';
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

type ModDataSourceType = {
    id?:string;
    name?:string;
    size?:string;
    last_update:string;
    state:string;
}

const ServerConfig: React.FC<ServerConfigProps> = ({ drawShow, item, onOpenChage }) => {

    const [maxPlayerCount, setMaxPlayerCount] = useState<number>(12);

    const [formWidth, setFormWidth] = useState<number>(document.documentElement.clientWidth - 300 || document.body.clientWidth - 300);

    const [culturDir, setCulturDir] = useState<string>();

    const onMaxPlayerCountChanged = (playerCount: number) => {
        setMaxPlayerCount(playerCount);
    }

    const onOpenCultureDir = (cultureDir: string) => {
        if (window.mainApi) {
            window.mainApi.openDirectoryDialog("集群存储目录").then((dir) => {

            });
        }
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
            width={920}
            style={{
                padding: 24,
            }}
        >
            <ProForm.Group
                title="基础配置"
                collapsible
            >
                <ProForm.Group>
                    <ProFormText
                        width="lg"
                        name="server_name"
                        label="服务器名称"
                        placeholder="请输入服务器名称"
                        initialValue={"Server"}
                        rules={[{ required: true, message: '必须输入服务器名称' }]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormText
                        width="md"
                        name="server_port"
                        label="服务器端口"
                        placeholder="请输入服务器端口"
                        initialValue={"7777"}
                        rules={[{ required: true, message: '必须输入服务器端口' }]}
                    />
                    <ProFormText
                        width="md"
                        name="server_query_port"
                        label="服务器查询端口"
                        placeholder="请输入服务器查询端口"
                        initialValue={"27015"}
                        rules={[{ required: true, message: '必须输入服务器查询端口' }]}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSelect
                        name="map"
                        width='lg'
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
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSlider
                        name="max_player_count"
                        label={"最大玩家数"}
                        width='xl'
                        filedConfig={{ ignoreWidth: false }}
                        step={1}
                        min={12}
                        max={256}
                        marks={{
                            12: '12',
                            32: '32',
                            70: '70',
                            100: '100',
                            128: '128',
                            256: '256'
                        }}
                        placeholder="请设置服务器最大玩家数量"
                        initialValue={maxPlayerCount}
                    />
                </ProForm.Group>
                <ProForm.Group>
                    <ProFormSwitch
                        name='enable_cluster'
                        label='启用集群'
                        placeholder="是否启用集群"
                        initialValue={false}
                    />
                    <ProFormText
                        name="clusterid"
                        label="集群ID"
                        placeholder="请输入集群ID"
                        initialValue={"clusterid"}
                    />
                    <ProFormText
                        name="ClusterDirOverride"
                        label="集群路径"
                        placeholder="请输入集群路径"
                        initialValue={"D:/AsaData/ClusterData"}
                    >
                        <Space.Compact style={{ width: '100%' }}>
                            <Input defaultValue="D:/AsaData/ClusterData" />
                            <Button type="primary">
                                选择路径
                            </Button>
                        </Space.Compact>
                    </ProFormText>
                </ProForm.Group>
                <ProForm.Group>
                    <CellEditorTable<ModDataSourceType>
                        headerTitle="Mod列表"
                        columns={[
                            {
                                title: 'Id',
                                dataIndex:'id',
                                width: '20%'
                            },
                            {
                                title: '名称',
                                dataIndex:'name',
                                width: '20%'
                            },
                            {
                                title: '大小',
                                dataIndex: 'size',
                                width: '20%'
                            },
                            {
                                title: '最后更新时间',
                                dataIndex: 'last_update',
                                width: '20%'
                            },
                            {
                                title: '状态',
                                dataIndex: 'state',
                                width: '20%'
                            }
                        ]}
                        scroll={{
                            y:480
                        }}
                        value={[
                            {
                                id: '1111111',
                                name: 'mod1',
                                size: '743MB',
                                last_update: '2024-05-08 20:06:08',
                                state : '未下载'
                            },
                            {
                                id: '22222',
                                name: 'mod2',
                                size: '1.5GB',
                                last_update: '2024-11-08 18:53:08',
                                state : '未下载'
                            },
                            {
                                id: '3333',
                                name: 'mod3',
                                size: '2.44GB',
                                last_update: '2024-10-07 18:53:08',
                                state : '未下载'
                            }
                            ,
                            {
                                id: '444444444',
                                name: 'mod4',
                                size: '128.6MB',
                                last_update: '2024-10-31 18:53:08',
                                state : '未下载'
                            }
                        ]}
                    />
                </ProForm.Group>
            </ProForm.Group>

        </DrawerForm>
    );
}

export default ServerConfig;
