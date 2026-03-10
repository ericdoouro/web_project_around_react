export default function RemoveCard() {
    return (
      <form
        className="popup__form"
        name="card-form"
        id="new-card-form"
        noValidate
      >
        <label className="popup__field">
          <input
            className="popup popup__input_type_card-name"
            maxLength="30"
            minLength="1"
            name="card-name"
            placeholder="Title"
            required
            type="text"
          />
          <span className="popup__error"></span>
        </label>
  
        <label className="popup__field">
          <input
            className="popup popup__input_type_url"
            name="link"
            placeholder="Image link"
            required
            type="url"
          />
          <span className="popup__error"></span>
        </label>
  
        <button className="button popup__button" type="submit">
          Salvar
        </button>
      </form>
    );
  }
  