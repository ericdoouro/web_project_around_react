import { useState } from "react";

function EditAvatar({ onSubmit }) {
  const [avatar, setAvatar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ avatar });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Link do avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default EditAvatar;