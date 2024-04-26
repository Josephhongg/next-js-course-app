/**
 * Component: Best
 * Description: A Next.js page that displays a table of Best stories
 */
import axios from "axios";
import Dropdown from "@/components/Dropdown/Dropdown";
import StoriesCard from "@/components/StoriesCard";
import styles from "../styles/Home.module.css";

const Best = ({ stories }) => {
  return (
    <>
      <h1 className={styles.heading}>Best Stories</h1>
      <Dropdown />
      <StoriesCard data={stories} />
    </>
  );
};

export const getServerSideProps = async () => {
  // retrieve the first 50 stories and stores them in "storiesRes"
  const storiesRes = await axios.get(
    'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=50'
  );
  // maps through storiesRes
  // for each item sends a GET request
  // using the id to construct each unique endpoint
  const storyRequests = storiesRes.data.map((id) =>
    axios.get(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    )
  );
  // The Promise.all method is then called on the array of story requests,
  // which waits for all the promises to resolve and returns an array of the resolved responses.
  const stories = await Promise.all(storyRequests).then((responses) =>
    responses.map((res) => res.data)
  );

  return {
    props: {
      stories,
    },
  };
};

export default Best;
