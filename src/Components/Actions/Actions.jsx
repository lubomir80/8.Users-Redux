import "./Actions.scss"
import Modal from "../Modal/Modal"
import { useDispatch, useSelector } from "react-redux"
import { useModal } from "../../hook/useModal"
import { removeAllUser } from "../../redux/Usertodo/usertodoSlice"
import { usersTodo } from "../../redux/Usertodo/selectors"
import { addUser } from "../../redux/Usertodo/usertodoSlice"



function Actions() {
   const dispatch = useDispatch()
   const disableBtn = useSelector(usersTodo).length < 1 ? false : true;
   const [state, isAddModalOpen, isAddModalClose] = useModal()

   const removeHandler = () => {
      const check = confirm("Do you want delete all user cards?");
      if (check) {
         dispatch(removeAllUser())
      } else {
         return
      }
   }

   return (
      <div className="actions">
         <button className="green" onClick={() => isAddModalOpen()}>Add</button>
         <button
            disabled={!disableBtn}
            className="red"
            onClick={() => removeHandler()}>Remove all</button>

         {state && <Modal close={isAddModalClose} onClickUser={addUser} />}
      </div>
   )
}

export default Actions