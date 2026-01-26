import { getHolidays, type PublicHolidaysResponse } from "../api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  selectedCountry: string;
};

export const PublicHolidays = ({ selectedCountry }: Props) => {
  const { isPending, error, data } = useQuery<PublicHolidaysResponse[]>({
    queryKey: ["holidays", selectedCountry],
    queryFn: () => getHolidays(selectedCountry),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <ul style={{ color: "black" }}>
      {data.map((item) => (
        <li key={item.id}>
          {new Date(item.startDate).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
          })}{" "}
          - {item.name?.[0].text}
        </li>
      ))}
    </ul>
  );
};
