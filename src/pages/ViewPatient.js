import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StaffNav from '../components/admincomp/StaffNav';
import ListPatient from '../components/ListPatient';
import '../css/staff.css';
import '../css/admin.css';
import '../css/index.css';
import { RoleBasedRedirectStaff } from '../Functions/RoleBasedRedirect';


const ViewPatient = () => {
	const { patient , user} = useSelector((state) => ({ ...state }));
   RoleBasedRedirectStaff(user)
   


	return (
		<>
			<StaffNav select={'2'}></StaffNav>
			<div className='doctorAdd'>
				<div className='card-container' >
					{patient.length ? patient.map((p) => (
						<div style={{marginTop: '50px'}}>
							<ListPatient key={p.name} person={p}></ListPatient>
						</div>
					)) : (<h1 className='titleAdd'>No Patients currently</h1>) }
				</div>
			</div>
		</>
	);
};
export default ViewPatient;