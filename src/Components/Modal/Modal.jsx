import ReactDOM from 'react-dom'
import style from "./Modal.module.scss"
import { AiOutlineClose } from "react-icons/ai"


function Modal({ onCloseModal, children }) {

   const backdropHandle = (e) => {
      e.currentTarget === e.target && onCloseModal()
   }


   return ReactDOM.createPortal(
      <div className={style.modalBackdrop} onClick={backdropHandle}>
         <div className={style.modal} >
            <button className={style.modalCloseBtn} onClick={onCloseModal}>
               <AiOutlineClose />
            </button>
            {children}
         </div>
      </div>,
      document.getElementById("modal")
   );
}

export default Modal