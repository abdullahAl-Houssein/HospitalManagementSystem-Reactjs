import React from 'react'
import NavBar from '../components/navBar'
import AdminNav from '../components/adminNav'
import AddStaffComp from '../components/admincomp/AddStaff'
import { RoleBasedRedirect } from '../Functions/RoleBasedRedirect'
import { useSelector } from 'react-redux'
const AddStaff = () => {
   const {user} = useSelector((state)=> ({...state}))
   RoleBasedRedirect(user)
   return (
      <>
      
      <AdminNav select={'4'}></AdminNav>
      <AddStaffComp/>

         
      </>
   )
}

export default AddStaff
