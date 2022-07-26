import * as React from 'react';
import { useQuery, gql } from '@apollo/client';


const GET_CHARACTERS = gql`
    query GetCharacters {
        characters {
            id
            name
            image
        }

    }
`;
 
export default function CharactersQuery() {
    const { loading, error, data } = useQuery(GET_CHARACTERS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error no data :( </p>;
    return data.characters.map(({id, name, image}) => (
        <div key={id}>
            <img src={image} alt={name} />
            <h3>{name}</h3>
        </div>
    ));
}
