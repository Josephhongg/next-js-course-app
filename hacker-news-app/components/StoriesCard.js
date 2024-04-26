/**
 * Component: StoriesCard
 * Description: A NextJS component that renders a simple story card that takes in the props "data"
 */
import styles from "../styles/StoriesTable.module.css";

const StoriesCard = ({ data }) => {
  return (
    <div className={styles.cardContainer} data-testid="card-container">
      {data.map((story, idx) => (
        <div key={idx} className={styles.card}>
          <div className={styles.cardTitle}>{story.title}</div>
          <a href={`/${story.id}`} className={styles.cardButton}>
            More Info.
          </a>
        </div>
      ))}
    </div>
  );
};

export default StoriesCard;
