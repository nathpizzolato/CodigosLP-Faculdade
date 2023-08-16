import { useState } from 'react'
import './App.css'

function App() {

  const [aposta, setAposta] = useState("")
  const [figura, setFigura] = useState("")

  function clickPapel() {
    setAposta("papel.png")
  }

  function clickPedra() {
    setAposta("pedra.png")
  }

  function clickTesoura() {
    setAposta("tesoura.png")
  }

  function desafiarPC() {
    if(aposta == ""){
      alert("Você ainda não apostou... Não Vale")
      return
    }
    const num = Math.ceil(Math.random()*3)
    if (num == 1){
      setFigura("papel.png")
    }else if(num == 2){
      setFigura("pedra.png")
    }else{
      setFigura("tesoura.png")
    }

  }

  return (
    <div className="conteiner">
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top me-3" />
            Jogo: Pedra, Papel, Tesoura
          </a>
        </div>
      </nav>

      <h2>
        Clique sobre a imagem:
        <img src="./pedra.png" alt="pedra"
          className="img-pequena mx-3"
          onClick={clickPedra} />
        <img src="./papel.png" alt="papel"
          className="img-pequena mx-3"
          onClick={clickPapel} />
        <img src="./tesoura.png" alt="tesoura"
          className="img-pequena mx-3"
          onClick={clickTesoura} />
      </h2>

      <div className="row">
        <div className="col-sm-4">
          <h3>Sua Aposta:</h3>
          {aposta && <img src={aposta} alt="aposta"/>}
        </div>
        <div className="col-sm-8">
          <button className='btn btn-danger btn-lg' 
          onClick={desafiarPC}>
            Desafiar PC
          </button><br />
          {figura && <img src={figura} alt="figura do PC"/>}
        </div>
      </div>
    </div>
  )
}

export default App
