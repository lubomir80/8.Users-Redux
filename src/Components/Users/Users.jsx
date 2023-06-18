import style from "./Users.module.scss"
import { selectorUserFilter } from "../../redux/Usertodo/selectors"
import { useSelector } from 'react-redux'
import UserCard from "../UserCard/UserCard"
import { useGetUserTodosQuery } from "../../redux/userTodoApi"


function Users() {

   const { data, isError, isSuccess, isLoading } = useGetUserTodosQuery()
   console.log(data, isLoading)

   // const filterUsers = useSelector(selectorUserFilter);
   // const filterUsersMap = filterUsers.map((user) => <User key={user.id} {...user} />)


   if (isLoading) {
      return (
         <div className={style.cards}>
            <div>Loading...</div>
         </div>
      )
   }

   if (isSuccess) {
      return (
         <div className={style.cards}>
            {data.map((user, index) => <div key={user.id}>
               helo {index + 1}
            </div>)}
         </div>
      )
   }
   if (isError) {
      return (
         <div className={style.cards}>
            <div>is Error</div>
         </div>
      )
   }
}

export default Users