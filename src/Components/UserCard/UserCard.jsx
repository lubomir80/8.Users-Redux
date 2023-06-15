import style from "./UserCard.module.scss"
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { editUser, removeUser } from "../../redux/Usertodo/usertodoSlice"
import { useModal } from "../../hook/useModal"
import Modal from "../Modal/Modal"
import { imageSubstitute } from "../../data"


function UserCard({ id, name, avatar, age, status, actions }) {
   const dispatch = useDispatch()
   const [state, isAddModalOpen, isAddModalClose] = useModal()




   const removeHandler = (id) => {
      const check = confirm("Do you want delete the current card?");
      check && dispatch(removeUser(id))
   }

   const editValue = { id, name, avatar, age, status, actions }

   function check(img) {
      let http = "https://"
      return avatar = img.includes(http) ? img : imageSubstitute;
   }
   check(avatar)




   return (
      <article className={style.card}>
         <div className={style.options}>
            <button onClick={() => isAddModalOpen()}><AiTwotoneEdit /></button>
            <button onClick={() => removeHandler(id)}><AiOutlineClose /></button>
         </div>
         <div className={style.article} >
            <div className={`${style.box} ${style.flex3}`}>
               <div className={style.imgBox}>
                  <img src={avatar} alt={name} />
               </div>
               <div className={`${style.grup} ${style.flex1}`}>
                  <p className={style.grupName}>Name</p>
                  <p className={style.name}>{name}</p>
               </div>
            </div>
            <div className={`${style.grup} ${style.flex1}`}>
               <p className={style.grupName}>Age</p>
               <p className={style.age}>{age} y.o.</p>
            </div>
            <div className={`${style.grup} ${style.flex1}`}>
               <p className={style.grupName}>Status</p>
               <p className={status === "Yes" ? `${style.grup} ${style.green}` : `${style.grup} ${style.red}`}>{status === "Yes" ? "Online" : "Offline"}</p>
            </div>
            <div className={`${style.grup} ${style.flex3}`}>
               <p className={style.grupName}>Actions</p>
               <p>{actions}</p>
            </div>
         </div>
         {
            state &&
            <Modal
               close={isAddModalClose}
               onClickUser={editUser}
               editValue={editValue} />
         }
      </article >
   )
}

export default UserCard