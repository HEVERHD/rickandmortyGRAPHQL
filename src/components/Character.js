import React from "react";
import { Title } from "./Character.element";

const Character = ({ character }) => {
  return (
    <div className="container">
      <section className="personaje">
        <div className="personaje-header">
          <div className="estado">
            <span className={character.status}></span>
            <h4>{character.status}</h4>
          </div>
        </div>
        <div className="personaje-body">
          <figure>
            <img src={character.image} alt={character.name} />
            <Title>{character.id}</Title>
          </figure>

          <h2>{character.name}</h2>
          <p><b>Specie</b> : {character.species}</p>
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
