import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header/Header'
import BannerInformation from './components/BannerInformation/BannerInformation'



export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <Header />
        <div className={styles.posters}>
        <BannerInformation />
        <BannerInformation />
        <BannerInformation />
        </div>
      </div>
    </main>
  )
}
