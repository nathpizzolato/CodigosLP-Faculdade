import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [veiculos, setVeiculos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [filtroModelo, setFiltroModelo] = useState('');
  const [filtroMarca, setFiltroMarca] = useState('');
  const [filtroAno, setFiltroAno] = useState('');
  const [filtroPrecoMin, setFiltroPrecoMin] = useState('');
  const [filtroPrecoMax, setFiltroPrecoMax] = useState('');

  useEffect(() => {
    const savedVeiculos = JSON.parse(localStorage.getItem('veiculos'));
    if (savedVeiculos) {
      setVeiculos(savedVeiculos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('veiculos', JSON.stringify(veiculos));
  }, [veiculos]);

  const cadastrarVeiculo = (veiculo) => {
    setVeiculos([...veiculos, veiculo]);
    setModalIsOpen(false);
  };

  const filtrarVeiculos = () => {
    let resultado = veiculos;

    if (filtroModelo) {
      resultado = resultado.filter(veiculo => veiculo.modelo.toLowerCase().includes(filtroModelo.toLowerCase()));
    }

    if (filtroMarca) {
      resultado = resultado.filter(veiculo => veiculo.marca.toLowerCase().includes(filtroMarca.toLowerCase()));
    }

    if (filtroAno) {
      resultado = resultado.filter(veiculo => veiculo.ano >= parseInt(filtroAno));
    }

    if (filtroPrecoMin) {
      resultado = resultado.filter(veiculo => veiculo.preco >= parseInt(filtroPrecoMin));
    }

    if (filtroPrecoMax) {
      resultado = resultado.filter(veiculo => veiculo.preco <= parseInt(filtroPrecoMax));
    }

    return resultado;
  };

  const verTodos = () => {
    setFiltroModelo('');
    setFiltroMarca('');
    setFiltroAno('');
    setFiltroPrecoMin('');
    setFiltroPrecoMax('');
  };

  const exibirEstatisticas = () => {
    const numeroVeiculos = veiculos.length;
    const precoMedio = veiculos.reduce((acc, veiculo) => acc + veiculo.preco, 0) / numeroVeiculos;
    const veiculoMaiorValor = veiculos.reduce((prev, current) => (prev.preco > current.preco) ? prev : current);

    Swal.fire({
      title: 'Estatísticas',
      html: `
        <p>Número de Veículos Cadastrados: ${numeroVeiculos}</p>
        <p>Preço Médio dos Veículos: R$ ${precoMedio.toFixed(2)}</p>
        <p>Veículo de Maior Valor: ${veiculoMaiorValor.modelo} - R$ ${veiculoMaiorValor.preco}</p>
      `,
      icon: 'info',
    });
  };

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center justify-content-between mb-5">
        <img src="/logo.png" alt="Logo" style={{ width: '100px', marginRight: '20px' }} />
        <h1 className="revenda-title">Revenda Fusca Azul</h1>
        <div>
          <button className="btn btn-primary me-2" onClick={() => setModalIsOpen(true)}>Cadastrar Veículo</button>
          <button className="btn btn-primary" onClick={exibirEstatisticas}>Estatísticas</button>
        </div>
      </div>

      <Modal
         isOpen={modalIsOpen}
         onRequestClose={() => setModalIsOpen(false)}
         contentLabel="Cadastrar Veículo"
         style={{ content: { maxWidth: '600px', margin: 'auto' } }}
      >
        <h3>Cadastrar Veículo</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          cadastrarVeiculo({
            modelo: e.target.modelo.value,
            marca: e.target.marca.value,
            ano: parseInt(e.target.ano.value),
            preco: parseInt(e.target.preco.value),
            foto: e.target.foto.value
          });
        }}>
          <div className="mb-3">
            <label htmlFor="modelo" className="form-label">Modelo</label>
            <input type="text" className="form-control" id="modelo" name="modelo" required />
          </div>
          <div className="mb-3">
            <label htmlFor="marca" className="form-label">Marca</label>
            <input type="text" className="form-control" id="marca" name="marca" required />
          </div>
          <div className="mb-3">
            <label htmlFor="ano" className="form-label">Ano</label>
            <input type="number" className="form-control" id="ano" name="ano" required />
          </div>
          <div className="mb-3">
            <label htmlFor="preco" className="form-label">Preço</label>
            <input type="number" className="form-control" id="preco" name="preco" required />
          </div>
          <div className="mb-3">
            <label htmlFor="foto" className="form-label">URL da Foto</label>
            <input type="text" className="form-control" id="foto" name="foto" required />
          </div>
          <button type="submit" className="btn btn-primary me-2">Cadastrar</button>
          <button className="btn btn-secondary" onClick={() => setModalIsOpen(false)}>Fechar</button>
        </form>
      </Modal>

      <div className="row">
        <div className="col-md-4">
          <div className="mb-4">
            <h2>Filtro</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setVeiculos(filtrarVeiculos());
            }}>
              <div className="row g-3">
                <div className="col-md-12">
                  <input type="text" className="form-control form-control-sm" placeholder="Modelo" value={filtroModelo} onChange={(e) => setFiltroModelo(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control form-control-sm" placeholder="Marca" value={filtroMarca} onChange={(e) => setFiltroMarca(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input type="number" className="form-control form-control-sm" placeholder="Ano" value={filtroAno} onChange={(e) => setFiltroAno(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input type="number" className="form-control form-control-sm" placeholder="Preço Mínimo" value={filtroPrecoMin} onChange={(e) => setFiltroPrecoMin(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <input type="number" className="form-control form-control-sm" placeholder="Preço Máximo" value={filtroPrecoMax} onChange={(e) => setFiltroPrecoMax(e.target.value)} />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-primary btn-sm mt-3 me-2">Filtrar</button>
                  <button type="button" className="btn btn-secondary btn-sm mt-3" onClick={verTodos}>Ver Todos</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-md-8">
          <div>
            <h2>Lista de Veículos</h2>
            <ul className="list-group">
              {veiculos.map((veiculo, index) => (
                <li className="list-group-item d-flex align-items-center" key={index}>
                  <div className="me-3">
                    <img src={veiculo.foto} alt={`${veiculo.modelo} - ${veiculo.marca}`} style={{ maxWidth: '100px' }} />
                  </div>
                  <div>
                    <p>{veiculo.modelo} - {veiculo.marca}</p>
                    <p>Ano: {veiculo.ano}</p>
                    <p>Preço: R$ {veiculo.preco}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;