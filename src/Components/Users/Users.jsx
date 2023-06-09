import { useEffect, useState } from "react"
import { selectorFilter, selectorUserFilter, selectoruserTodo } from "../../redux/Usertodo/selectors"
import { useDispatch, useSelector } from 'react-redux'
import { editUser } from "../../redux/Usertodo/usertodoSlice"
import User from "../UserCard/UserCard"
import "./Users.scss"


function Users() {

   const dispatch = useDispatch()
   const filter = useSelector(selectorFilter)
   const filterUsers = useSelector(selectorUserFilter);



   return (
      <div className='cards'>

         {filterUsers.length < 1 ? <div>Empty</div> : filterUsers.map((user) => <User key={user.id} {...user} />)}
      </div>
   )
}

export default Users