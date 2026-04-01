import { useState } from "react";

function NewCard({ onSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, link });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="Link da imagem"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button type="submit">Criar</button>
    </form>
  );
}

export default NewCard;