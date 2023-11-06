import { useHistory } from "react-router"

export const RoleBasedRedirect = (user) => {
   const history = useHistory()
   // if(user.name === 'staff' || user.name === 'doctor' || user.name === null ) (
   //    history.push('/')
   // )
   if(user.name === 'staff') {
      history.push('/staff')
   }
   if(user.name === 'doctor') {
      history.push('/doctor')
   }
   if(user === null) {
      history.push('/')
   }
}	
export const RoleBasedRedirectDoc = (user) => {
   const history = useHistory()
   // if(user.name === 'staff' || user.name === 'doctor' || user.name === null ) (
   //    history.push('/')
   // )
   if(user.name === 'staff') {
      history.push('/staff')
   }
   if(user.name === 'admin') {
      history.push('/admin')
   }
   if(user === null) {
      history.push('/')
   }
}
export const RoleBasedRedirectStaff = (user) => {
   const history = useHistory()
   // if(user.name === 'staff' || user.name === 'doctor' || user.name === null ) (
   //    history.push('/')
   // )
   if(user.name === 'doctor') {
      history.push('/doctor')
   }
   if(user.name === 'admin') {
      history.push('/admin')
   }
   if(user === null) {
      history.push('/')
   }
}		