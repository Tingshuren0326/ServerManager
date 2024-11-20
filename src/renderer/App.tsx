import {
	QqOutlined,
} from '@ant-design/icons';

import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import { ProConfigProvider } from '@ant-design/pro-provider';
import { Descriptions, Layout } from 'antd';

const { Header } = Layout;

import { useState, useEffect, useRef } from 'react';
import { Conf } from 'electron-conf/renderer';
import axios from 'axios';

import defaultProps from './_defaultProps';
import './App.css'
import Server from '@renderer/pages/Server';
import GridCard from './components/GridCard';

function App(): JSX.Element {
	const [pathname, setPathname] = useState("/server");

	const [currentTime, setCurrentTime] = useState(new Date());

	const [publicIP, setPublicIP] = useState('0.0.0.0');

	const [version, setVersion] = useState('V0.0.0');

	const intervalTimeRef = useRef<number>();

	const intervalIPRef = useRef<number>();

	const appConfig = new Conf();

	const getPublicIP = () => {
		axios.get('http://whatismyip.akamai.com/')
			.then(res => {
				setPublicIP(res.data);
				appConfig.set('publicIP', res.data);
			}).catch(err => {
				console.log("UnKnow");
			})
	};

	const getVersion = async () => {
		appConfig.get('version', 'V0.0.0').then(version => {
			setVersion(version as string);
		})
	};

	getVersion();

	useEffect(() => {
		intervalTimeRef.current = window.setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		intervalIPRef.current = window.setInterval(() => {
			getPublicIP();

		}, 1000);

		return () => {
			clearInterval(intervalTimeRef.current);
			clearInterval(intervalIPRef.current);
		}
	}, []);

	const content = (
		<Descriptions size="small" column={3} >
			<Descriptions.Item label="版本"><a>{version}</a></Descriptions.Item>
			<Descriptions.Item label="时间"><a>{currentTime.toLocaleString()}</a></Descriptions.Item>
			<Descriptions.Item label="公网IP"><a>{publicIP}</a></Descriptions.Item>
		</Descriptions>
	);

	return (
		<ProConfigProvider dark={false}>
			<ProLayout
				token={{
					bgLayout: '#212529',
					sider: {
						colorMenuBackground: '#212529',
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
						colorBgPageContainer: 'Transparent',
					}
				}}
				theme='dark'
				contentStyle={{ backgroundColor: 'aliceblue' }}
				style={{ backgroundColor: 'aliceblue', width: '100vw' }}
				{...defaultProps}
				location={{
					pathname,
				}}
				title={'Server Manager'}
				logo={'./common/images/icon.png'}
				layout='side'
				disableMobile
				fixedHeader={true}
				siderWidth={216}
				locale={'zh-CN'}
				bgLayoutImgList={[
					{
						src: './common/images/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
						left: 85,
						bottom: 100,
						height: '303px',
					},
					{
						src: './common/images/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
						bottom: -68,
						right: -45,
						height: '303px',
					},
					{
						src: './common/images/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
						bottom: 0,
						left: 0,
						width: '331px',
					},
				]}
				actionsRender={(props) => {
					if (props.isMobile) return [];
					return [
						<QqOutlined key="GithubFilled" style={{ textAlign: 'center', color: '#dee2e6' }} />,
					];
				}}
				menuFooterRender={(props) => {
					if (props?.collapsed) return undefined;
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
					);
				}}
				onMenuHeaderClick={(e) => {
					console.log(e)
				}}
				menuItemRender={(item, dom) => (
					<a
						onClick={() => {
							setPathname(item.path || '/server');
						}}
					>
						{dom}
					</a>
				)}
			>
				<Header className='win-title-bar'></Header>
				<PageContainer style={{ backgroundColor: 'aliceblue' }}>
					<Server/>
				</PageContainer>
			</ProLayout>
		</ProConfigProvider>
	)
}

export default App
