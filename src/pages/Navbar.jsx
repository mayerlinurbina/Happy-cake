import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <div>
      <nav className="navbar">
        <div>
          <NavLink className="link-navbar" to="/">🏠Home</NavLink>
          <NavLink className="link-navbar" to="/contacto">📞Contacto</NavLink>
        </div>
        <div>
          <h1>🍰Happy cake</h1>

        </div>
      </nav>

    </div>
  )

}
export default Navbar