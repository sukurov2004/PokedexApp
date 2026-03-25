import React from "react";
import PropTypes from "prop-types";
import PokemonCard from "./PokemonCard";
import styles from "../styles/Team.module.css";

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      base_experience: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  total: PropTypes.number.isRequired,
  isWinner: PropTypes.bool.isRequired
};

function Team({ team, total, isWinner }) {
  return (
    <div
      className={`${styles.container} ${
        isWinner ? styles.winner : styles.loser
      }`}
    >
      <h2
        className={`${styles.title} ${
          isWinner ? styles.winnerText : styles.loserText
        }`}
      >
        {isWinner ? "Winner 🏆" : "Lose ❌"}
      </h2>

      <p className={styles.total}>{total}</p>

      <div className={styles.grid}>
        {team.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
}

export default Team;