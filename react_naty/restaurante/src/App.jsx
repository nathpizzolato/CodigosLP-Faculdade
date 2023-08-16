import { useState } from "react"

function App() {

  const [mesas, setMesas] = useState(10)
  const [aviso, setAviso] = useState("No momento, há mesas disponiveis")

  function ocuparMesa(){
    if(mesas == 0){
      alert("Não há mesas disponiveis")
      return
    }
    if(mesas == 1){
      setAviso("Por favor aguarde ...  Todas as mesas ocupadas")
    }
    setMesas(mesas-1)
  }

  function liberarMesa(){
    if(mesas == 10){
      alert("Todas as mesas estão liberadas")
      return
    }
    if(mesas == 0){
      setAviso("No momento, há mesas disponiveis")
    }
    setMesas(mesas+1)

  }

  return (
    <div className="container">
      <h2 className="titulo">Restaurante Avenida: Controle de Mesas</h2>
      <img src="restaurante.jpg" alt="restaurante" width={600}></img>

      <div className="row mt-4">
        <div className="col-sm-4">
          <h3>Nº de Mesas Disponiveis: {mesas}</h3>

        </div>
        <div className="col-sm-8">
          <h3>Nº de Mesas Ocupadas: {10 - mesas}</h3>

        </div>
      </div>

      <button className="btn btn-primary btn-lg mt-3 me-3"
        onClick={ocuparMesa}>
        Ocupar Mesa

      </button>
      <button className="btn btn-danger btn-lg mt-3"
        onClick={liberarMesa}>
        Liberar Mesa
      </button>

      <h3 className="text-success mt-3">
        {aviso}
      </h3>

    </div>
  )
}

export default App
