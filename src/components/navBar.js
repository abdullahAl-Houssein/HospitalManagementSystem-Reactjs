import React, { useState } from 'react';
import { Menu } from 'antd';
import {
	LogoutOutlined 
	,
	AppstoreOutlined,
	UserOutlined ,
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;

const NavBar = () => {
	const history = useHistory();
	const dispatch = useDispatch()
	const { user } = useSelector((state) => ({ ...state }));
	const [current, setCurrent] = useState('');

	const handleCLick = () => (
		dispatch({
			type: 'LOG_OUT',
			payload: null
			
		})
		,
		history.push('/')		     
		)

	return (
		<Menu className='antt'
		style={{
			background: '#028CFF' 
		}}
			selectedKeys={[current]}
			mode='horizontal'
			className='d-flex justify-content-end'
		>
			
			{!user && (
				<Menu.Item key='login' icon={<AppstoreOutlined />} style={{color: 'white'}}>
					<span>Login</span>
				</Menu.Item>
			)}

			{user && (
				<Menu.Item
					key='user'
					icon={<UserOutlined />}
					style={{color: 'white'}}
				> <span>{user ? user.name : 'user'} </span>
				</Menu.Item>
				
			)}
			{user && (
			<Menu.Item key='Logout' style={{color: 'white'}} icon={	<LogoutOutlined/> 
			}>
				<span onClick={handleCLick} >Logout</span>
			</Menu.Item>)}
		</Menu>
	);
};
export default NavBar;
