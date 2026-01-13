import styles from "./Card.module.scss";

type CardProps = {
  image: string;
};

function Card({ image }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageArea}>
        <img
          src={image}
          alt="Üçgen Kedi Evi"
          loading="lazy"
          decoding="async"
          width="300"
          height="200"
        />
      </div>
      <div className={styles.infoArea}>
        <p>
          <strong>Ürün Adı:</strong> Üçgen Kedi Evi
        </p>
        <p>
          <strong>Ürün Fiyatı:</strong> 1000 TL
        </p>
        <p>
          <strong>Garanti Süresi:</strong> 1 Yıl
        </p>
      </div>
    </div>
  );
}

export default Card;