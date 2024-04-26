/**
 * Component: Leader
 * Description: A Next.js page that displays a table of individual leaders
 */
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import LeadersTable from "@/components/LeadersTable";

const Leader = ({ leader }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1 className={styles.heading}>Username: {id}</h1>
      <LeadersTable data={[leader]} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  // user id is passed as a parameter to fetch the api data
  const { id } = context.params;
  const leaderRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`
  );
  return {
    props: {
      leader: leaderRes.data,
    },
  };
};

export default Leader;
