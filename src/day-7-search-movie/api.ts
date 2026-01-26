export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
};

type MovieSearchResponse = {
  page: number;
  results: Array<Movie>;
  total_results: number;
  total_pages: number;
};

export const searchMovies = async (
  searchText: string,
): Promise<MovieSearchResponse> => {
  const params = new URLSearchParams({
    query: searchText,
  });

  const url = `https://api.themoviedb.org/3/search/movie?${params.toString()}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_DB_API_KEY}`,
    },
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};
