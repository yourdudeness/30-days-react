import { describe, expect, it } from "vitest";
import { renderWithClient } from "../test-utils";
import PokemonList from "./pokemon-list";
import { screen, waitFor } from "@testing-library/react";

describe("PokemonList", () => {
  it("рендерит первые 5 покемонов и показывает '5 из 1280'", async () => {
    renderWithClient(<PokemonList />);
    await waitFor(() => {
      expect(screen.getByText("bulbasaur"));
    });
    expect(screen.getAllByRole("list-item")).toHaveLength(5);

    expect(
      screen.getAllByRole("list-item").map((listItem) => listItem.textContent),
    ).toMatchInlineSnapshot(`
      [
        "bulbasaur",
        "ivysaur",
        "venusaur",
        "charmander",
        "charmeleon",
      ]
    `);
  });
});
