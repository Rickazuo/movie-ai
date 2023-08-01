"use client";
import Image from "next/image";
import styles from "./BannerInformation.module.css";

import star from "../../../../public/star.svg";
import clock from "../../../../public/clockIcon.svg";
import calendar from "../../../../public/calendarIcon.svg";
import playButton from "../../../../public/playButton.svg";
import { useEffect, useState } from "react";
import { generateEtags } from "../../../../next.config";
import loadingIcon from "../../../../public/loadingIcon.gif";

const top100MoviesIDs = [
  "tt0111161",
  "tt0068646",
  "tt0071562",
  "tt0468569",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0060196",
  "tt0137523",
  "tt0120737",
  "tt0109830",
  "tt1375666",
  "tt0167261",
  "tt0080684",
  "tt0133093",
  "tt0099685",
  "tt0073486",
  "tt0047478",
  "tt0114814",
  "tt0114369",
  "tt0102926",
  "tt0317248",
  "tt0120815",
  "tt0245429",
  "tt0095765",
  "tt0407887",
  "tt0056058",
  "tt0082971",
  "tt0076759",
  "tt8503618",
  "tt0169547",
  "tt0120586",
  "tt0053125",
  "tt0027977",
  "tt0110413",
  "tt0095327",
  "tt0021749",
  "tt0088763",
  "tt0211915",
  "tt0090605",
  "tt0056172",
  "tt0118799",
  "tt0078788",
  "tt0081505",
  "tt0120689",
  "tt0086190",
  "tt0075314",
  "tt0062622",
  "tt1130884",
  "tt0093058",
  "tt0048473",
  "tt0056592",
  "tt0059578",
  "tt1853728",
  "tt0055630",
  "tt0053291",
  "tt0167404",
  "tt0047396",
  "tt0087843",
  "tt5311514",
  "tt0364569",
  "tt0246578",
  "tt0057115",
  "tt0047528",
  "tt0118799",
  "tt0093058",
  "tt0071853",
  "tt0033467",
  "tt0097576",
  "tt0095016",
  "tt0070735",
  "tt0071315",
  "tt0034583",
  "tt0053604",
  "tt0079417",
  "tt0110413",
  "tt0111161",
  "tt0050083",
  "tt0468569",
  "tt0167260",
  "tt0073486",
  "tt0099685",
  "tt0108052",
  "tt0114814",
  "tt0109830",
  "tt0120586",
  "tt0076759",
  "tt0133093",
  "tt0080684",
  "tt0120737",
  "tt0407887",
  "tt0167261",
  "tt0056058",
  "tt0071562",
  "tt0060196",
  "tt0082971",
  "tt0114369",
  "tt0094226",
  "tt0118799",
  "tt0078748",
  "tt0338013",
  "tt0054215",
  "tt0045152",
  "tt0050825",
  "tt0012349",
  "tt0102926",
  "tt0057012",
  "tt0120815",
  "tt0068646",
  "tt0042876",
  "tt0120586",
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

const secondsToHours = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}`;
};

export default function BannerInformation() {
  const [movieData, setMovieData] = useState(null);
  const [randomTTIndex, setrandomTTIndex] = useState(0);

  const fetchMovieData = async (tt) => {
    try {
      const response = await fetch(
        `https://search.imdbot.workers.dev/?tt=${tt}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMovieData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const shuffleIds = shuffleArray(top100MoviesIDs);

    if (randomTTIndex < shuffleIds.length) {
      const tt = shuffleIds[randomTTIndex];
      fetchMovieData(tt);
    }
  }, [randomTTIndex]);

  return (
    <main className={styles.main}>
      {movieData?.short ? (
        <>
          <header className={styles.header}>
            <h4 className={styles.title}>{movieData.short.name}</h4>
            <div className={styles.score}>
              <Image src={star} alt="icon of a star" width={46} height={46} />
              <span>{movieData.short.aggregateRating?.ratingValue ?? ""}</span>
            </div>
          </header>
          <Image
            className={styles.poster}
            src={movieData.short.image}
            alt="image of poster movie"
            width={300}
            height={400}
          />
          <div className={styles.timerCalendar}>
            <div className={styles.duration}>
              <Image src={clock} alt="icon of a clock" width={20} height={20} />
              <span>{secondsToHours(movieData.top?.runtime?.seconds)}</span>
            </div>
            <div className={styles.calendar}>
              <Image
                src={calendar}
                alt="icon of a calendar"
                width={20}
                height={20}
              />
              <span>{movieData.top?.releaseYear?.year}</span>
            </div>
          </div>
          <a
            href={movieData.short?.url}
            target="_blank"
            className={styles.playButton}
          >
            <Image
              src={playButton}
              alt="icon of a play button"
              width={28}
              height={28}
            />
            <span>Assistir Trailer</span>
          </a>
        </>
      ) : (
        <p className={styles.loading}>
          <Image src={loadingIcon} alt="loading gif" width={50} height={50} />
        </p>
      )}
    </main>
  );
}
