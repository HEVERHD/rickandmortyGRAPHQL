import * as React from 'react';
import { useQuery, gql } from '@apollo/client';


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

 
function CharactersQuery() {
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error no data :( </p>;
    return data.characters.results.map(({id, name, image, status, species, type, origin, gender, created, location})  => (
        <div key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{status}</p>
            <p>{species}</p>
            <p>{type}</p>
            <p>{status}</p>
            <p>{origin.name}</p>
            <p>{location.name}</p>
            <p>{gender}</p>
            <p>{created}</p>
        </div>

    ));
        
};

export default CharactersQuery;
