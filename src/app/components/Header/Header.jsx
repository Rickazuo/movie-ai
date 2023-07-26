import styles from "./Header.module.css";
import Image from "next/image";

import movieLogo from "../../../../public/movieLogo.svg";
import flashIcon from "../../../../public/flashIcon.svg";

export default function Header() {
  return (
    <main>
      <header className={styles.header}>
        <Image src={movieLogo} alt="icon of movie ai" height={85} width={44} />
        <button className={styles.recommendation} type="button">
          Nova recomendação
          <Image src={flashIcon} alt="" height={32} width={32} />
        </button>
      </header>
    </main>
  );
}