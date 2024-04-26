/**
 * Component: StoriesInfo
 * Description: A Next.js page that displays a table of individual story
 */
import axios from "axios";
import { useRouter } from "next/router";
import StoriesInfoTable from "@/components/StoriesInfoTable";
import Dropdown from "@/components/Dropdown/Dropdown";
import styles from "../styles/Home.module.css";

const StoriesInfo = ({ story }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1 className={styles.heading}>Story Id: {id}</h1>
      <Dropdown />
      <StoriesInfoTable data={[story]} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const storyRes = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return {
    props: {
      story: storyRes.data,
    },
  };
};

export default StoriesInfo;
