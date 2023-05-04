import React, { useState, useEffect } from "react";

import styles from "../styles/ScoreBoard.module.css";

const ScoreBoard = ({ score }) => {
  return (
    <div className={styles.scoreBoard}>
      <h2 className={styles.score}>{score}</h2>
    </div>
  );
};

export default ScoreBoard;
