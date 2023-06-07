import Cards from "./components/cardsHolder/cardsHolder.jsx";
import axios from "axios";
import logoRM from "./assets/logorm.png";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import NavBar from "./components/navBar/navBar.jsx";

import "./App.css";
import Detail from "./views/detail/detail.jsx";
import About from "./views/about/about.jsx";
import ErrorPage from "./views/error/errorPage.jsx";

// const example = {
//   id: 1,
//   name: "Rick Sanchez",
//   status: "Alive",
//   species: "Human",
//   gender: "Male",
//   origin: {
//     name: "Earth (C-137)",
//     url: "https://rickandmortyapi.com/api/location/1",
//   },
//   image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// };

function App() {
  const [characters, setCharacters] = useState([]);

  function searchHandler(id) {
    // setCharacters([...characters, example]);
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data}) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App">
      <img className="title" src={logoRM} alt="logo" />
      <NavBar onSearch={searchHandler} random={randomHandler} />

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
