import { useEffect, useState } from "react"
const Submenu = ({page,links}) => {
  const columns = `col-${links.length}`
  
  return <aside className={`submenu show`} >
    <section>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { url, icon, label } = link
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          )
        })}
      </div>
    </section>
  </aside>

}

export default Submenu