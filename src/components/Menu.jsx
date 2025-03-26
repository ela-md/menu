
import { AppContext } from '../context'
import { useContext } from 'react'
import MenuItem from './MenuItem'

function Menu () {

    const{menuItems} = useContext(AppContext);

    return(
      <div className="section-center">
       {menuItems.map((menuItem) => {
        
         return  <MenuItem key={menuItem.id} {...menuItem} />
        
       })}
      </div>
    )
}

export default Menu