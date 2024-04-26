/**
 * Component: StoriesInfoTable
 * Description: A NextJS component that renders a simple table that takes in the props "data"
 */
import styles from "../styles/StoriesInfoTable.module.css";

// converts to time to a readable format
const formatTime = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
};

const StoriesInfoTable = ({ data }) => {
  return (
    <table className={styles.container} data-testid="story-table">
      <thead>
        <tr className={styles.header}>
          <th>By</th>
          <th>Kids</th>
          <th>Score</th>
          <th>Time</th>
          <th>Title</th>
          <th>Type</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((story, idx) => (
          <tr key={idx}>
            <td className={styles.cell}>{story.by}</td>
            <td className={styles.cell}>
              {/* checks if the 'story.kids' property exists and has a length
              greater than 0. The ?. operator is used to check if the story.kids 
              property exists before accessing its length property. 
              If the condition is true, the code inside the first set of parentheses is executed
              which includes a slice method call on the story.kids array, 
              limiting the number of child comment IDs to the first 5 items in the array. */}
              {story.kids?.length > 0
                ? story.kids.slice(0, 5).map((id) => (
                    <div key={id}>
                      <a
                        target="_blank"
                        href={`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
                      >{`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}</a>
                    </div>
                  ))
                : "N/A"}
              {/* if the story is empty or undefined, "N/A" is displayed */}
            </td>
            <td className={styles.cell}>{story.score}</td>
            <td className={styles.cell}>{formatTime(story.time)}</td>
            <td className={styles.cell}>{story.title}</td>
            <td className={styles.cell}>{story.type}</td>
            <td className={styles.cell}>
              <a target="_blank" href={story.url}>
                {story.url}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StoriesInfoTable;
