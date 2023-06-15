import style from "./Bar.module.scss"
import Actions from "../Actions/Actions"
import Filter from "../Filter/Filter"

function Bar() {
   return (
      <div className={style.bar}>
         <Actions />
         <Filter />
      </div>
   )
}

export default Bar