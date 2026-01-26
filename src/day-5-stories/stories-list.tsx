import type { HackerNewsArticle } from "../api";

type Props = {
  story: HackerNewsArticle;
};

const StoriesItem = ({ story }: Props) => {
  return (
    <li>
      <h2>{story.title}</h2>
      <p>By: {story.by}</p>
      <p>Score: {story.score}</p>
      <a href={story.url} target="_blank">{story.title}</a>
    </li>
  );
};

export default StoriesItem;
