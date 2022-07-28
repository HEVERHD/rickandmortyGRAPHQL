import * as React from "react";

//GraphQL
import { useLazyQuery } from "@apollo/client";
import GET_CHARACTER from "../graphql/Queries";

//components React
import Character from "../components/Character";
import { Loadings } from "../components/Loadings";
import { Error } from "../components/Error";

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
  if (error) return <Error />;

  if (data) {
    console.log("hola");
  }

  // Generar una lista de personajes random por ID
  const getRandom = () => {
    return Math.floor(Math.random() * 826) + 5;
  };

  return (
    <div className="container-princ">
      <Button
        className="btn"
        onClick={() => getCharacter({ variables: { id: getRandom() } })}
      >
        Get Character Random
      </Button>
      <div>
      <Headers>History</Headers>
      </div>
      <div className="container-list">
      {data && <Character character={currentCharacter} />}
      {list.length > 0 &&
        list.map((character) => (
          <div className="lis-characters" key={character.id}>
       
            <div className="container-name">
              <Headers className="name-list">{character.name}</Headers>
              <Button onClick={() => setCurrentCharacter(character)}>
                view
              </Button>
              <div className="img-list">
                <img src={character.image} alt={character.name} />
                
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Home;
