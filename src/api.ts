const baseUrl = "https://openholidaysapi.org";
const TOP_STORIES_API = "https://hacker-news.firebaseio.com/v0/topstories.json";
const ITEM_STORIES_API = "https://hacker-news.firebaseio.com/v0/item/";

export type IsoCountryCode = string; // "DE", "FR", "AL"
export type IsoLanguageCode = string; // "EN", "DE", "SQ"

export type CountryName = {
  language: IsoLanguageCode;
  text: string;
};

export type Country = {
  isoCode: IsoCountryCode;
  name: CountryName[];
  officialLanguages: IsoLanguageCode[];
};

export type PublicHolidaysResponse = {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  name: {
    language: string;
    text: string;
  }[];
  regionalScope: string;
  temporalScope: string;
  nationwide: boolean;
};

export type HackerNewsArticle = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: "story";
  url: string;
};

export const getCountries = async (): Promise<Country[]> => {
  const response = await fetch(`${baseUrl}/Countries?languageIsoCode=EN`);
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  return response.json();
};

export const getHolidays = async (
  countryIsoCode: string
): Promise<PublicHolidaysResponse[]> => {
  const params = new URLSearchParams({
    countryIsoCode,
    validFrom: "2026-01-01",
    validTo: "2026-12-31",
  });
  const response = await fetch(`${baseUrl}/PublicHolidays?${params}`);

  if (!response.ok) {
    throw new Error("Failed to fetch holidays");
  }

  return response.json();
};

export const getTop10Stories = async () => {
  const response = await fetch(TOP_STORIES_API);

  if (!response.ok) {
    throw new Error("Failed to fetch top stories");
  }

  const dataIds: number[] = await response.json();

  const storyIds = await dataIds.slice(0, 10);

  const articleWithDetails = await Promise.all(
    storyIds.map(async (id) => {
      const res = await fetch(`${ITEM_STORIES_API}${id}.json`);
      if (!res.ok) {
        throw new Error("Failed to fetch story details");
      }
      return res.json();
    })
  );

  return articleWithDetails;
};
