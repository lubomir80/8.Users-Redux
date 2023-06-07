import "./UserCard.scss"
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { removeUser } from "../../redux/Usertodo/usertodoSlice"


function UserCard({ id, name, avatar, age, status, actions }) {
   const dispatch = useDispatch()

   const removeHandler = (id) => {
      const check = confirm("Do you want delete the current card?");
      if (check) {
         dispatch(removeUser(id))
      } else {
         return
      }
   }


   return (
      <article className='card'>
         <div className="options">
            <button ><AiTwotoneEdit /></button>
            <button onClick={() => removeHandler(id)}><AiOutlineClose /></button>
         </div>
         <div className="article" >
            <div className="box flex-3">
               <div className="img-box">
                  <img src={avatar} alt={name} />
               </div>
               <div className="grup flex-1">
                  <p className="grup-name">Name</p>
                  <p className="name">{name}</p>
               </div>
            </div>
            <div className="grup flex-1">
               <p className="grup-name">Age</p>
               <div className="age">{age} y.o.</div>
            </div>
            <div className="grup flex-1">
               <p className="grup-name">Status</p>
               <div className={status === "Yes" ? `status green` : `status red`}>{status === "Yes" ? "Online" : "Offline"}</div>
            </div>
            <div className="grup flex-3">
               <p className="grup-name">Actions</p>
               <div className="actions">{actions}</div>
            </div>
         </div>

      </article>
   )
}

export default UserCard