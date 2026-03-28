import styles from "./CountryCard.module.css";

type County = {
  id: number;
  name: string;
  airport: string;
  price: number;
  category: string;
  image: string;
};

type CountryCardProps = {
  county: County;
};

export default function CountryCard({ county }: CountryCardProps) {
  return (
    <div className={styles.card}>
      <img src={county.image} alt={county.name} className={styles.image} />

      <div className={styles.content}>
        <span className={styles.badge}>{county.category}</span>
        <h3 className={styles.title}>{county.name}</h3>
        <p className={styles.airport}>{county.airport}</p>
        <p className={styles.price}>${county.price} starting price</p>

        <div className={styles.buttonRow}>
          <button className={styles.primaryButton}>View</button>
          <button className={styles.secondaryButton}>Book</button>
        </div>
      </div>
    </div>
  );
}