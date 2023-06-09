export default function Card(props){
    const {character,onClose} = props;
    return(
        <div>
            {}
             <button onClick={() => onClose(character.id)}>X</button>
             <h2>{character.name} </h2>
             <h2>{character.species} </h2>
             <h2>{character.genre}</h2>
             <img src={character.image} alt={character.name} />
        </div>
    )
}