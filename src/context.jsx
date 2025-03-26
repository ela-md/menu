import { createContext, useState, useEffect } from "react";
import menu from "./data";




export const AppContext = createContext()

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];


 export const AppProvider = ({children}) => {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(menu);
      return;
    }else{
      const newItem = menu.filter((item) => item.category===category);
      setMenuItems(newItem)
    }
  };



 const contextValue = {menuItems, setMenuItems, categories, setCategories, filterItems }
  
    return(
        <AppContext.Provider value={contextValue}>  
          {children}
        </AppContext.Provider>
    )
}

