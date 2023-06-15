import style from "./Users.module.scss"
import { selectorUserFilter } from "../../redux/Usertodo/selectors"
import { useSelector } from 'react-redux'
import User from "../UserCard/UserCard"


function Users() {

   const filterUsers = useSelector(selectorUserFilter);
   const filterUsersMap = filterUsers.map((user) => <User key={user.id} {...user} />)

   return (
      <div className={style.cards}>
         {filterUsers.length ? filterUsersMap : <div>Empty</div>}
      </div>
   )
}

export default Users