import { useEffect, useState } from "react";
import styles from "./memory-game.module.css";

type Props = {
  images: string[];
};

const MemoryGame = ({ images }: Props) => {
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [flippedCard, setFlippdeCard] = useState<number[]>([]);

  const handleImageClick = (index: number) => {
    setFlippdeCard((state) => [...state, index]);
  };

  useEffect(() => {
    if (flippedCard.length !== 2) return;
    const [a, b] = flippedCard;
    if (images[a] === images[b]) {
      setOpenCards((state) => [...state, a, b]);
      setFlippdeCard([]);
    } else {
      const t = setTimeout(() => setFlippdeCard([]), 500);
      return () => clearTimeout(t);
    }
  }, [flippedCard]);

  const isImageVisible = (index: number) => {
    if (flippedCard.includes(index)) return true;
    if (openCards.includes(index)) return true;
    return false;
  };
  return (
    <div>
      <h1>Memory Game</h1>
      <p>Build your memory game! </p>
      <p>Here are the sample images:</p>
      <div className={styles.wrapper}>
        {images.map((image, index) => (
          <div className={styles.item} key={index} style={{ padding: "5px" }}>
            {isImageVisible(index) ? (
              <img src={image} />
            ) : (
              <div
                className="imagePlaceholder"
                style={{
                  backgroundColor: "gray",
                  width: "100%",
                  height: "100%",
                }}
                onClick={() => handleImageClick(index)}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
