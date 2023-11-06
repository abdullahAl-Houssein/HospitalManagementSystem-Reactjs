import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, InputNumber, Button } from 'antd';

import '../../css/staff.css';
import '../../css/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const PatientAdd = () => {
	const history = useHistory()
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState();
	const [phone, setPhone] = useState();
	const [description, setDescription] = useState('');
	const { patient } = useSelector((state) => ({ ...state }));
	const validateMessages = {
		required: '${label} is required!',
		types: {
			email: '${label} is not a valid email!',
			number: '${label} is not a valid number!',
		},
		number: {
			range: '${label} must be between ${min} and ${max}',
		},
	};
	const layout = {
		labelCol: {
			span: 4,
		},
		wrapperCol: {
			span: 18,
		},
	};
	const onFinish = (values) => {
		if (
			name === '' ||
			email === '' ||
			age === '' ||
			phone === '' ||
			
			description === ''
		) { toast.error('Please fill the form');
	} else {
		dispatch({
			type: 'PATIENT_ADDED',
			payload: {
				id: patient.length + 1,
				name: name,
				age: age,
				email: email,
				phone: phone,
				description: description,
			},
		});
		history.push('/staff/patient');
		toast.success('Successfully created')
	}
	};

	return (
		
      <div className='doc-form'>
		<div className='doctorAdd'>
			<Form
				{...layout}
				name='nest-messages'
				validateMessages={validateMessages}
			>
				<Form.Item
				
					name={['user', 'name']}
					label='Name'
					rules={[
						{
							required: true,
						},
					]}
				>
					<Input value={name} onChange={(e) => setName(e.target.value)} style={{borderRadius:'20px'}}/>
				</Form.Item>
				<Form.Item
					name={['user', 'email']}
					label='Email'
					rules={[
						{
							type: 'email',
						},
					]}
				>
					<Input value={email} onChange={(e) => setEmail(e.target.value)} style={{borderRadius:'20px'}}/>
				</Form.Item>
				<Form.Item
					name={['phone', 'age']}
					label='Age'
					rules={[
						{
							type: 'string',
							min: 0,
							max: 99,
						},
					]}
				>
					<Input value={age} onChange={(e) => setAge(e.target.value)} style={{borderRadius:'20px'}}/>
				</Form.Item>
				<Form.Item name={['user', 'phone']} label='phone'>
					<Input value={phone} onChange={(e) => setPhone(e.target.value)} style={{borderRadius:'20px'}}/>
				</Form.Item>
				<Form.Item name={['user', 'Description']} label='Description'>
					<Input.TextArea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						style={{borderRadius:'20px'}}
					/>
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' htmlType='submit' onClick={onFinish} style={{borderRadius:'20px'}}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
      </div>
	);
};

export default PatientAdd;
