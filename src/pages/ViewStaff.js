import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../components/adminNav';
import NavBar from '../components/navBar';
import Listitem from '../components/Listitem';
import '../css/staff.css';
import '../css/admin.css';
import '../css/index.css';
import '../css/listitem.css';
import { RoleBasedRedirect } from '../Functions/RoleBasedRedirect';
const ViewStaff = () => {
	
	const { staff,user } = useSelector((state) => ({ ...state }));
	RoleBasedRedirect(user)

	return (
		<div>
			<AdminNav select={'3'}></AdminNav>
			<div className='card-main'>
				
					{staff.map((staff) => (
						<div className='cardSingle'>
							<Listitem key={staff.name} person={staff}></Listitem>
						</div>
					))}
				
			</div>
		</div>
	);
};
export default ViewStaff;

