import styles from "./Hero.module.scss";

function Hero() {
  return (
    <header className={styles.hero}>
      <p className={styles.text}>
        <h3>Ahşap Üçgen Kedi Evi</h3>
      </p>

      <p className={styles.text}>
        Bahçenizde, sokağınızda, barınaklarda artık her yerde patili dostlarımıza destek olabilirsiniz.
      </p>

      <hr className={styles.divider} />
    </header>
  );
}

export default Hero;
