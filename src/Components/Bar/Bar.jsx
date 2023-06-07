import Actions from "../Actions/Actions"
import Filter from "../Filter/Filter"
import "./Bar.scss"

function Bar() {
   return (
      <div className="bar">
         <div className="bar-content">
            <Actions />
            <Filter />
         </div>
      </div>
   )
}

export default Bar