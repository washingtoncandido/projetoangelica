import "../styles/header.css";
import Megafone from "../assets/megafone.png";

function Header() {
  return (
    <div className="cabecalho">
      <img src={Megafone} alt="Logo" />
      <a href="http://localhost:3000"><h1>COMMUNICATION</h1></a>
      <button className="botao-cabecalho">Lista de eventos</button>
      <a href="http://localhost:3000/RegisterEvent"><button className="botao-cabecalho">Criar evento</button></a>
      <button className="botao-cabecalho">Editar evento</button>
    </div>
  );
}

export default Header;
