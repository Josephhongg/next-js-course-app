/**
 * Component: Leaders
 * Description: A Next.js page that displays a table of leaders
 */
import styles from "../../styles/StoriesInfoTable.module.css";
import Headerstyles from "../../styles/Home.module.css";

const Leaders = () => {
  const data = [
    { id: 1, name: "tptacek" },
    { id: 2, name: "jacquesm" },
    { id: 3, name: "ingve" },
    { id: 4, name: "danso" },
    { id: 5, name: "pseudolus" },
    { id: 6, name: "rbanffy" },
    { id: 7, name: "tosh" },
    { id: 8, name: "Tomte" },
    { id: 9, name: "lxm" },
    { id: 10, name: "patio11" },
    { id: 11, name: "Animats" },
    { id: 12, name: "ColinWright" },
    { id: 13, name: "rayiner" },
    { id: 14, name: "JumpCrisscross" },
    { id: 15, name: "todsacerdoti" },
    { id: 16, name: "dragonwriter" },
    { id: 17, name: "ChuckMcM" },
    { id: 18, name: "zdw" },
    { id: 19, name: "luu" },
    { id: 20, name: "TeMPOraL" },
  ];

  return (
    <>
      <h1 className={Headerstyles.heading}>Leaderboard</h1>
      <table className={styles.container}>
        <thead>
          <tr className={styles.header}>
            <th>Leader board</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td className={styles.cell}>{item.id}</td>
              <td className={styles.cell}>
                <a href={`leaders/${item.name}`}>{item.name}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Leaders;
