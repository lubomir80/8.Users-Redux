import style from "./Users.module.scss"
import UserCard from "../UserCard/UserCard"
import { useGetUserTodosQuery } from "../../redux/userTodoApi"
import { useSelector } from "react-redux"
import { selectorUserFilter } from "../../redux/Usertodo/selectors"



function Users() {
   const { data, isError, isSuccess, isLoading } = useGetUserTodosQuery()
   const filteredData = useSelector(state => selectorUserFilter(state, data))



   if (isLoading) {

      return (
         <div className={style.cards}>
            <div className={style.loaferRing}></div>
            <div>Loading...</div>
         </div>
      )
   }

   if (isSuccess) {

      return (
         <div className={style.cards}>
            {filteredData.map((user) => <UserCard key={user.id}  {...user} />)}
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