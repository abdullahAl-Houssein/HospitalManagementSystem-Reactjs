import React, { useState } from 'react';
import {
	Form,
	Input,
	InputNumber,
	Cascader,
	Select,
	Row,
	Col,
	Checkbox,
	Button,
	AutoComplete,
} from 'antd';
import '../css/staff.css';
import '../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const PatientEdit = ({ match }) => {
	const { patient } = useSelector((state) => ({ ...state }));
	const { params } = match;
	const history = useHistory();
	const found = patient.find((d) => {
		return d.id == params.id;
	});
	console.log(found);
	const { Option } = Select;

	const [editemail, setEditEmail] = useState(found.email);
	const [editname, setEditname] = useState(found.name);
	const [editphone, setEditPhone] = useState(found.phone);
	const [editage, setEditAge] = useState(found.age);
	const [editdescription, setEditDescription] = useState(found.description);
	const dispatch = useDispatch();

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


	const onFinish = (values) => (
		console.log(values),
		
		dispatch({
			type: 'PATIENT_EDIT',
			payload: {
				id: params.id,
				name: editname,
				age: editage,
				email: editemail,
				phone: editphone,
				description: editdescription,
			},
		}),
      history.push('/staff')
      )



	return (
		<>
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
							<Input
								value={editname}
								onChange={(e) => setEditname(e.target.value)}
							/>
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
							<Input
								value={editemail}
								onChange={(e) => setEditEmail(e.target.value)}
							/>
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
							<Input
								value={editage}
								onChange={(e) => setEditAge(e.target.value)}
							/>
						</Form.Item>
						<Form.Item name={['user', 'phone']} label='phone'>
							<Input
								value={editphone}
								onChange={(e) => setEditPhone(e.target.value)}
							/>
						</Form.Item>
						<Form.Item name={['user', 'Description']} label='Description'>
							<Input.TextArea
								value={editdescription}
								onChange={(e) => setEditDescription(e.target.value)}
							/>
						</Form.Item>
						<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
							<Button type='primary' htmlType='submit' onClick={onFinish}>
								Save Changes
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</>
	);
};

export default PatientEdit;
