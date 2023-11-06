import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import '../css/index.css';
import { Input, Button } from 'antd';
import { UserAddOutlined, PlusOutlined } from '@ant-design/icons';
import '../css/staff.css';
import { useDispatch,useSelector } from 'react-redux';
import ListPatient from '../components/ListPatient';
import { RoleBasedRedirectDoc } from '../Functions/RoleBasedRedirect';
const Doctor = () => {
   const {patient,user} = useSelector(state => ({...state}))
	
	
	RoleBasedRedirectDoc(user)

	return (
		<>	
			<h1 className='titleAdd'>View Patients</h1>
			{ patient.length ? (patient.map(p => <ListPatient person={p}/>))  : (<h1 className='titleAdd'>No patient</h1>) }
			
		</>
	)
}	

export default Doctor;