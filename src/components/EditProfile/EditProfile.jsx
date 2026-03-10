import { useState } from "react";

function EditProfile({ onSubmit }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ name, job });
  }

  return (
    <>
      <input className="popup__input" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="popup__input" placeholder="Profissão" value={job} onChange={(e) => setJob(e.target.value)} />

      <button className="popup__save-button" onClick={handleSubmit}>
        Salvar
      </button>
    </>
  );
}

export default EditProfile;