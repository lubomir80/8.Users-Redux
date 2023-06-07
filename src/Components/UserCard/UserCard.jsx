import "./UserCard.scss"
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai"


function UserCard({ name, avatar, age, status, actions }) {

   return (
      <article className='card'>
         <div className="options">
            <button ><AiTwotoneEdit /></button>
            <button ><AiOutlineClose /></button>
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
               <div className={status ? `status green` : `status red`}>{status ? "Online" : "Offline"}</div>
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