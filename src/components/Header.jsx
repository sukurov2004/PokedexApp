import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        
        <h1 className={styles.title}>
          Pokedex Battle
        </h1>

        <button
          onClick={() => window.location.reload()}
          className={styles.button}
        >
          Start Game
        </button>

      </div>
    </div>
  );
}

export default Header;