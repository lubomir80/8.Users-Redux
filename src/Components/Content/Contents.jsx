import Bar from "../Bar/Bar"
import Users from "../Users/Users"
import "./Content.scss"


function Contents() {
   return (
      <main className="content">
         <Bar />
         <Users />
      </main>
   )
}

export default Contents