import React, { useState, useEffect } from 'react';

import '../css/staff.css';
import '../css/index.css';
import PatientAdd from '../components/admincomp/patientAdd';
import StaffNav from '../components/admincomp/StaffNav';
import { RoleBasedRedirectStaff } from '../Functions/RoleBasedRedirect';
import { useSelector } from 'react-redux';
const Staff = () => {
	const {user } = useSelector((state => ({...state})))
	RoleBasedRedirectStaff(user)
	return (
		<>

				<StaffNav select='1'></StaffNav>
				<PatientAdd></PatientAdd>
				
		</>

	)	
};
export default Staff;
