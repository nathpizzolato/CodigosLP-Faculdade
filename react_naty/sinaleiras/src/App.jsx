import { useState } from "react"
import "./App.css"

function App() {
  const[cor, setCor] = useState("vermelha.png")
  const [aviso, setAviso] = useState("Sinal Vermelho: Proibido Passar")


  function trocaSinaleira(){
    //alert("Você clicou na sinaleira")
    if(cor == "vermelha.png"){
      setCor("verde.png")
      setAviso("Sinal Verde: Pode Passar")
    }else if (cor == "verde.png"){
      setCor("amarela.png")
      setAviso("Sinal Amarelo: Atenção, cuidado")
    }else{
      setCor("vermelha.png")
      setAviso("Sinal Vermelho: Proibido Passar")
    }
      
  }

  return (
    <>
      <h1 className="titulo">Escola de Trânsito</h1>
      <h2>Aula sobre Sinaleira</h2>
      <hr/>
      <img 
        src={cor} 
        alt="Sinaleira" 
        width={200}
        onClick={trocaSinaleira}
      />
      <h2 className="titulo">{aviso}</h2>
      <h4><i>*Clique na sinaleira para mudar de cor</i></h4>
    </>
  )
}

export default App
