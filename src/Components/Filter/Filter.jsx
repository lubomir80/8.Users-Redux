import "./Filter.scss"

function Filter() {
   const options = [
      "-",
      "Alphabetical (A to Z)",
      "Alphabetical (Z to A)",
      "Age (Low to Hight)",
      "Age (Hight to Low)"
   ]


   return (
      <div className="filter">
         <span>Sort</span>
         <select name="sort" id="sort">
            {options.map(item => <option key={item}>{item}</option>)}
         </select>
      </div>
   )
}

export default Filter