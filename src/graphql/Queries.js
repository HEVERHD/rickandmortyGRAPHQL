import { gql } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      name
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
`;
export default GET_CHARACTER;
