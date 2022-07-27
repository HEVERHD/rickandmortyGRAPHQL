import React from "react";

const Character = ({ character }) => {
  return (
    <section className="personaje">
      <div className="personaje-header">
        <div className="estado">
          <span className={character.status}></span>
          <p>{character.status}</p>
        </div>
      </div>
      <div className="personaje-body">
        <h1>{character.name}</h1>
        <div key={character.id}>
          <figure>
            <img src={character.image} alt={character.name} />
          </figure>
          <h6> id : {character.id}</h6>
          <p>
            <b>Species</b> : {character.species}
          </p>
          <p>
            <b>Types</b> : {character.type ? character.type : "no Type"}
          </p>
          <p>
            <b>Origin</b> :{" "}
            {character.origin.name ? character.origin.name : "no Origin"}
          </p>
          <p>
            <b>Locations</b> :{" "}
            {character.location.name ? character.location.name : "no Location"}
          </p>
          <p>
            <b>Created at</b>:{" "}
            {new Date(character.created).toLocaleDateString()}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Character;
