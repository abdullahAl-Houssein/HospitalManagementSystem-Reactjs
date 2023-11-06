import React from 'react';

import '../css/patientlist.css';
import { Input, Button } from 'antd';
import { Card } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import {
	DeleteOutlined,
	EditOutlined,
	UserDeleteOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
const ListPatient = (props) => {
   const{user} = useSelector((state)=> ({...state}))
	const dispatch = useDispatch();

	const handleClick = (id) => {
		console.log(id);
		dispatch({
			type: `PATIENT_REMOVE`,
			payload: id,
		});
	};

	return (
		<div className='card2'>
			<Card title={<span style={{ color: '#39A2DB' }}>{props.person.name}</span>} extra={<img style={{ height: '60px', width: '60px',padding:'0%' }} src="https://img.icons8.com/bubbles/50/000000/patient-care.png"/>}>
         
				<p style={{ color: '#787A91' }}>Age: {props.person.age}</p>
				<p style={{ color: '#787A91' }}>email: {props.person.email}</p>
				<p style={{ color: '#787A91' }}>Phone: {props.person.phone}</p>
				<p style={{ color: '#787A91' }}>Description: {props.person.description}</p>
				{user.name === 'staff' && (
					<div className='card-ftr'>
						<Link
							className='edit-icon'
							to={`/staff/patient/edit/${props.person.id}`}
						>
							<EditOutlined style={{ paddingBottom: '6px' }}/>
						</Link>

						<UserDeleteOutlined
							style={{
								paddingLeft: '10px',
                        color: '#E05D5D'
							}}
							onClick={() => handleClick(props.person.id)}
						/>
					</div>
				)}
			</Card>
			{/* <Card
				title={<span>{props.person.name}</span>}
				// extra={
				// 	<Link className='edit-icon'  to={`/doctor/edit/${props.person.id}`}>
				// 		<EditOutlined style={{position:'absolute',left:'2px'}}/>
				// 	</Link>,
				// 	<Link style={{float:'left'}} to={`/doctor/edit/${props.person.id}`}>
				// 		<UserDeleteOutlined onClick={() => handleClick(props.person.id)} />
				// 	</Link>
				// }
				
			
				
				className='card patient-card'
			>
					
				<p>{props.person.specialisation}</p>
				<p>{props.person.designation}</p>
				<p>{props.person.email}</p>
				<p>{props.person.phone}</p>
				<div className='card-ftr'>
				<Link className='edit-icon'  to={`${props.person.role}/edit/${props.person.id}`}>
				<EditOutlined />
				</Link>
				
				<UserDeleteOutlined style={{
					paddingLeft: '10px'
				}} onClick={() => handleClick(props.person.id,props.person.role)} />
				</div>
			</Card>  */}
		</div>
	);
};
export default ListPatient;
