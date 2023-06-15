import ReactDOM from 'react-dom'
import style from "./Modal.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import Form from '../Form/Form';


function Modal({ close, onClickUser, editValue }) {


   const backdropHandle = (e) => {
      e.currentTarget === e.target && close()
   }


   return ReactDOM.createPortal(
      <div className={style.modalBackdrop} onClick={backdropHandle}>
         <div className={style.modal} >
            <button className={style.modalCloseBtn} onClick={() => close()}>
               <AiOutlineClose />
            </button>
            <Form onSubmit={onClickUser} onClick={close} editValue={editValue} />
         </div>
      </div>,
      document.getElementById("modal")
   );
}

export default Modal