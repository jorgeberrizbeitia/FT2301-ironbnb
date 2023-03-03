import { NavLink } from "react-router-dom"


function Nav(props) {

  const checkActiveClass = (navInfo) => {
    // console.log(navInfo)
    if (navInfo.isActive === true) {
      return "nav-active"
    } else {
      return "nav-inactive"
    }
  }

  // const checkActiveClass = (navInfo) => navInfo.isActive ? "nav-active" : "nav-inactive"

  return (
    <nav>
      
      <NavLink className={checkActiveClass} to="/">Home</NavLink>
      <NavLink className={checkActiveClass} to="/pisos/list">Lista de Pisos</NavLink>
      <NavLink className={checkActiveClass} to="/pisos/add-form">Agregar Piso</NavLink>
      {/* <button onClick={props.toggleDarkMode}>Click</button> */}

    </nav>
  )
}

export default Nav