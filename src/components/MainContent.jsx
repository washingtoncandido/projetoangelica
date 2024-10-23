import "../styles/MainContent.css";
import Whatsapp from "../assets/whatsapp.png";
import Mensagem from "../assets/mensagem.png";
import Demanda from "../assets/demanda.png";
import Text from "../assets/pctext.png";

function MainContent() {
  return (
    <div className="Main">
      <h2>Bem Vindo ao " "</h2>
      <div className="carrossel">
        <div className="elementos">
          <img src={Text} alt="Text" />
          NÃO CONSEGUE RESPONDER MENSAGEM
        </div>
        <div className="elementos">
          <img src={Demanda} alt="Demanda" />
          TEM ALTA DEMANDA DE MENSAGEM
        </div>
        <div className="elementos">
          <img src={Mensagem} alt="Mensagem" />
          PRECISA ENVIAR VÁRIAS MENSAGENS SIMULTANEAS
        </div>
        <div className="elementos">
          <img src={Whatsapp} alt="whatsapp" />
          TEM WHATSAPP COMO SEU MAIOR NEGOCIO
        </div>
      </div>
      <a href="http://localhost:3000/RegisterEvent">
        <button className="botao">COMUNICADO</button>
      </a>
    </div>
  );
}

export default MainContent;
