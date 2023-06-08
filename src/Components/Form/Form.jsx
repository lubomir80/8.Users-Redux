import { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Form.scss"

function Form({ onClickUser }) {

   const dispatch = useDispatch()
   const [formUser, setFormUser] = useState({
      avatar: "",
      name: "",
      age: "",
      status: "Yes",
      actions: ""
   })

   const onUserClearHadler = () => {
      setFormUser({
         avatar: "",
         name: "",
         age: "",
         status: "",
         actions: ""
      })
   }

   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormUser((prev) => { return { ...prev, [name]: value } })
   }

   const onSubmitHandler = (e) => {
      e.preventDefault()
      dispatch(onClickUser(formUser))
      onUserClearHadler()
   }

   const { avatar, name, age, status, actions } = formUser;
   const disableBtn = Boolean(avatar) && Boolean(name) && Boolean(age) && Boolean(status) && Boolean(actions);


   return (
      <form onSubmit={onSubmitHandler} className='modal-form'>
         <div className='form-grup'>
            <label htmlFor="avatar">Avatar</label>
            <input
               onChange={onChangeHandler}
               value={formUser.avatar}
               type="text"
               id='avatar'
               name='avatar'
               required />
         </div>
         <div className='form-grup'>
            <label htmlFor="name">Name</label>
            <input
               onChange={onChangeHandler}
               value={formUser.name}
               type="text"
               id='name'
               name='name'
               required />
         </div>
         <div className='oneline-box'>

            <div className='form-grup ages'>
               <label htmlFor="age">Age</label>
               <input
                  onChange={onChangeHandler}
                  value={formUser.age}
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
                  onChange={onChangeHandler}
                  value={formUser.status}
                  required>
                  <option>Yes</option>
                  <option>No</option>
               </select>
            </div>

         </div>
         <div className='form-grup'>
            <label htmlFor="actions">Actions </label>
            <input
               onChange={onChangeHandler}
               value={formUser.actions}
               type="text"
               id='actions'
               name='actions'
               required />
         </div>
         <button
            disabled={!disableBtn}
            type='submit'
            className='modal__submit-btn'>
            Add
         </button>
      </form>
   )
}

export default Form