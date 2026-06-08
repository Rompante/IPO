import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Barra de navegação superior em bootstap 4 */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">IPO</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/clientes">Clientes</Link>
            <Link className="nav-link" to="/veiculos">Veículos</Link>
            <Link className="nav-link" to="/inspecoes">Inspeções</Link>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/clientes" element={<ClientesList />} />
          <Route path="/veiculos" element={<VeiculosList />} />
          <Route path="/inspecoes" element={<InspecoesList />} />
        </Routes>
      </div>
    </div>
  );
}

// Estas páginas serão criadas nas próximas etapas
function Inicio() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1>Centro de Inspeções de Automoveis</h1>
        <p>IPO - ESDS1</p>
      </div>
    </div>
  );
}
function ClientesList() {
  return (
    <div className="container">
      <h2>Clientes
        <button className="btn btn-sm btn-dark float-right mr-1"><i className="fa fa-plus"></i> Novo Cliente</button>
        <button className="btn btn-sm btn-dark float-right mr-1"><i className="fa fa-refresh"></i> Atualizar</button>
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Morada</th>
            <th>Nif</th>
            <th>Opeções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Tomas</td>
            <td>Lisboa</td>
            <td>123456789</td>
            <td>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-eye"></i> </button>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-pencil"></i> </button>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-trash"></i></button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Maria</td>
            <td>Porto</td>
            <td>123456789</td>
            <td>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-eye"></i> </button>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-pencil"></i> </button>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-trash"></i> </button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>João</td>
            <td>Guimarães</td>
            <td>123456789</td>
            <td>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-eye"></i> </button>
              <button className="btn btn-sm btn-dark mr-1" ><i className="fa fa-pencil"></i></button>
              <button className="btn btn-sm btn-dark mr-1"><i className="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
function VeiculosList() {
  return (<h2>Página de Veículos</h2>);
}
function InspecoesList() {
  return (<h2>Página de Inspeções</h2>);
}

export default App