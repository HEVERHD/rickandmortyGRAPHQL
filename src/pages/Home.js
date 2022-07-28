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


  // Generate a random number between 1 and 826

  function randomNumber() {
    return Math.floor(Math.random() * 826) + 1;
  }

  // scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }

  function todos(character){
    setCurrentCharacter(character);
    scrollToTop();

  
  }
  return (
    <div className="container-princ">
    <div className="btn-random">
    <Button
      onClick={() => getCharacter({ variables: { id: randomNumber() } })}
    >
      Get Character Random
    </Button>
    </div>
      <div className="container-list">
        {data && <Character character={currentCharacter} />}
        {list.length > 0 &&
          <>
      <Headers>
      history
      </Headers>
          {list.map((character) => (
            <div className="lis-characters" key={character.id}>
              <div className="container-name">
                <Headers className="name-list">{character.name}</Headers>
                <div className="img-list">
                <img src={character.image} alt={character.name} />
                <div className="btn-list">
                <Button  onClick= {()  => todos(character)}>
                  view
                </Button>
                </div>
                
                </div>
              </div>
            </div>
          ))}
        
          </>}
      </div>
    </div>
  );
}

export default Home;
