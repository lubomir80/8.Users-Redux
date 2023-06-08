import { usersTodo } from "../../redux/Usertodo/selectors"
import { useSelector } from 'react-redux'
import User from "../UserCard/UserCard"
import "./Users.scss"


function Users() {
   const users = useSelector(usersTodo)


   return (
      <div className='cards'>
         {users.length < 1 ? <div>Empty</div> : users.map((user) => <User key={user.id} {...user} />)}
      </div>
   )
}

export default Users