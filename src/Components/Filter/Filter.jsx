import style from "./Filter.module.scss"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/Usertodo/usertodoSlice"
import { selectoruserTodo } from "../../redux/Usertodo/selectors"
import { options } from "../../data"

function Filter() {

   const dispatch = useDispatch()
   const users = useSelector(selectoruserTodo)
   const [sortValue, setSortValue] = useState("");
   const filterDisable = users.length > 1;


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