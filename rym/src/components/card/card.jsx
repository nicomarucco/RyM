import {useNavigate} from "react-router-dom";
import style from "./card.module.css";

export default function Card(props) {
  const navigate = useNavigate();
  const {character, onClose} = props;

  function navigateHandler() {
    navigate(`/detail/${character.id}`);
  }

  return (
    <div className={style.cardContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.characterImage}
          onClick={navigateHandler}
          src={character.image}
          alt={character.name}
        />
        <h2 className={style.name}>{character.name}</h2>
        <button
          className={style.closeButton}
          onClick={() => {
            onClose(character.id);
          }}
        >
          X
        </button>
      </div>

      <div className={style.atributes}>
        <h2>{character.species}</h2>
        <h2>{character.gender}</h2>
      </div>
    </div>
  );
}
