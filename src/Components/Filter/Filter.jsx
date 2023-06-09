import { useState, useEffect } from "react"
import "./Filter.scss"
import { useDispatch } from "react-redux"
import { setFilter } from "../../redux/Usertodo/usertodoSlice"

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

   useEffect(() => {
      dispatch(setFilter(sortValue))
   }, [sortValue])

   const onChangeValue = (e) => {
      setSortValue(e.target.value)
   }



   return (
      <div className="filter">
         <span>Sort</span>
         <select
            name="sort"
            id="sort"
            onChange={onChangeValue}
            value={sortValue}>
            {options.map(item =>
               <option key={item}>{item}</option>)}
         </select>
      </div>
   )
}

export default Filter