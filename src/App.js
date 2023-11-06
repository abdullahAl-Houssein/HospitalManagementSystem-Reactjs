import React , {useEffect} from "react";
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Login from "./pages/login";
import { useDispatch } from "react-redux";
import Staff from "./pages/staff";
import Doctor from "./pages/doctor";
import Admin from "./pages/admin";
import DoctorEdit from "./pages/doctoredit";
import ShowDoc from "./components/admincomp/showDoc";
import AddStaff from "./pages/AddStaff";
import ViewStaff from "./pages/ViewStaff";
import NavBar from "./components/navBar";
import StaffEdit from "./pages/StaffEdit";
import ViewPatient from "./pages/ViewPatient";
import PatientEdit from "./pages/EditPatient";
import './css/index.css'

const App = () => {
 
  

  return (
    <>
    <NavBar></NavBar>
    <Switch>
    <Route exact path='/'component={Login}></Route>
    <Route exact path='/staff'component={Staff}></Route>
    <Route exact path='/staff/patient' component={ViewPatient}></Route>
    <Route exact path='/staff/patient/edit/:id' component={PatientEdit}></Route>
    <Route exact path='/doctor'component={Doctor}></Route>
    <Route exact path='/admin'component={Admin}></Route>
    <Route exact path='/admin/doctor/edit/:id' component={DoctorEdit}></Route>
    <Route exact path='/admin/doctor' component={ShowDoc}></Route>
    <Route exact path='/admin/staff/add' component={AddStaff}></Route>
    <Route exact path='/admin/staff/edit/:id' component={StaffEdit}></Route>
    <Route exact path='/admin/staff' component={ViewStaff}></Route>
    </Switch>
   </> 


        
  )
}

export default App;
