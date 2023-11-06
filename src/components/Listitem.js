import React from 'react';
import '../css/listitem.css';
import { Input, Button } from 'antd';
import { Card } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import {
	DeleteOutlined,
	EditOutlined,
	UserDeleteOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const Listitem = (props) => {
	const dispatch = useDispatch();

	const handleClick = (id, role) => {
		console.log(id);
		dispatch({
			type: `REMOVE_${role}`,
			payload: id,
		});
	};

	return (
		<div className='card-container'>
			{/* <div className='card-item'>
				<span className='title-doc'>{props.person.name}</span>
				<div className='btn-wrap'>
					<Link className='edit-icon' to={`/doctor/edit/${props.person.id}`}>
						<span>
							<EditOutlined />
						</span>
					</Link>
					<span className='delete-icon'>
						<UserDeleteOutlined onClick={() => handleClick(props.person.id)} />
					</span>
				</div>
			</div> */}
			<Card
				title={<span style={{ color: '#39A2DB' }}>{props.person.name}</span>}
				extra={
					<span>
						{props.person.gender === 'Female' && 
							<img
								style={{ height: '50px', width: '50px' }}
								src='https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/000000/external-doctor-labour-day-vitaliy-gorbachev-flat-vitaly-gorbachev.png'
							/> ||
						<img
						style={{ height: '50px', width: '50px' }}
						src='https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-doctor-plastic-surgery-justicon-flat-justicon.png'
					/>} 
						
					</span>

				}
				style={{ width: 300 }}
				className='card'
			>
				<p style={{ color: '#57CC99' }}> {props.person.specialisation && `Specialisation: ${props.person.specialisation}`}</p>
				<p style={{ color: '#57CC99' }}> {props.person.designation && `Designation: ${props.person.designation}`}</p>
				<p style={{ color: '#787A91' }}>Email: {props.person.email}</p>
				<p style={{ color: '#787A91' }}>Phone: {props.person.phone}</p>
				<div className='card-ftr'>
					<Link
						className='edit-icon'
						to={`${props.person.role}/edit/${props.person.id}`}
					>
						<EditOutlined style={{ paddingBottom: '6px' }} />
					</Link>

					<UserDeleteOutlined
						style={{
							paddingLeft: '10px',
							color: '#E05D5D',
						}}
						onClick={() => handleClick(props.person.id, props.person.role)}
					/>
				</div>
			</Card>
		</div>
	);
};
export default Listitem;
