import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
        status
        species
        type
        origin {
          name
        }
        location {
          name
        }
        gender
        created
      }
    }
  }
`;

// function CharactersQuery() {
//     const { loading, error, data } = useQuery(GET_CHARACTERS);
//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error not data :( </p>;
//     return data.characters.results.map(
//       ({
//         id,
//         name,
//         image,
//         status,
//         species,
//         type,
//         origin,
//         gender,
//         created,
//         location,
//       }) => (
//         <section className="personaje">
//           <div className="personaje-header">
//             <div className="estado">
//               <span className={status}></span>
//               <p>{status}</p>
//             </div>
//           </div>
//           <div className="personaje-body">
//             <div key={id}>
//               <figure>
//                 <img src={image} alt={name} />
//               </figure>
//               <h1>{name}</h1>
//               <h6>id : {id}</h6>
//               <p><b>Species</b> : {species}</p>
//               <p><b>Gender</b> : {gender}</p>
//               <p>{type ? type : "no Type"}</p>
//               <p><b>Origin</b> : {origin.name}</p>
//               <p><b>Locations</b> : {location.name}</p>
//               <p><b>Created at</b>: {new Date(created).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </section>
//       )
//     );
//   }
  
//   export default CharactersQuery;
  