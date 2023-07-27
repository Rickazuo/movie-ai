"use client";
import Image from "next/image";
import styles from "./BannerInformation.module.css";

import star from "../../../../public/star.svg";
import clock from "../../../../public/clockIcon.svg";
import calendar from "../../../../public/calendarIcon.svg";
import playButton from "../../../../public/playButton.svg";
import { useEffect, useState } from "react";

export default function BannerInformation() {
  const [movieData, setMovieData] = useState(null);
  const [randomTT, setRandomTT] = useState("");

  useEffect(() => {
    const generateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * 9000000) + 1000000;
      const randomTT = `tt${randomNumber}`;
      setRandomTT(randomTT);
      return randomTT;
    };

    const fetchMovieData = async () => {
      const randomTT = generateRandomNumber();

      try {
        const response = await fetch(
          `https://search.imdbot.workers.dev/?tt=${randomTT}`
        );
        if (!response.ok) {
          throw new Error("Metwork response was not ok");
        }
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovieData();
  }, []);

  return (
    <main className={styles.main}>
      <p>Current Random Value: {randomTT}</p>
      {movieData?.short ? (
        <>
          <header className={styles.header}>
            <h4 className={styles.title}>{movieData.short.name}</h4>
            <div className={styles.score}>
              <Image src={star} alt="icon of a star" width={46} height={46} />
              <span>X.X</span>
            </div>
          </header>
          <Image
            src={movieData.short.image}
            alt="image of poster movie"
            width={300}
            height={400}
            // layout="responsive"
          />
          <div className={styles.timerCalendar}>
            <div className={styles.duration}>
              <Image src={clock} alt="icon of a clock" width={20} height={20} />
              <span>Duration**</span>
            </div>
            <div className={styles.calendar}>
              <Image
                src={calendar}
                alt="icon of a calendar"
                width={20}
                height={20}
              />
              <span>{movieData.short.releaseYear?.year}</span>
            </div>
          </div>
          <button className={styles.playButton}>
            <Image
              src={playButton}
              alt="icon of a play button"
              width={28}
              height={28}
            />
            <span>Assistir trailer**</span>
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
