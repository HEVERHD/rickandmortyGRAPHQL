import * as React from "react";

//GraphQL
import { useLazyQuery } from "@apollo/client";
import GET_CHARACTER from "../graphql/Queries";

//components React
import Character from "../components/Character";
import { Loadings } from "../components/Loadings";

//Styled Components
import { Headers } from "../components/Character.element";
import { Button } from "../components/Button.elemtens";


function Home() {
  const [list, setList] = React.useState([]);
  const [currentCharacter, setCurrentCharacter] = React.useState(null);
  const [getCharacter, { loading, error, data }] = useLazyQuery(GET_CHARACTER, {
    onCompleted: (data) => {
      setList([data.character, ...list]);
      setCurrentCharacter(data.character);
    },
  });

  if (loading) return <Loadings />;
  if (error) return <p>Error no data :( </p>;

  if (data) {
    console.log("hola");
  }

  // Generar una lista de personajes random por ID
  const getRandom = () => {
    return Math.floor(Math.random() * 826) + 5;
  };

  return (
    <div>
      <Button
        className="btn"
        onClick={() => getCharacter({ variables: { id: getRandom() } })}
      >
        Get Character Random
      </Button>
      {data && <Character character={currentCharacter} />}
      {list.length > 0 &&
        list.map((character) => (
          <div className="history" key={character.id}>
          <li>
              <Headers>{character.name}</Headers>
              <img src={character.image} alt={character.name} />
              <Button className="view" onClick={() => setCurrentCharacter(character)}>
                view
              </Button>
            </li>
          </div>
        ))}
    </div>
  );
}

export default Home;
