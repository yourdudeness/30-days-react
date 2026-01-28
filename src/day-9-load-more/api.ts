import { useInfiniteQuery } from "@tanstack/react-query";

export const url = "https://pokeapi.co/api/v2/pokemon";

const fetchPokemons = async (offset: number, limit: number) => {
  const params = new URLSearchParams({
    offset: String(offset),
    limit: String(limit),
  });

  const response = await fetch(`${url}?${params}`);
  if (!response.ok) {
    throw new Error("Failed to fetch pokemons");
  }
  return response.json();
};

export const usePokemons = (limit: number) => {
  return useInfiniteQuery({
    queryKey: ["pokemons", limit],
    queryFn: ({ pageParam }) => fetchPokemons(pageParam, limit),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length * limit;
    },
  });
};
