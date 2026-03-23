import React from "react";
import PokemonCard from "./PokemonCard";
import styles from "../styles/Team.module.css";

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