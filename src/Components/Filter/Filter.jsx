import { useState, useEffect } from "react"
import "./Filter.scss"
import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../../redux/Usertodo/usertodoSlice"
import { selectoruserTodo } from "../../redux/Usertodo/selectors"

function Filter() {
   const options = [
      "-",
      "Alphabetical (A to Z)",
      "Alphabetical (Z to A)",
      "Age (Low to Hight)",
      "Age (Hight to Low)"
   ]


   const dispatch = useDispatch()
   const [sortValue, setSortValue] = useState("");
   const users = useSelector(selectoruserTodo)
   const filterDisable = users.length > 1;


   useEffect(() => {
      dispatch(setFilter(sortValue))
   }, [sortValue])

   const onChangeValue = (e) => {
      setSortValue(e.target.value)
   }


   return (
      <div className="filter">
         <h4>Sort </h4>
         <span>{!filterDisable ? "Should be at least 2 item" : ""}</span>
         <select

            name="sort"
            id="sort"
            onChange={onChangeValue}
            disabled={!filterDisable}
            value={sortValue}>
            {options.map(item =>
               <option key={item}>{item}</option>)}
         </select>
      </div>
   )
}

export default Filter