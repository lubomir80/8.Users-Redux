import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../../redux/Usertodo/usertodoSlice"
import Actions from "../Actions/Actions"
import Filter from "../Filter/Filter"
import "./Bar.scss"

function Bar() {
   // const dispatch = useDispatch()
   // const [name, setName] = useState({ name: "" })

   // const onChangeHandler = (e) => {
   //    const { value } = e.target
   //    setName((prev) => { return { ...prev, name: value } })
   // }

   // const onSubmitHandler = (e) => {
   //    e.preventDefault()
   // }

   return (
      <div className="bar">
         <div className="bar-content">
            <Actions />
            <Filter />

            {/* <form onSubmit={onSubmitHandler}>
               <div style={{ display: "flex", flexDirection: "column" }}>
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     name="name"
                     id="name"
                     onChange={onChangeHandler}
                     value={name.name}
                  />
               </div>
               <button onClick={() => dispatch(addUser(name.name))}>Add</button>
            </form> */}
         </div>
      </div>
   )
}

export default Bar