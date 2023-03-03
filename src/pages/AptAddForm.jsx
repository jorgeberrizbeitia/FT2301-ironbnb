import { useState } from "react"

function AptAddForm() {

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

  return (
    <div>
      
      <form>

        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" onChange={handleTitleChange}/>

        <br />

        <label htmlFor="img">Imagen</label>
        <input type="text" name="img" onChange={handleImgChange}/>

        <br />

        <label htmlFor="pricePerDay">Precio por día</label>
        <input type="number" name="pricePerDay" onChange={handlePricePerDayChange}/>

        <br />

        <button>Agregar</button>


      </form>


    </div>
  )
}

export default AptAddForm