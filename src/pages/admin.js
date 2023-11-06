import React, { useState, useEffect } from 'react';
import NavBar from '../components/navBar';
import '../css/staff.css';
import '../css/admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { RoleBasedRedirect } from '../Functions/RoleBasedRedirect';
import { Link } from 'react-router-dom';
import Listitem from '../components/Listitem';
import AdminNav from '../components/adminNav';
import DoctorAdd from '../components/admincomp/DoctorAdd';

const Admin = ({history}) => {
	
	const { doctor , user} = useSelector((state)=> ({...state}))

	RoleBasedRedirect(user)




	return (
		<>
			
         <AdminNav select={'1'}/>
         <DoctorAdd></DoctorAdd>

		</>
	);
};
export default Admin;
