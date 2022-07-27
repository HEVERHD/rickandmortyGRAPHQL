import * as React from "react";
import { useLazyQuery } from "@apollo/client";
import  GET_CHARACTER  from "../graphql/Queries";
import Character from "../components/Character";
import { ListCharacter } from "../components/ListCharacter";


function Home(){
  const [list , setList] = React.useState([]);
  const [getCharacter, { loading, error, data }] = useLazyQuery(GET_CHARACTER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error no data :( </p>;

  if (data && data.characters) {
    setList(data.characters);
  }
    
  console.log(data);
  
  
  const getRandom = () => {
    return Math.floor(Math.random() * 826) + 1 
  } 
  
  
  return (
    <div>
      <button onClick={() => getCharacter({ variables: { id: getRandom() } })}>
        Get Character
      </button>

      {data && <Character character={data.character} />}
      <ListCharacter list={list} />

    </div>
  );
}
        

export default Home;

























// function CharactersQuery() {
//   const { loading, error, data } = useQuery(GET_CHARACTERS);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error no data :( </p>;
//   return data.characters.results.map(
//     ({
//       id,
//       name,
//       image,
//       status,
//       species,
//       type,
//       origin,
//       gender,
//       created,
//       location,
//     }) => (
//       <section className="personaje">
//         <div className="personaje-header">
//           <div className="estado">
//             <span className={status}></span>
//             <p>{status}</p>
//           </div>
//         </div>
//         <div className="personaje-body">
//           <div key={id}>
//             <figure>
//               <img src={image} alt={name} />
//             </figure>
//             <h1>{name}</h1>
//             <h6>id : {id}</h6>
//             <p><b>Species</b> : {species}</p>
//             <p><b>Gender</b> : {gender}</p>
//             <p>{type ? type : "no Type"}</p>
//             <p><b>Origin</b> : {origin.name}</p>
//             <p><b>Locations</b> : {location.name}</p>
//             <p><b>Created at</b>: {new Date(created).toLocaleDateString()}</p>
//           </div>
//         </div>
//       </section>
//     )
//   );
// }

// export default CharactersQuery;