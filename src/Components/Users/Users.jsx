import style from "./Users.module.scss"
import UserCard from "../UserCard/UserCard"
import { useGetUserTodosQuery } from "../../redux/userTodoApi"


function Users() {
   const { data, isError, isSuccess, isLoading } = useGetUserTodosQuery()


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
            {data.map((user) => <UserCard key={user.id}  {...user} />)}
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