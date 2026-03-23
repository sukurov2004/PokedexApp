import React from "react";
import styles from "../styles/PokemonCard.module.css";
import { getImage } from "../helpers/getImage";

function PokemonCard({ pokemon }) {
  return (
    <div className={styles.card}>
      
      <img
        src={getImage(pokemon.id)}
        alt={pokemon.name}
        className={styles.image}
      />

      <h3 className={styles.name}>
        {pokemon.name}
      </h3>

      <p className={styles.type}>
        Type: {pokemon.type}
      </p>

      <p className={styles.exp}>
        EXP {pokemon.base_experience}
      </p>

      <button className={styles.button}>
        Details
      </button>

    </div>
  );
}

export default PokemonCard;