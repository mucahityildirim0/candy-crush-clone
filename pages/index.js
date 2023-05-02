import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const width = 8;

const candyColors = ["blue", "green", "orange", "purple", "red", "yellow"];

const Home = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);

  const createBoard = () => {
    const randomColorArrangement = [];
    for (let i = 0; i < width * width; i++) {
      const randomColor =
        candyColors[Math.floor(Math.random() * candyColors.length)];
      randomColorArrangement.push(randomColor);
    }
    setCurrentColorArrangement(randomColorArrangement);
  };

  useEffect(() => {
    createBoard();
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.game}>
        {currentColorArrangement.map((candyColor, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={index} style={{ backgroundColor: candyColor }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
