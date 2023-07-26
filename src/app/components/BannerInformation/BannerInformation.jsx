import Image from "next/image";
import styles from "./BannerInformation.module.css";

import star from "../../../../public/star.svg";
import clock from "../../../../public/clockIcon.svg";
import calendar from "../../../../public/calendarIcon.svg";
import playButton from "../../../../public/playButton.svg";
import poster from "../../../../public/poster.png";

export default function BannerInformation() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h4 className={styles.title}>Title</h4>
        <div className={styles.score}>
          <Image src={star} alt="icon of a star" width={46} height={46} />
          <span>X.X</span>
        </div>
      </header>
      <Image
        src={poster}
        alt="image of poster movie"
        width={200}
        height={400}
      />
      <div>
        <div>
          <Image src={clock} alt="icon of a clock" width={20} height={20} />
          <span>Duration</span>
        </div>
        <div>
          <Image
            src={calendar}
            alt="icon of a calendar"
            width={20}
            height={20}
          />
          <span>Year</span>
        </div>
        <button>
          <Image
            src={playButton}
            alt="icon of a play button"
            width={28}
            height={28}
          />
          <span>Assitir trailer</span>
        </button>
      </div>
    </main>
  );
}
