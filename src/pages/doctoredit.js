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
import { useDispatch, useSelector  } from 'react-redux';
import { RoleBasedRedirect } from '../Functions/RoleBasedRedirect';
import { useHistory } from 'react-router';



export const DoctorEdit = ({ match }) => {
	const { doctor , user } = useSelector((state) => ({ ...state }));
	RoleBasedRedirect(user)
	const { params } = match;
	const history = useHistory()
   const found = doctor.find((d) => {
		return d.id == params.id;
	});
	console.log(found.name);
	const { Option } = Select;
	
	const [editemail, setEditEmail] = useState(found.email);
	const [editnewDoctor, setEditNewDoctor] = useState(found.name);
	console.log(editnewDoctor);
	const [editphone, setEditPhone] = useState(found.phone);
	const [editgender, setEditGender] = useState(found.gender);
   const [editspecialisation, setEditSpecialisation] = useState(found.specialisation)
   const dispatch = useDispatch()
	const onFinish = (e) => (
		
		e.preventDefault(),
		dispatch({
			type: 'EDIT_DOCTOR',
			payload: {
			id: params.id,
			name: editnewDoctor,
			email: editemail,
			phone:editphone,
			gender:editgender,
			specialisation: editspecialisation
			} 
		}),
		history.push('/admin')
		)

const handleChangeGender = (value) => {
setEditGender(value);

};
const handleChangeSpec = (value) => {

setEditSpecialisation(value)
};
	const handleSubmit = (e) => {
		e.preventDefault();
      // dispatch({
      //    type: 'EDIT_DOCTOR',
      //    payload: {
      //       id: params.id,
      //       name: editedDetail
      //    }
      // })
		// history.push('/admin')


	};
	return (
		<div className='doc-form'>
							<Form
					// {...formItemLayout}
					
               // onFinish={onFinish}
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
						   value={editnewDoctor}
							onChange={(e) => setEditNewDoctor(e.target.value)}
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
						
						style={{ width: '100%' }}
						onChange={handleChangeSpec}
					>
                  <Option value="ps" disabled>Please Select</Option>
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
							value={editemail}
							onChange={(e) => {
								setEditEmail(e.target.value);
								
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
								width: '100%',
							}}
							value={editphone}
							onChange={(e) => setEditPhone(e.target.value)}
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
                  <Button type='primary' htmlType='submit' onClick={onFinish}>
						Register
					</Button>
               </Form.Item>
            

					
				</Form>
		</div>
	);
};

export default DoctorEdit;
