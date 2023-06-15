import style from "./Navbar.module.scss"

function Navbar() {
   return (
      <header className={style.header}>
         <a href="#" className={style.logo}>Logo</a>
      </header>
   )
}

export default Navbar