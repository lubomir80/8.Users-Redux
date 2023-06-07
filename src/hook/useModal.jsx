import { useState, useEffect, useContext } from "react"


export const useModal = (initialValue = false) => {
   const [state, setState] = useState(initialValue)

   const toggle = () => {
      setState((prev) => !prev)
   }

   return [state, toggle]
}