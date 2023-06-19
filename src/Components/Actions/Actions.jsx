import style from "./Actions.module.scss"
import Modal from "../Modal/Modal"
import { useDispatch } from "react-redux"
import { removeAllUser } from "../../redux/Usertodo/filterSlice"
import { useModal } from "../../hook/useModal"
import Form from "../Form/Form"
import { useAddUserTodosMutation, useGetUserTodosQuery } from "../../redux/userTodoApi"


function Actions() {
   // const { data } = useGetUserTodosQuery()
   // const dispatch = useDispatch()
   const [addUserTodos] = useAddUserTodosMutation()
   const { openModal, onOpenModal, onCloseModal } = useModal()


   // const removeAllCardsHandler = () => {
   //    const messageConfirmation = "Do you want delete all user cards?"
   //    const removeConfirmation = confirm(messageConfirmation);
   //    removeConfirmation && dispatch(removeAllUser())
   // }


   return (
      <div className={style.actions}>
         <button className={style.green} onClick={onOpenModal}>Add</button>
         {/* <button
            disabled={data && !data.length}
            className={style.red}
            onClick={removeAllCardsHandler}>Remove all</button> */}

         {openModal &&
            <Modal onCloseModal={onCloseModal}>
               <Form onCloseModal={onCloseModal} onSubmit={addUserTodos} />
            </Modal>}
      </div >
   )
}

export default Actions