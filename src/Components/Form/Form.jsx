import style from "./Form.module.scss"
import { useState } from 'react'
import { formAgeRange, formInitialState } from "../../data"


function Form({ onSubmit, editValue, onCloseModal }) {

   const [formUser, setFormUser] = useState(editValue ? editValue : formInitialState)
   const { avatar, name, age, status, actions } = formUser;

   const disableBtn = avatar && name && age && status && actions;

   const onChangeHandler = (e) => {
      const { name, value } = e.target;
      setFormUser((prev) => { return { ...prev, [name]: value } })
   }

   const onSubmitHandler = (e) => {
      e.preventDefault()
      onSubmit(formUser)
      setFormUser(formInitialState)
      onCloseModal()
   }


   return (
      <form onSubmit={onSubmitHandler} className={style.modalForm}>
         <div className={style.formGrup}>
            <label htmlFor="avatar">Avatar</label>
            <span>Put link of img</span>
            <input
               onChange={onChangeHandler}
               value={avatar}
               type="text"
               id='avatar'
               name='avatar'
               required />
         </div>
         <div className={style.formGrup}>
            <label htmlFor="name">Name</label>
            <span>Put your name</span>
            <input
               onChange={onChangeHandler}
               value={name}
               type="text"
               id='name'
               name='name'
               required />
         </div>
         <div className={style.onelineBox}>

            <div className={`${style.formGrup} ${style.ages}`}>
               <label htmlFor="age">Age</label>
               <span>From {formAgeRange.minAge} - {formAgeRange.maxAge}</span>
               <input
                  onChange={onChangeHandler}
                  value={age}
                  type="number"
                  id='age'
                  name='age'
                  min={formAgeRange.minAge}
                  max={formAgeRange.maxAge}
                  required />
            </div>
            <div className={`${style.formGrup} ${style.status}`}>
               <label htmlFor="status">Status</label>
               <span>Online/Offline</span>
               <select
                  name="status"
                  onChange={onChangeHandler}
                  value={status}
                  required>
                  <option>Yes</option>
                  <option>No</option>
               </select>
            </div>

         </div>
         <div className={style.formGrup}>
            <label htmlFor="actions">Actions </label>
            <span>New </span>
            <input
               onChange={onChangeHandler}
               value={actions}
               type="text"
               id='actions'
               name='actions'
               required />
         </div>
         <button
            disabled={!disableBtn}
            type='submit'
            className={style.submitBtn}>
            {editValue ? "Update" : "Add"}
         </button>
      </form>
   )
}

export default Form