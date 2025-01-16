import React from 'react'
import '../styles/Aside.module.css';


const Aside = ({children}) => {
  return (
    <aside className="aside">
      {children}
    </aside>
  )
}

export default Aside