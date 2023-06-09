import { selectorUserFilter } from "../../redux/Usertodo/selectors"
import { useSelector } from 'react-redux'
import User from "../UserCard/UserCard"
import "./Users.scss"


function Users() {
   const filterUsers = useSelector(selectorUserFilter);

   return (
      <div className='cards'>
         {filterUsers.length < 1 ? <div>Empty</div> : filterUsers.map((user) => <User key={user.id} {...user} />)}
      </div>
   )
}

export default Users