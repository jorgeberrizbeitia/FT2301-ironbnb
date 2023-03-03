import { useState, useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { ThemeContext } from "../context/theme.context"

function AptAddForm() {

  const { selectBtnTheme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const [ title, setTitle ] = useState("")
  const [ img, setImg ] = useState("")
  const [ pricePerDay, setPricePerDay ] = useState(0)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleImgChange = (event) => {
    setImg(event.target.value)
  }

  const handlePricePerDayChange = (event) => {
    setPricePerDay(event.target.value)
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()

    // 1. recopilar los estados en el nuevo Piso que vamos a crear
    const newApartment = {
      title: title,
      img: img,
      pricePerDay: pricePerDay
    }

    // 2. contactar al BE y enviarles el nuevo piso
    try {
      
      await axios.post("https://ironbnb-m3.herokuapp.com/apartments", newApartment)
      // cuando hacemos llamadas post (o put, patch, delete) enviamos el body como segundo argumento

      // 3. Indicar al usuario que se ha creado el piso
      navigate("/pisos/list")

    } catch (error) {
      navigate("/error")
    }

  }

  return (
    <div>
      
      <form>

        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" onChange={handleTitleChange} value={title}/>

        <br />

        <label htmlFor="img">Imagen</label>
        <input type="text" name="img" onChange={handleImgChange} value={img}/>

        <br />

        <label htmlFor="pricePerDay">Precio por día</label>
        <input type="number" name="pricePerDay" onChange={handlePricePerDayChange} value={pricePerDay}/>

        <br />

        <button style={selectBtnTheme} onClick={handleSubmitForm}>Agregar</button>


      </form>


    </div>
  )
}

export default AptAddForm