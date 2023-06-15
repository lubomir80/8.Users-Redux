import { createSelector } from "@reduxjs/toolkit";
import { options } from "../../data";


export const selectoruserTodo = state => state.userstodo
export const selectorFilter = state => state.filter


// export const selectorUserFilter = state => {
//    const todos = selectoruserTodo(state)
//    const filter = selectorFilter(state)
//    let newTodos = [...todos]

//    switch (filter) {
//       case "Alphabetical (A to Z)":
//          return newTodos.sort((a, b) => {
//             let x = a.name.toUpperCase(),
//                y = b.name.toUpperCase();
//             return x == y ? 0 : x > y ? 1 : -1;
//          })
//       case "Alphabetical (Z to A)":
//          return newTodos.sort((a, b) => {
//             let x = a.name.toUpperCase(),
//                y = b.name.toUpperCase();
//             return x == y ? 0 : x < y ? 1 : -1;
//          })
//       case "Age (Low to Hight)":
//          return newTodos.sort((a, b) => a.age - b.age);
//       case "Age (Hight to Low)":
//          return newTodos.sort((a, b) => b.age - a.age);
//       default:
//          return todos
//    }
// }

export const selectorUserFilter = createSelector(
   [selectoruserTodo, selectorFilter],
   (todos, filter) => {
      let newTodos = [...todos]

      switch (filter) {
         case options.alphabeticalStartEnd:
            return newTodos.sort((a, b) => {
               let x = a.name.toUpperCase(),
                  y = b.name.toUpperCase();
               return x == y ? 0 : x > y ? 1 : -1;
            })
         case options.alphabeticalEndStart:
            return newTodos.sort((a, b) => {
               let x = a.name.toUpperCase(),
                  y = b.name.toUpperCase();
               return x == y ? 0 : x < y ? 1 : -1;
            })
         case options.ageLowHight:
            return newTodos.sort((a, b) => a.age - b.age);
         case options.ageHightLow:
            return newTodos.sort((a, b) => b.age - a.age);
         default:
            return todos
      }
   }
)