import style from "./Actions.module.scss"
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../hook/useModal"
import { removeAllUser } from "../../redux/Usertodo/usertodoSlice"
import { selectoruserTodo } from "../../redux/Usertodo/selectors"
import { addUser } from "../../redux/Usertodo/usertodoSlice"



function Actions() {
   const dispatch = useDispatch()
   const disableBtn = useSelector(selectoruserTodo).length < 1 ? false : true;
   const [state, isAddModalOpen, isAddModalClose] = useModal()

   const removeHandler = () => {
      const check = confirm("Do you want delete all user cards?");
      check && dispatch(removeAllUser())
   }


   return (
      <div className={style.actions}>
         <button className={style.green} onClick={isAddModalOpen}>Add</button>
         <button
            disabled={!disableBtn}
            className={style.red}
            onClick={removeHandler}>Remove all</button>

         {state && <Modal close={isAddModalClose} onClickUser={addUser} />}
      </div>
   )
}

export default Actions