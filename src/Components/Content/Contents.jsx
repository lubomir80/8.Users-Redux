import Bar from "../Bar/Bar"
import Modal from "../Modal/Modal"
import Users from "../Users/Users"
import "./Content.scss"


function Contents() {
   return (
      <main className="content">
         <Bar />
         <Users />
         <Modal />
      </main>
   )
}

export default Contents