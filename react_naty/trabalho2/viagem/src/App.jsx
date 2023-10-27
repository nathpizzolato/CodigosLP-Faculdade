import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function App() {
  const { register, handleSubmit, reset, setFocus, watch } = useForm();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [mostraFiltro, setMostraFiltro] = useState(false);
  const [roteiros, setRoteiros] = useState([]);
  const [filtro, setFiltro] = useState([]);

  const [modalDestino, setModalDestino] = useState("");
  const [modalData, setModalData] = useState("");
  const [modalDuracao, setModalDuracao] = useState("");
  const [modalPreco, setModalPreco] = useState("");
  const [modalAtracao, setModalAtracao] = useState("");
  const [modalFoto, setModalFoto] = useState("");

  function gravaDados(data) {
    const roteiros2 = [...roteiros];
    roteiros2.push({
      destino: data.destino,
      data: data.data,
      duracao: data.duracao,
      atracoes: data.atracoes,
      preco: data.preco,
      foto: data.foto,
    });
    setRoteiros(roteiros2);
    setFocus("destino");
    reset({
      destino: "",
      data: "",
      duracao: "",
      atracoes: "",
      preco: "",
      foto: "",
    });

    localStorage.setItem("roteiros", JSON.stringify(roteiros2));
  }

  function mostraRoteiro(indice) {
    setModalDuracao(roteiros[indice].duracao);
    setModalPreco(roteiros[indice].preco);
    setModalFoto(roteiros[indice].foto);
    setModalData(roteiros[indice].data);
    setModalDestino(roteiros[indice].destino);
    setModalAtracao(roteiros[indice].atracoes);

    setOpen2(true);
  }

  function excluiroteiro(indice) {
    const destino = roteiros[indice].destino;
    if (confirm(`Confirma a exclusão do destino ${destino}?`)) {
      const roteiros2 = [...roteiros];
      roteiros2.splice(indice, 1);
      setRoteiros(roteiros2);
      localStorage.setItem("roteiros", JSON.stringify(roteiros2));
    }
  }

  function trocarValor(indice) {
    const destino = roteiros[indice].destino;
    Swal.fire({
      title: `Atualizar Preço: ${destino}`,
      input: "text",
      showCancelButton: true,
      confirmButtonText: "Enviar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Salvo!", "", "Sucesso");
        setRoteiros((prevRoteiros) => {
          const roteiros2 = [...prevRoteiros];
          const valor = result.value;
          roteiros2[indice].preco = valor;
          localStorage.setItem("roteiros", JSON.stringify(roteiros2));
          return roteiros2;
        });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  function filtragem(data) {
    const filtro = roteiros.filter((roteiro) =>
      roteiro.destino.toUpperCase().includes(data.destino.toUpperCase())
    );
    setFiltro(filtro);
    setMostraFiltro(true);
  }

  const listaRoteiros = roteiros.map((roteiro, i) => (
    <tr>
      <td>{roteiro.destino}</td>
      <td>{roteiro.data}</td>
      <td>{roteiro.duracao} dias</td>
      <td>
        {Number(roteiro.preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })}
      </td>
      <td>
        <img
          src={roteiro.foto}
          alt={`Foto da roteiro ${roteiro.duracao}`}
          width={150}
          height={100}
        />
      </td>
      <td>
        <i
          className="bi bi-search fs-4 text-info"
          style={{ cursor: "pointer" }}
          title="Ver Detalhes"
          onClick={() => mostraRoteiro(i)}
        ></i>
        <i
          className="bi bi-currency-dollar fs-4 text-success ms-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpen3(true), trocarValor(i);
          }}
        ></i>
        <i
          className="bi bi-trash3 fs-4 text-danger ms-2"
          style={{ cursor: "pointer" }}
          title="Excluir roteiro"
          onClick={() => excluiroteiro(i)}
        ></i>
      </td>
    </tr>
  ));
  const filtroRoteiros = filtro.map((roteiro, i) => (
    <tr>
      <td>{roteiro.destino}</td>
      <td>{roteiro.data}</td>
      <td>{roteiro.duracao} dias</td>
      <td>
        {Number(roteiro.preco).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
        })}
      </td>
      <td>
        <img
          src={roteiro.foto}
          alt={`Foto da roteiro ${roteiro.duracao}`}
          width={150}
          height={100}
        />
      </td>
      <td>
        <i
          className="bi bi-search fs-4 text-info"
          style={{ cursor: "pointer" }}
          title="Ver Detalhes"
          onClick={() => mostraRoteiro(i)}
        ></i>
        <i
          className="bi bi-currency-dollar fs-4 text-success ms-2"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setOpen3(true), trocarValor(i);
          }}
        ></i>
        <i
          className="bi bi-trash3 fs-4 text-danger ms-2"
          style={{ cursor: "pointer" }}
          title="Excluir roteiro"
          onClick={() => excluiroteiro(i)}
        ></i>
      </td>
    </tr>
  ));

  useEffect(() => {
    if (localStorage.getItem("roteiros")) {
      const roteiros2 = JSON.parse(localStorage.getItem("roteiros"));
      setRoteiros(roteiros2);
    }
  }, [roteiros]);

  return (
    <div className="container-fluid">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: '100px', marginRight: '20px' }}
            />
            <h1 className="me-3 text-primary me-5">Avião Azul Viagens</h1>
            <button
              className="btn btn-outline-primary px-3 me-3"
              onClick={() => setOpen(true)}
            >
              Adicionar Roteiro
            </button>
            <button
              className="btn btn-outline-primary px-3 me-3"
              onClick={() => {
                setMostraFiltro(false);
                reset({ destino: '' });
              }}
            >
              Todos Roteiros
            </button>
            <div className="d-flex">
              <form
                className="d-flex"
                role="search"
                onSubmit={handleSubmit(filtragem)}
              >
                <input
                  className="form-control me-2"
                  type="search"
                  id="destino"
                  placeholder="Destino"
                  aria-label="Search"
                  {...register('destino')}
                />
                <button className="btn btn-primary" type="submit">
                  Pesquisar
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-2">
        <div className="d-flex justify-content-between">
          <div>
            <h2>Roteiros</h2>
          </div>
        </div>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Destino</th>
              <th>Data</th>
              <th>Duração</th>
              <th>Preço</th>
              <th>Foto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{mostraFiltro ? filtroRoteiros : listaRoteiros}</tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="card">
          <div className="card-header">Cadastro de Roteiro</div>
          <form className="card-body" onSubmit={handleSubmit(gravaDados)}>
            <h5 className="card-title">Informações do Roteiro</h5>
            <div className="mb-3">
              <label htmlFor="destino" className="form-label">
                Destino:
              </label>
              <input
                type="text"
                className="form-control"
                id="destino"
                required
                {...register("destino")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="data" className="form-label">
                Data:
              </label>
              <input
                type="date"
                className="form-control"
                id="data"
                required
                {...register("data")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="duracao" className="form-label">
                Duração:
              </label>
              <input
                type="number"
                className="form-control"
                id="duracao"
                required
                {...register("duracao")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="preco" className="form-label">
                Preço:
              </label>
              <input
                className="form-control"
                type="number"
                id="preco"
                required
                {...register("preco")}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="atracoes" className="form-label">
                Atrações:
              </label>
              <textarea
                className="form-control"
                id="atracoes"
                rows="3"
                required
                {...register("atracoes")}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="foto" className="form-label">
                URL da Foto:
              </label>
              <input
                type="url"
                className="form-control"
                id="foto"
                required
                {...register("foto")}
              />
            </div>
            <input
              type="submit"
              value="Enviar"
              className="btn btn-primary px-5"
            />
          </form>
          {watch("foto") && (
            <img
              src={watch("foto")}
              alt="Foto da roteiro"
              className="rounded mx-auto d-block"
              width={240}
              height={200}
            />
          )}
        </div>
      </Modal>

      <Modal open={open2} onClose={() => setOpen2(false)} center>
        <div className="card">
          <img
            src={modalFoto}
            className="card-img-top"
            alt="Foto"
            width={400}
            height={320}
          />
          <div className="card-body">
            <h5 className="card-title">Destino: {modalDestino}</h5>
            <p className="card-text">Data: {modalData}</p>
            <p className="card-text">Duração: {modalDuracao}</p>
            <p className="card-text">Preço: {modalPreco}</p>
            <p className="card-text">Atrações: {modalAtracao}</p>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;