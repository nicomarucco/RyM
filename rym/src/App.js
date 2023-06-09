import './App.css';
import Cards from './components/cardS/cardS';
import navBar from './components/navBar/navBar';
import {useState} from 'react';
import axios from 'axios';

const example = {
    id: 1,
    name: 'Rick Sanchez',
    status : 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
        name: 'Earth (c-137)',
        url: 'https://rickadnmortyapi.com/api/location/1'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
}

function App(){
    const [characters, setCharacters] = useState ([]);

    const onSearch = (id) => {
        axios( `https://rickandmortyapi.com/api/character/${id} `).then(({data}) => {
            if (data.name) {
                setCharacters((oldChars) => [...oldChars,data]);
            }else{
                window.alert('¡No hay personajes con este ID!');
            }
        });
    }

    function searchHandler(e){
        window.alert('e')
    }

    function closeHandler(id){
        setCharacters(characters.filter(character => character.id !== Number(id)));
    }

    return (
        <div className='App'>
            <navBar onSearch={onSearch} />
            <Cards characters={characters} onClose={closeHandler} />
        </div>
    )
}

export default App;