import styles from "./Hero.module.scss";

function Hero() {
  return (
    <header className={styles.hero}>
      <h1 className={styles.title}>Ahşap Üçgen Kedi Evi</h1>

      <p className={styles.text}>
        Bahçenizde, sokağınızda, barınaklarda artık her yerde patili dostlarımıza
        destek olabilirsiniz.
      </p>

      <hr className={styles.divider} />
    </header>
  );
}

export default Hero;
