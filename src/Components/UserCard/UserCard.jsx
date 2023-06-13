import "./UserCard.scss"
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { editUser, removeUser } from "../../redux/Usertodo/usertodoSlice"
import { useModal } from "../../hook/useModal"
import Modal from "../Modal/Modal"


function UserCard({ id, name, avatar, age, status, actions }) {
   const dispatch = useDispatch()
   const [state, isAddModalOpen, isAddModalClose] = useModal()

   const removeHandler = (id) => {
      const check = confirm("Do you want delete the current card?");
      if (check) {
         dispatch(removeUser(id))
      } else {
         return
      }
   }

   const editValue = { id, name, avatar, age, status, actions }
   const image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s"

   function check(img) {
      let http = "https://"
      return avatar = img.includes(http) ? img : image;
   }
   check(avatar)




   return (
      <article className='card'>
         <div className="options">
            <button onClick={() => isAddModalOpen()}><AiTwotoneEdit /></button>
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
               <p className="age">{age} y.o.</p>
            </div>
            <div className="grup flex-1">
               <p className="grup-name">Status</p>
               <p className={status === "Yes" ? `status green` : `status red`}>{status === "Yes" ? "Online" : "Offline"}</p>
            </div>
            <div className="grup flex-3">
               <p className="grup-name">Actions</p>
               <p>{actions}</p>
            </div>
         </div>
         {state &&
            <Modal
               close={isAddModalClose}
               onClickUser={editUser}
               editValue={editValue} />
         }
      </article>
   )
}

export default UserCard