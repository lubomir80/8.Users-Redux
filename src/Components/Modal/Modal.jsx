import ReactDOM from 'react-dom'
import { AiOutlineClose } from "react-icons/ai"
import "./Modal.scss"
import Form from '../Form/Form';


function Modal({ close }) {


   return ReactDOM.createPortal(
      <div className='modal'>
         <button className='modal__close-btn' onClick={() => close()}>
            <AiOutlineClose />
         </button>
         <Form />
      </div>,
      document.getElementById("modal")
   );
}

export default Modal