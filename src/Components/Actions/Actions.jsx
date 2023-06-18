import style from "./Actions.module.scss"
import Modal from "../Modal/Modal"
import { useDispatch } from "react-redux"
import { useModal } from "../../hook/useModal"
import { removeAllUser } from "../../redux/Usertodo/usertodoSlice"
import Form from "../Form/Form"
import { useAddUserTodosMutation, useGetUserTodosQuery } from "../../redux/userTodoApi"


function Actions() {
   const { data } = useGetUserTodosQuery()
   const [addUserTodos, { isError, isLoading, isSuccess }] = useAddUserTodosMutation()
   const { openModal, onOpenModal, onCloseModal } = useModal()

   const dispatch = useDispatch()


   const removeAllCardsHandler = () => {
      const messageConfirmation = "Do you want delete all user cards?"
      const removeConfirmation = confirm(messageConfirmation);
      removeConfirmation && dispatch(removeAllUser())
   }


   return (
      <div className={style.actions}>
         <button className={style.green} onClick={onOpenModal}>Add</button>
         <button
            disabled={data && !data.length}
            className={style.red}
            onClick={removeAllCardsHandler}>Remove all</button>

         {openModal &&
            <Modal onCloseModal={onCloseModal}>
               <Form onCloseModal={onCloseModal} onSubmit={addUserTodos} />
            </Modal>}
      </div >
   )
}

export default Actions