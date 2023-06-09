import { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./Form.scss"

function Form({ onSubmit, editValue, onClick }) {
   const dispatch = useDispatch()
   const ageRange = {
      minAge: 18,
      maxAge: 100
   }

   const [formUser, setFormUser] = useState(editValue ? editValue :
      {
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
      dispatch(onSubmit(formUser))
      onUserClearHadler()
      onClick()
   }

   const { avatar, name, age, status, actions, id } = formUser;
   const disableBtn = Boolean(avatar) && Boolean(name) && Boolean(age) && Boolean(status) && Boolean(actions);


   return (
      <form onSubmit={onSubmitHandler} className='modal-form'>
         <div className='form-grup'>
            <label htmlFor="avatar">Avatar</label>
            <span>Put link of img</span>
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
            <span>Put your name</span>
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
               <span>From {ageRange.minAge} - {ageRange.maxAge}</span>
               <input
                  onChange={onChangeHandler}
                  value={formUser.age}
                  type="number"
                  id='age'
                  name='age'
                  min={ageRange.minAge}
                  max={ageRange.maxAge}
                  required />
            </div>
            <div className='form-grup status'>
               <label htmlFor="status">Status</label>
               <span>Online/Offline</span>
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
            <span>New </span>
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
            {editValue ? "Update" : "Add"}
         </button>
      </form>
   )
}

export default Form