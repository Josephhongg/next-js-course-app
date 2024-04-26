/**
 * Component: Home
 * Description: A Next.js page that displays the application's homepage
 */
import Dropdown from "@/components/Dropdown/Dropdown";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.heading}>Home Page</h1>
      <Dropdown />
    </>
  );
};
export default Home;
