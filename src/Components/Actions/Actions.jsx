import style from "./Actions.module.scss"
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../hook/useModal"
import { removeAllUser } from "../../redux/Usertodo/usertodoSlice"
import { selectoruserTodo } from "../../redux/Usertodo/selectors"
import { addUser } from "../../redux/Usertodo/usertodoSlice"
import Form from "../Form/Form"


function Actions() {
   const dispatch = useDispatch()
   const disableBtn = useSelector(selectoruserTodo)
   const { openModal, onOpenModal, onCloseModal } = useModal()

   const removeAllCardsHandler = () => {
      const messageConfirmation = "Do you want delete all user cards?"
      const removeConfirmation = confirm(messageConfirmation);
      removeConfirmation && dispatch(removeAllUser())
   }




   return (
      <div className={style.actions}>
         <button className={style.green} onClick={onOpenModal}>Add</button>
         <button
            disabled={!disableBtn.length}
            className={style.red}
            onClick={removeAllCardsHandler}>Remove all</button>

         {openModal &&
            <Modal onCloseModal={onCloseModal}>
               <Form onCloseModal={onCloseModal} onSubmit={addUser} />
            </Modal>}
      </div >
   )
}

export default Actions