import { useState } from "react"
import { useForm } from "react-hook-form"

function App() {
    let [price, setPrice] = useState(0)
    let [fees, setFees] = useState(0)
    const { register, handleSubmit, watch } = useForm({})
  
    function returnYear() {
      const year = new Date().getFullYear()
      return year
    }
  
    function calcPrice(data) {
      let usageYear = returnYear() - +data.year
      let x = 0
  
      if (usageYear <= 5) {
        x = +data.rating * 0.03
      } else {
        x = +data.rating * 0.05
      }
  
      if (watch("renovation")) {
        x = x * 0.9
      } 
      setPrice(x.toLocaleString("pt-br", { minimumFractionDigits: 2 }))
      setFees(x / 12)
    }
  return (
    <div className="container-fluid">
      <nav class="navbar bg-info">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./icone.png" alt="Logo"
              width="50" height="40" class="d-inline-block me-3" />
            Seguradora de Veículos
          </a>
        </div>
      </nav>
      <div class="card text-center mt-3 w-75 mx-auto">
        <div class="card-header">
          <img src="./principal.png" alt="Seguro" width={200} />
          <h4>Seguradora de Veículos Avenida</h4>
        </div>
        <form onSubmit={handleSubmit(calcPrice)}>
        <div class="card-body">
          <div class="card-footer text-body-secondary">
            <div class="row">
              <div class="col">
                <input type="text" class="form-control"
                  placeholder="Modelo do Veículo" />
              </div>
              <div class="col">
                <input type="number" class="form-control"
                  placeholder="Ano" {...register("year")} />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input type="text" class="form-control"
                  placeholder="R$ Avaliação (Fipe)" {...register("rating")} />
              </div>
              <div class="col form-check">
                <input type="checkbox" id="renovacao" className="me-2" {...register("renovation")} />
                <label htmlFor="renovacao"> É Renovação </label>
              </div>
            </div>
            <div className="col mt-2">
              <button type="submit" class="btn btn-primary me-3" >Calcular</button>
              <button type="button" class="btn btn-danger">Limpar</button>
            </div>
            <div class="card-footer text-primary fw-bold mt-3">
              R$ Seguro: {price}   Em 12x de R$: {fees} 
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default App
