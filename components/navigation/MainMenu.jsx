import React, {createRef}  from "react"
import Link from "next/link"

const menu = createRef();
const toogleMenu = ()=>{
    menu.current.classList.toggle("show")
}


const MainMenu = () => (

    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
    
        <nav className="main-menu" id="main-menu" ref={menu}>
            <ul>
                <li><Link href="/"><a>Inicio</a></Link></li>
                <li><Link href="/about"><a>Acerca de Nosotros</a></Link></li>
                <li><Link href="/contact"><a>Contacto</a></Link></li>
            </ul>
        </nav>
        
        <div className="main-menu-toggle to-l" id="main-menu-toggle" 
        onClick={()=>{toogleMenu()}}>
        </div>

    </div>
)

export default MainMenu