// src/mocks/handlers.ts
import { http, HttpResponse } from "msw";
import { url } from "./api";

export const handlers = [
  http.get(url, ({ request }) => {
    // Читаем query параметры из URL
    const urlObj = new URL(request.url);
    const offset = parseInt(urlObj.searchParams.get("offset") || "0");
    const limit = parseInt(urlObj.searchParams.get("limit") || "5");

    // Все покемоны для разных страниц
    const allPokemons = [
      "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon",
      "charizard", "squirtle", "wartortle", "blastoise", "caterpie",
      "metapod", "butterfree", "weedle", "kakuna", "beedrill",
      "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate"
    ];

    // Получаем нужный срез покемонов
    const results = allPokemons
      .slice(offset, offset + limit)
      .map((name, index) => ({
        name,
        url: `https://pokeapi.co/api/v2/pokemon/${offset + index + 1}/`
      }));

    const totalCount = 1350;
    const nextOffset = offset + limit;
    const hasNext = nextOffset < totalCount;
    const hasPrevious = offset > 0;

    return HttpResponse.json({
      count: totalCount,
      next: hasNext 
        ? `${url}?offset=${nextOffset}&limit=${limit}` 
        : null,
      previous: hasPrevious 
        ? `${url}?offset=${Math.max(0, offset - limit)}&limit=${limit}` 
        : null,
      results,
    });
  }),
];