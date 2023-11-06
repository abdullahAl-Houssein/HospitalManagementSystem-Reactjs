import React, { useState } from 'react';
import {
	Form,
	Input,
	Select,
	Button,
} from 'antd';
import '../../css/staff.css';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import '../../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
const { Option } = Select;

const AddStaff = () => {
	const history = useHistory()
	const [email, setEmail] = useState('');
	const [newStaff, setNewStaff] = useState('');
	const [phone, setPhone] = useState();
	const [gender, setGender] = useState('');
   const [designation, setDesignation] = useState('');
	const dispatch = useDispatch();
   const {staff} = useSelector((state)=>({...state}))
	


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
   const onFinish = (e) => {
         
            e.preventDefault();
				if (
					newStaff === '' ||
					email === '' ||
					phone === '' ||
					gender === '' ||
					designation === ''
				) { toast.error('Please fill the form');
			} else {
            dispatch({
               type: 'ADD_STAFF',
               payload: {
               id: staff.length + 1,
               name: newStaff,
               email: email,
               phone:phone,
               gender:gender,
               designation: designation,
					role:'staff'
            },
         });
			history.push('/admin/staff');
			toast.success('Successfully created')
		}
      }
	const handleChangeGender = (value) => {
		setGender(value);

	};
   const handleChangeSpec = (value) => {
		
      setDesignation(value)
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
					
               // onFinish={onFinish}
					name='register'
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
							value={newStaff}
							style={{borderRadius: '20px'}}
							onChange={(e) => setNewStaff(e.target.value)}
						/>
					</Form.Item>
               <Form.Item
						name='Designation'
						label='Designation'
						rules={[
							{
								required: true,
								message: 'Please input your Designation',
								whitespace: true,
							},
						]}
					>
					<Select
						
						style={{ width: '100%' }}
						onChange={handleChangeSpec}
					>
                  <Option value="ps" disabled>Please Select</Option>
						<Option value='Registered Nurse'>Registered nurse</Option>
                  <Option value='Liscensed Sractical Nurse'>Liscensed practical nurse</Option>
                  <Option value='Medical Student'>Medical student</Option>
                  <Option value='Pharmacist'>Pharmacist</Option>
                  <Option value='Dietitians'>Dietitians</Option>
                  <Option value='Occupational therapist'>Occupational therapist</Option>
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
						  style={{borderRadius: '20px'}}
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
							
							style={{
								width: '100%',borderRadius: '20px'
							}}
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
               ]}>


					<Select
						
						style={{ width: 120 }}
						onChange={handleChangeGender}
					>
                  <Option value="ps" disabled>Please Select</Option>
						<Option value='Male'>Male</Option>
						<Option value='Female'>Female</Option>
						<Option value='Other'>Other</Option>
					</Select>
               </Form.Item>
               <Form.Item rules={[
							{
								required: true,
								message: 'Please fill form',
								whitespace: true,
							},
						]}>
                  <Button type='primary' htmlType='submit' onClick={onFinish} style={{borderRadius: '20px'}}>
						Add Staff
					</Button>
               </Form.Item>
            

					
				</Form>
			</div>
		</div>
	);
};

export default AddStaff;
