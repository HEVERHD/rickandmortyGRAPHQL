import React from "react";

//Styled Components
import { Headersb, Title, Estado } from "./Character.element";

const Character = ({ character }) => {
  return (
    <div className="container">
      <section className="personaje">
        <Title>id : {character.id}</Title>
        <Estado className="personaje-header">
          <div className="estado">
            <span className={character.status}></span>
            <div>{character.status}</div>
          </div>
        </Estado>
        <div className="personaje-body">
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
          <Headersb>{character.name}</Headersb>
          <p>
            <b>Specie</b> : {character.species}
          </p>
          <p>
            <b>Types</b> : {character.type ? character.type : "no Type"}
          </p>
          <p>
            <b>Origin : </b>
            {character.origin.name ? character.origin.name : "no Origin"}
          </p>
          <p>
            <b>Location : </b>
            {character.location.name ? character.location.name : "no Location"}
          </p>
          <p>
            <b>Created at</b> :{" "}
            {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Character;
