import { createContext, useState } from "react";

const ThemeContext = createContext()
// este es el componente que alimentará a todo la app de los estados, functiones, variables, etc.

function ThemeWrapper (props) {

  // aqui definimos todas los estados, funciones, variables, que queremos compartir
  const [ darkMode, setDarkMode ] = useState(true)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const darkTheme = {
    backgroundColor: "rgb(42, 42, 42)",
    color: "white",
  }

  const lightTheme = {
    backgroundColor: "white",
    color: "black"
  }

  const selectTheme = darkMode === true ? darkTheme : lightTheme

  // **** Para el boton
  const darkThemeBtn = {
    backgroundColor: "red",
    color: "darkgray"
  }

  const lightThemeBtn = {
    backgroundColor: "cyan",
    color: "black"
  }

  const selectBtnTheme = darkMode === true ? darkThemeBtn : lightThemeBtn

  const passedContext = {
    toggleDarkMode,
    selectTheme,
    selectBtnTheme,
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeWrapper,
  ThemeContext
}