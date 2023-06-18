import style from "./UserCard.module.scss"
import { AiTwotoneEdit, AiOutlineClose } from "react-icons/ai"
import { useModal } from "../../hook/useModal"
import { imageSubstitute } from "../../data"
import Modal from "../Modal/Modal"
import Form from "../Form/Form"
import { useEditUserTodosMutation, useRemoveUserTodosMutation } from "../../redux/userTodoApi"


function UserCard({ id, name, avatar, age, status, actions }) {
   const editValue = { id, name, avatar, age, status, actions }
   const { openModal, onOpenModal, onCloseModal } = useModal()

   const [removeUserTodos] = useRemoveUserTodosMutation()
   const [editUserTodos] = useEditUserTodosMutation()

   const removeCardHandler = (id) => {
      const messageConfirmation = "Do you want delete the current card?"
      const removeConfirmation = confirm(messageConfirmation);
      removeConfirmation && removeUserTodos(id)
   }

   const avatarValidation = (img) => {
      const http = "https://"
      return avatar = img.includes(http) ? img : imageSubstitute;
   }


   return (
      <article className={style.card}>
         <div className={style.options}>
            <button onClick={onOpenModal}><AiTwotoneEdit /></button>
            <button onClick={() => removeCardHandler(id)}><AiOutlineClose /></button>
         </div>
         <div className={style.article} >
            <div className={`${style.box} ${style.flex3}`}>
               <div className={style.imgBox}>
                  <img src={avatarValidation(avatar)} alt={name} />
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
               <p className={status === "Yes" ? `${style.status} ${style.green}` : `${style.status} ${style.red}`}>
                  {status === "Yes" ? "Online" : "Offline"}
               </p>
            </div>
            <div className={`${style.grup} ${style.flex3}`}>
               <p className={style.grupName}>Actions</p>
               <p>{actions}</p>
            </div>
         </div>
         {
            openModal &&
            <Modal onCloseModal={onCloseModal}>
               <Form
                  editValue={editValue}
                  onCloseModal={onCloseModal}
                  onSubmit={editUserTodos} />
            </Modal>
         }
      </article >
   )
}

export default UserCard