import React, { useState } from "react";
import "../styles/CreateEvent.css";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Título:", title);
    console.log("Descrição:", description);
    console.log("Imagem:", image);
    console.log("Data:", date);
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
      <h1>Crie seu evento</h1>
        <label>
          Título:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Descrição:
          <textarea value={description} onChange={handleDescriptionChange} />
        </label>
        <label>
          Imagem:
          <input type="file" onChange={handleImageChange} />
          {image && <p>Arquivo selecionado: {image.name}</p>}
        </label>
        <label>
          Data:
          <input
            type="datetime-local"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <button type="submit" className="botao-form">Salvar evento</button>
      </form>
    </div>
  );
}

export default CreateEvent;
