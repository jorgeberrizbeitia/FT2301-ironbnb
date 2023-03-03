import { Link } from "react-router-dom"


function NotFound() {
  return (
    <div>
      
        <h3>Estas Perdido?</h3>
        <img src="https://img2.rtve.es/v/3473584?w=800&preview=1454659003875.jpg" alt="et" width={300}/>
        <br />

        <Link to="/">Vuelve a casa</Link>

    </div>
  )
}

export default NotFound