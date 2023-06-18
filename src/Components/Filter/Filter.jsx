import style from "./Filter.module.scss"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/Usertodo/usertodoSlice"
import { options } from "../../data"
import { useGetUserTodosQuery } from "../../redux/userTodoApi"

function Filter() {
   const { data, isSuccess } = useGetUserTodosQuery()
   const dispatch = useDispatch()
   const [sortValue, setSortValue] = useState("");
   const filterDisable = isSuccess && data.length > 1;


   useEffect(() => {
      dispatch(setFilter(sortValue))
   }, [sortValue])



   return (
      <div className={style.filter}>
         <h4>Sort </h4>
         {!filterDisable && <span>Should be at least 2 item</span>}
         <select
            name="sort"
            id="sort"
            onChange={(e) => setSortValue(e.target.value)}
            value={sortValue}
            disabled={!filterDisable}
         >

            {Object.values(options).map(item =>
               <option key={item}>{item}</option>)}
         </select>
      </div>
   )
}

export default Filter