import { useState } from "react";
import _ from "lodash";
import { useForm } from "react-hook-form";

const array = ["pokemon1.png", "pokemon2.png", "pokemon3.png", "pokemon4.png", "pokemon5.png", "pokemon6.png"];

const array2 = _.shuffle(array);

const array3 = _.shuffle(array2);

function App() {
  const [poke1, setPoke1] = useState(array2[0]);
  const [poke2, setPoke2] = useState(array2[1]);
  const [poke3, setPoke3] = useState(array2[2]);
  const [poke4, setPoke4] = useState(array2[3]);
  const [poke5, setPoke5] = useState(array2[4]);
  const [poke6, setPoke6] = useState(array2[5]);

  const [adivinha, setAdivinha] = useState("");
  const [sorte, setSorte] = useState();
  const [contaClique, setContaClique] = useState(0);
  const [contaAposta, setContaAposta] = useState(0);

  const [mensagem, setMensagem] = useState("");
  const [treinador, setTreinador] = useState();
  const [coin, setCoin] = useState();

  const { register, handleSubmit } = useForm();

  function recebeDados(dados) {
    if (contaAposta === 0) {
      setPoke1("./verso.png");
      setPoke2("./verso.png");
      setPoke3("./verso.png");
      setPoke4("./verso.png");
      setPoke5("./verso.png");
      setPoke6("./verso.png");

      setAdivinha(<span className="text-white">Onde está esse Pokemon: </span>);
      setSorte(array3[0]);

      setTreinador(dados.treinador);
      setCoin(+dados.coin);
      setContaAposta(contaAposta + 1);
      setContaClique(0);
    }
  }

  function clique1() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke1(array2[0]);
      if (array2[0] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  function clique2() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke2(array2[1]);
      if (array2[1] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  function clique3() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke3(array2[2]);
      if (array2[2] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  function clique4() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke4(array2[3]);
      if (array2[3] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  function clique5() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke5(array2[4]);
      if (array2[4] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  function clique6() {
    if (contaClique === 0 && contaAposta > 0) {
      setPoke6(array2[5]);
      if (array2[5] === array3[0]) {
        setMensagem(
          <h4 className="text-success">
            Parabéns {treinador}! Você é um Mestre Pokemon, recebeu {" "}
            {(coin * 2).toLocaleString("pt-br", { minimumFractionDigits: 2 })} pokecoins
          </h4>
        );
      } else {
        setMensagem(
          <h4 className="text-danger">Você errou, ainda não é um Mestre Pokemon.</h4>
        );
      }
    }
    setContaClique(contaClique + 1);
  }

  return (
    <div className="container-fluid">
      <nav class="navbar bg-danger">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <div class="text-white">
              <img
                src="./logo.png"
                alt="Logo"
                width="40"
                height="40"
                class="d-inline-block me-3"
              />
              QUEM É ESSE POKEMON?
            </div>
          </a>
        </div>
      </nav>
      <div class="card text-center mt-2 w-75 mx-auto">
        <form onSubmit={handleSubmit(recebeDados)}>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Treinador"
                  required
                  {...register("treinador")}
                />
              </div>
              <div class="col">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Pokecoins"
                  required
                  {...register("coin")}
                />
              </div>
              <div class="col">
                <button type="submit" class="btn btn-danger">
                  APOSTAR
                </button>
              </div>
            </div>
          </div>
        </form>
        <div class="card-body bg-danger">
          <div class="text-white">
            <h6 class="text-start my-1">
              Memorize os Pokemons... {adivinha}
              {sorte && <img src={sorte} width="40" height="40" />}
            </h6>
            <div className="row ">
              <div className="col">
                <img
                  src={poke1}
                  alt="poke1"
                  width="150"
                  height="150"
                  onClick={clique1}
                />
              </div>
              <div className="col">
                <img
                  src={poke2}
                  alt="poke2"
                  width="150"
                  height="150"
                  onClick={clique2}
                />
              </div>
              <div className="col">
                <img
                  src={poke3}
                  alt="poke3"
                  width="150"
                  height="150"
                  onClick={clique3}
                />
              </div>
              <div className="row my-5 mx-2">
              <div className="col">
                <img
                  src={poke4}
                  alt="poke4"
                  width="150"
                  height="150"
                  onClick={clique4}
                />
              </div>
              <div className="col">
                <img
                  src={poke5}
                  alt="poke5"
                  width="150"
                  height="150"
                  onClick={clique5}
                />
              </div>
                <div className="col">
                  <img
                    src={poke6}
                    alt="poke6"
                    width="150"
                    height="150"
                    onClick={clique6}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-body-secondary text-center">{mensagem}</div>
    </div>
  );
}

export default App;
