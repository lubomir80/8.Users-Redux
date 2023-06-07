import { useModal } from "../../hook/useModal"
import Modal from "../Modal/Modal"
import "./Actions.scss"

function Actions() {
   const [state, isAddModalOpen, isAddModalClose] = useModal()


   return (
      <div className="actions">
         <button className="green" onClick={() => isAddModalOpen()}>Add</button>
         <button className="red">Remove all</button>
         {state && <Modal close={isAddModalClose} />}
      </div>
   )
}

export default Actions