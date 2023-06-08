import ReactDOM from 'react-dom'
import { AiOutlineClose } from "react-icons/ai"
import "./Modal.scss"
import Form from '../Form/Form';


function Modal({ close, onClickUser }) {

   return ReactDOM.createPortal(
      <div className='modal'>
         <button className='modal__close-btn' onClick={() => close()}>
            <AiOutlineClose />
         </button>
         <Form onClickUser={onClickUser} />
      </div>,
      document.getElementById("modal")
   );
}

export default Modal