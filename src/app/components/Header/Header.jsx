"use client";
import styles from "./Header.module.css";
import Image from "next/image";

import movieLogo from "../../../../public/movieLogo.svg";
import flashIcon from "../../../../public/flashIcon.svg";

export default function Header() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <header className={styles.header}>
      <Image src={movieLogo} alt="icon of movie ai" height={65} width={0} />
      <button
        onClick={handleRefresh}
        className={styles.recommendation}
        type="button"
      >
        Nova recomendação
        <Image src={flashIcon} alt="" height={32} width={32} />
      </button>
    </header>
  );
}
