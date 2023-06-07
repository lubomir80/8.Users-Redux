import User from "../User/User"
import "./Users.scss"

function Users() {
   const initialState = [
      {
         id: "1",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Zidan",
         age: "18",
         status: true,
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "2",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Kate",
         age: "48",
         status: false,
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "3",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Adam",
         age: "50",
         status: true,
         actions: "Edited avatar 5 minutes ago"
      },
      {
         id: "4",
         avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fo-OWJ8FTU_BkyO9JuormaHqhltTjwUFXktOLhE&s",
         name: "Boris",
         age: "23",
         status: false,
         actions: "Edited avatar 5 minutes ago"
      },

   ]


   return (
      <div className='cards'>
         {initialState.map((user) => <User key={user.id} {...user} />)}
      </div>
   )
}

export default Users