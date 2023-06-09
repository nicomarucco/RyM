import Card from "../card/card";

export default function Cards(props){
    const {characters, onClose} = props;
    return (
        <div>
            {characters.map((character => (<Card key={character.id} character = {character} onClose={onClose} />)))}
        </div>
    )
} 