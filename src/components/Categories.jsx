import { useContext } from "react"
import { AppContext } from "../context"

function Categories () {
    const {categories, filterItems} = useContext(AppContext);

    return(
   <div className="btn-container">

  {categories.map((category) => {
    return <button type="button" className="btn" key={category} onClick={()=> filterItems(category) }>
        {category}
    </button>
  })}

   </div>
    )
}
export default Categories