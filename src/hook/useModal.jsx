import Modal from "../Components/Modal/Modal"
import { useState, useEffect, useContext } from "react"


export const useModal = (initialValue = false) => {
   const [state, setState] = useState(initialValue)

   const isAddModalOpen = () => {
      if (!state) setState(true)
   }

   const isAddModalClose = () => {
      if (state) setState(false)

   }

   return [state, isAddModalOpen, isAddModalClose]
}