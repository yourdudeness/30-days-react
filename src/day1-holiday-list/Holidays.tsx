import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getCountries, type Country } from "../api";
import { PublicHolidays } from "./PublicHolidays";

const Holidays = () => {
  const [selected, setSelected] = useState("NL");
  const { isPending, error, data } = useQuery<Country[]>({
    queryKey: ["contries"],
    queryFn: getCountries,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="container paper margin-top-large">
      <select
        defaultValue={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {data.map((item) => {
          return (
            <option key={item.isoCode} value={item.isoCode}>
              {item.name[0].text}
            </option>
          );
        })}
      </select>

      <PublicHolidays selectedCountry={selected} />
    </div>
  );
};

export default Holidays;
