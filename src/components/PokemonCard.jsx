import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/PokemonCard.module.css";
import { getImage } from "../helpers/getImage";

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    base_experience: PropTypes.number.isRequired
  }).isRequired
};

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

    </div>
  );
}

export default PokemonCard;