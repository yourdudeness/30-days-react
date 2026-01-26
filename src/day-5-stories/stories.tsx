import { useQuery } from "@tanstack/react-query";
import { getTop10Stories, type HackerNewsArticle } from "../api";
import StoriesItem from "./stories-list";
import React from "react";

const StoriesApp = () => {
  const { isPending, error, data } = useQuery<HackerNewsArticle[]>({
    queryKey: ["top10stories"],
    queryFn: getTop10Stories,
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <ul>
      {data?.map((story) => {
        return (
          <React.Fragment key={story.id}>
            <StoriesItem story={story} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default StoriesApp;
