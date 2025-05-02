import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/Link";
function Home() {
  return (
    <div className={styles.main}>
      <header className={styles.header}>header</header>
      <main className={styles.rightContent}>
        <div className={styles.logo}>
          <Image
            src="/logo.png"
            alt="logo de l'application"
            width={70}
            height={70}
          />
        </div>
        <h1>See what's happening</h1>
        <h2>Join hacktweet today</h2>
        <button type="button">Sign up</button>
        <Link href="/">Already have account</Link>
        <button type="button">Sign in</button>
      </main>
    </div>
  );
}

export default Home;
