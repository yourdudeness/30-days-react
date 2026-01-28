import React from "react";
import { usePokemons } from "./api";

const PokemonList = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = usePokemons(5);

  const shown =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) ?? 0;

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul className="pokemon-list">
        {data?.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex} >
            {page.results.map((pokemon: { name: string; url: string }) => (
              <li key={pokemon.url} role="list-item">{pokemon.name}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load More"
              : "No more pokemons"}
        </button>
      </div>

      {`Displaying ${shown} of results: ${data?.pages[0].count || 0}`}

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
    </div>
  );
};

export default PokemonList;
