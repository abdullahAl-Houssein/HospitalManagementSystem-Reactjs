import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AdminNav from '../adminNav';
import NavBar from '../navBar';
import Listitem from '../Listitem';
import '../../css/staff.css';
import '../../css/admin.css';
import '../../css/index.css';
import '../../css/listitem.css'
import { RoleBasedRedirect } from '../../Functions/RoleBasedRedirect';

const ShowDoc = () => {
   const [doctors, setDoctors] = useState([]);
	const { doctor,user } = useSelector((state) => ({ ...state }));
	RoleBasedRedirect(user)
	


	return (
		<div>
			
			<AdminNav select={'2'}></AdminNav>
			<div className='card-main'>
				
					{doctor.map((doc) => (
						<div className='cardSingle'>
							<Listitem key={doc.name} person={doc}></Listitem>
						</div>
					))}
				
			</div>
		</div>
	);
};
export default ShowDoc;
