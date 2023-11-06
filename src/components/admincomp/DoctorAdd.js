import React, { useState, useEffect } from 'react';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
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
import '../../css/staff.css';
import { useHistory } from 'react-router';
import '../../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Listitem from '../Listitem';
const { Option } = Select;

const DoctorAdd = () => {
	const [email, setEmail] = useState('');
	const [newDoctor, setNewDoctor] = useState('');
	const [phone, setPhone] = useState();
	const [gender, setGender] = useState('');
	const [specialisation, setSpecialisation] = useState('');

	const { doctor } = useSelector((state) => ({ ...state }));
	const dispatch = useDispatch();
	const [doctors, setDoctors] = useState([]);

	// const RegistrationForm = () => {
	//    const [form] = Form.useForm();

	//    const onFinish = (e) => {
	//       console.log('sd');
	//       e.preventDefault();
	//       dispatch({
	//          type: 'ADD_DOCTOR',
	//          payload: {
	//             id: doctor.length + 1,
	//             name: newDoctor,
	//             email: email,
	//             phone:phone,
	//             gender:gender,
	//             specialisation: specialisation
	//          },
	//       });

	//    };

	const history = useHistory()
	const onFinish = (e) => {
		e.preventDefault();
		if (
			newDoctor === '' ||
			email === '' ||
			phone === '' ||
			gender === '' ||
			specialisation === ''
		) {
			toast.error('Please fill the form');
		} else {
			dispatch({
				type: 'ADD_DOCTOR',
				payload: {
					id: doctor.length + 1,
					name: newDoctor,
					email: email,
					phone: phone,
					gender: gender,
					specialisation: specialisation,
					role: 'doctor',
				},
			});
			history.push('/admin/doctor');
			toast.success('Successfully created')
		}
	};
	const handleChangeGender = (value) => {
		setGender(value);
	};
	const handleChangeSpec = (value) => {
		setSpecialisation(value);
	};

	return (
		<div className='doctorAdd'>
			<div className='doc-form'>
				{/* <h1 className='titleAdd'>ADD DOCTOR</h1>
			<Input
				size='large'
				placeholder='Add Doctor'
				prefix={<UserAddOutlined />}
				className='addPatient'
				suffix={
					<PlusOutlined
						style={{ backgroundColor: '' }}
						onClick={handleSubmit}
					/>
				}
				value={newDoctor}
				onChange={(e) => setNewDoctor(e.target.value)}
			/>
			{doctors.map((doc) => (
				<>
					<Listitem person={doc}></Listitem>
				</>
			))} */}
				<Form
					// {...formItemLayout}

					name='register'
					initialValues={{
						residence: ['zhejiang', 'hangzhou', 'xihu'],
						prefix: '86',
					}}
					scrollToFirstError
				>
					<Form.Item
						name='Name'
						label='Name'
						rules={[
							{
								required: true,
								message: 'Please input name!',
								whitespace: true,
							},
						]}
					>
						<Input
							style={{ borderRadius: '20px' }}
							value={newDoctor}
							onChange={(e) => setNewDoctor(e.target.value)}
						/>
					</Form.Item>
					<Form.Item
						name='Specialisation'
						label='Specialisation'
						rules={[
							{
								required: true,
								message: 'Please input your Specialisation',
								whitespace: true,
							},
						]}
					>
						<Select
							name='spec'
							style={({ width: '100%' }, { borderRadius: '20px' })}
							onChange={handleChangeSpec}
						>
							<Option value='ps' disabled>
								Please Select
							</Option>
							<Option value='neurologist'>neurologist</Option>
							<Option value='gynecologist'>gynecologist</Option>
							<Option value='dermatologist'>dermatologist</Option>
							<Option value='dentist'>dentist</Option>
							<Option value='cardiologist'>cardiologist</Option>
							<Option value='anesthesiologist'>anesthesiologist</Option>
						</Select>
					</Form.Item>
					<Form.Item
						name='email'
						label='E-mail'
						rules={[
							{
								type: 'email',
								message: 'The input is not valid E-mail!',
							},
							{
								required: true,
								message: 'Please input your E-mail!',
							},
						]}
					>
						<Input
							style={{ borderRadius: '20px' }}
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</Form.Item>

					<Form.Item
						name='phone'
						label='Phone Number'
						rules={[
							{
								required: true,
								message: 'Please input your phone number!',
							},
						]}
					>
						<Input
							// addonBefore={prefixSelector}
							style={
								({
									width: '100%',
								},
								{ borderRadius: '20px' })
							}
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</Form.Item>

					{/* <select
						placeholder='select your gender'
						value={gender}
						onChange={handleChange}
					>
						<option value='Male' name='Male'>
							Male
						</option>
						<option value='Female' name='Female'>
							Female
						</option>
						<option value='Other' name='Other'>
							Other
						</option>
					</select> */}
					<Form.Item
						label='Gender'
						name='Gender'
						rules={[
							{
								required: true,
								message: 'Please select your gender!',
							},
						]}
					>
						<Select
							name='g'
							style={({ width: 120 }, { borderRadius: '20px' })}
							onChange={handleChangeGender}
						>
							<Option value='ps' disabled>
								Please Select
							</Option>
							<Option value='Male'>Male</Option>
							<Option value='Female'>Female</Option>
							<Option value='Other'>Other</Option>
						</Select>
					</Form.Item>

					<Form.Item
						name='btn'
						rules={[
							{
								required: true,
								message: 'Please fill form',
								whitespace: true,
							},
						]}
					>
						<Button
							style={{ borderRadius: '20px' }}
							type='primary'
							htmlType='submit'
							onClick={onFinish}
						>
							Add Doctor
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default DoctorAdd;
