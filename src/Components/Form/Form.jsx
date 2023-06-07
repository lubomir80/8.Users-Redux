import React from 'react'
import "./Form.scss"

function Form() {
   return (
      <form className='modal-form'>
         <div className='form-grup'>
            <label htmlFor="avatar">Avatar</label>
            <input

               type="text"
               id='avatar'
               name='avatar'
               required />
         </div>
         <div className='form-grup'>
            <label htmlFor="name">Name</label>
            <input


               type="text"
               id='name'
               name='name'
               required />
         </div>
         <div className='oneline-box'>

            <div className='form-grup ages'>
               <label htmlFor="age">Age</label>
               <input



                  type="number"
                  id='age'
                  name='age'
                  min={18}
                  max={100}
                  required />
            </div>
            <div className='form-grup status'>
               <label htmlFor="status">Status</label>
               <select
                  name="status"

                  required>
                  <option>Yes</option>
                  <option>No</option>
               </select>
            </div>

         </div>
         <div className='form-grup'>
            <label htmlFor="actions">Actions </label>
            <input

               type="text"
               id='actions'
               name='actions'
               required />
         </div>
         <button
            type='button'
            className='modal__submit-btn'>
            Add
         </button>
      </form>
   )
}

export default Form