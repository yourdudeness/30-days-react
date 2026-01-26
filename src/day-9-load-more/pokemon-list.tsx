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

  return (
    <div>
      <h1>Pokemon List</h1>
      {data?.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page.results.map((pokemon: { name: string }) => (
            <div key={pokemon.name}>{pokemon.name}</div>
          ))}
        </div>
      ))}

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

      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error.message}</div>}
    </div>
  );
};

export default PokemonList;
