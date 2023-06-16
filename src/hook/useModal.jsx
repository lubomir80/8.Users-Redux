import { useState } from "react"


export const useModal = (initialValue = false) => {
   const [openModal, setOpenModal] = useState(initialValue)

   const onOpenModal = () => !openModal && setOpenModal(true)
   const onCloseModal = () => openModal && setOpenModal(false)

   return { openModal, onOpenModal, onCloseModal }
}


