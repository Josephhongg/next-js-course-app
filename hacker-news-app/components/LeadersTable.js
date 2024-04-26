/**
 * Component: LeadersTable
 * Description: A NextJS component that renders a simple table that takes in the props "data"
 */
import styles from "../styles/StoriesInfoTable.module.css";

const LeadersTable = ({ data }) => {
  return (
    <table className={styles.container}>
      <thead>
        <tr className={styles.header}>
          <th>About</th>
          <th>Created</th>
          <th>Id</th>
          <th>Karma</th>
          <th>Submitted</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td className={styles.cell}>{item.about}</td>
            <td className={styles.cell}>{item.created}</td>
            <td className={styles.cell}>{item.id}</td>
            <td className={styles.cell}>{item.karma}</td>
            <td className={styles.cell}>
              {/* uses the slice method to limit the number of ids to the first 10 items in the array */}
              {item.submitted.slice(0, 10).map((id) => (
                <a key={idx}>
                  {`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
                </a>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadersTable;
