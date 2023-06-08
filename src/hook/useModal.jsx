import { useState } from "react"


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

