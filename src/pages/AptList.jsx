import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom" // manipular el URL del usuario
import BounceLoader from "react-spinners/BounceLoader";

// Este componente renderizará data de un backend
function AptList() {

  const navigate = useNavigate()

  // 1. Creamos el estado que almacenará la data
  const [ allApartments, setAllApartments ] = useState(null)
  const [ isFetching, setIsFetching ] = useState(true) // este estado determina si el componente está buscando data o no

  // 2. invocamos el useEffect para hacer la llamada justo cuando el componente se ha montado correctamente
  useEffect(() => {

    // 3. hacer la llamada al backend para verificar que recibimos la data
    getData()

  }, [])

  // 3.2 tenemos que crear la funcion externa si queremos trabajar con async/await
  const getData = async () => {
    try {
      
      const response = await axios.get("https://ironbnb-m3.herokuapp.com/apartments")
      console.log(response)
      setAllApartments(response.data)
      setIsFetching(false) // ya tengo la data

    } catch (error) {
      console.log(error)
      // vamos a hacer una redirección del usuario a "/error"
      navigate("/error")
    }
  }

  // clausula de guardia
  if (isFetching === true) {
    // return <h3>... buscando</h3>
    // no hagas más despues de esta linea
    return (
      <div style={{display: "flex", justifyContent: "center", padding: "20px"}}>
        <BounceLoader color="#ff0000" size={100}/>
      </div>
    )
  } 

  return (
    <div>
      
      <h2>Aqui los pisos disponibles</h2>

  

      {allApartments.map((eachApt) => {
        return (
        <div key={eachApt._id}>
          <h3>{eachApt.title}</h3>
          <p>Precio: {eachApt.pricePerDay}</p>
          <img src={eachApt.img} alt="img" width={200}/>
        </div>
        )
      })}


    </div>
  )
}

export default AptList