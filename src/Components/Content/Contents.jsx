import style from "./Content..module.scss"
import Bar from "../Bar/Bar"
import Users from "../Users/Users"


function Contents() {
   return (
      <main className={style.content}>
         <Bar />
         <Users />
      </main>
   )
}

export default Contents