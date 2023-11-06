import React, {useState} from 'react';
import '../css/admin.css';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
	MailOutlined,
	UsergroupAddOutlined,
	UnorderedListOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AdminNav = (prop) => {
   const [current, setCurrent] = useState(prop.select)
	const handleClick = (e) => {
      console.log(e.key);
      console.log(prop);
   }
	return (
		<>
			{/* <div className='sideNav'>
				<Menu
               style={{ width: 256 }}
					mode='inline'
               onClick={handleClick} 
               defaultOpenKeys={['sub1']}
               selectedKeys={current}    
				>
					<SubMenu key='sub1' icon={<SettingOutlined />} title='Doctors'>
						<Menu.Item key='1'><Link style={{
                     color:'white'
                  }}to='/admin'>Add Doctors</Link></Menu.Item>
						<Menu.Item key='2'><Link style={{
                     color:'white'
                  }} to='/admin/doctor'>View Doctors</Link></Menu.Item>
					</SubMenu>
					<SubMenu key='sub2' icon={<SettingOutlined />} title='Staff'>
						<Menu.Item key='3'><Link style={{
                     color:'white'
                  }} to='/admin/staff/add'>Add Staff</Link></Menu.Item>
						<Menu.Item key='4'><Link style={{
                     color:'white'
                  }} to='/admin/staff/view'>View Staff</Link></Menu.Item>
					</SubMenu>
				</Menu>
				{/* <Link className='add-doc-sidenav'>Add Doctor</Link>
            <Link>View Doctors</Link>
            <Link>Add Staff</Link>
            <Link>View Staff</Link>}
			</div> */}
         <Menu
         style={{
            position: 'relative',
            height: '100px',
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: '5px',
            width: '99%',
            borderRadius: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            
         }}
			selectedKeys={current}
			mode='horizontal'
			className='d-flex '
		>
			
         <Menu.Item className= 'icon-1'  key='1' icon={<UsergroupAddOutlined />}>
					<Link to='/admin'><span>Add Doctor</span></Link>
				</Menu.Item>
			<Menu.Item className= 'icon-2' key='2' icon={<UnorderedListOutlined />}>
				<Link to='/admin/doctor'>Doctors</Link>
			</Menu.Item>
         <Menu.Item className= 'icon-4' key='4' icon={<UsergroupAddOutlined />}>
				<Link to='/admin/staff/add'>Add Staff</Link>
			</Menu.Item>
         <Menu.Item className= 'icon-3' key='3' icon={<UnorderedListOutlined />}>
				<Link to='/admin/staff'>Staff</Link>
			</Menu.Item>



			
		</Menu>
		</>
	);
};
export default AdminNav;
