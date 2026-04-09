import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";



function Header() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("Valor do Hook:", currentUser)
  return (
    <div className="header">
      <img
        className="header__logo"
        src="/images/Vector.png"
        alt="Logo Around"
      />
    </div>
  );
}

export default Header;