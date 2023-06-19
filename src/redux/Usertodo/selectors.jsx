import { options } from "../../data";


export const selectoruserTodo = state => state.filter.userstodo
export const selectorFilter = state => state.filter.filter


export const selectorUserFilter = (state, usersTodos) => {
   const filter = selectorFilter(state)


   switch (filter) {
      case options.alphabeticalStartEnd:
         return [...usersTodos].sort((a, b) => {
            let x = a.name.toUpperCase(),
               y = b.name.toUpperCase();
            return x == y ? 0 : x > y ? 1 : -1;
         })
      case options.alphabeticalEndStart:
         return [...usersTodos].sort((a, b) => {
            let x = a.name.toUpperCase(),
               y = b.name.toUpperCase();
            return x == y ? 0 : x < y ? 1 : -1;
         })
      case options.ageLowHight:
         return [...usersTodos].sort((a, b) => a.age - b.age);
      case options.ageHightLow:
         return [...usersTodos].sort((a, b) => b.age - a.age);
      default:
         return usersTodos
   }

}

// export const selectorUserFilter = createSelector(
//    [selectoruserTodo, selectorFilter],
//    (todos, filter) => {
//       let newTodos = [...todos]

//       switch (filter) {
//          case options.alphabeticalStartEnd:
//             return newTodos.sort((a, b) => {
//                let x = a.name.toUpperCase(),
//                   y = b.name.toUpperCase();
//                return x == y ? 0 : x > y ? 1 : -1;
//             })
//          case options.alphabeticalEndStart:
//             return newTodos.sort((a, b) => {
//                let x = a.name.toUpperCase(),
//                   y = b.name.toUpperCase();
//                return x == y ? 0 : x < y ? 1 : -1;
//             })
//          case options.ageLowHight:
//             return newTodos.sort((a, b) => a.age - b.age);
//          case options.ageHightLow:
//             return newTodos.sort((a, b) => b.age - a.age);
//          default:
//             return todos
//       }
//    }
// )